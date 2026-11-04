/// BattleshipRules — classic 10x10 Battleship, as a pure `#turnBased` module.
/// #p1 = Admiral One, #p2 = Admiral Two (display only).
///
/// Rules:
///   FLEET   each admiral commands five ships: carrier (5 cells), battleship
///           (4), cruiser (3), submarine (3), destroyer (2).
///   SETUP   the seats place their whole fleet in ONE action, #p1 first, then
///           #p2, each on their own 10x10 grid: every ship lies straight,
///           horizontally (extending right from its anchor) or vertically
///           (extending down), fully on the grid, no two ships overlapping
///           (touching is allowed). A fleet stays hidden from the opponent
///           until its ships are sunk (or the game is over).
///   BATTLE  once both fleets are placed a coin toss picks who shoots first.
///           The seat on turn fires at one cell of the enemy grid it has not
///           fired at before. A MISS passes the turn; a HIT keeps it with the
///           shooter, who fires again. A ship all of whose cells are hit is
///           sunk, and is revealed to both admirals.
///   WIN     the admiral who sinks the enemy's last ship wins. There is no
///           draw.
///
/// Follow-up moves (framework guide, turn-based-games.md, "Follow-up moves"):
/// a hit grants another shot, but whether a shot hits is hidden from the
/// shooter until the canister answers, so a turn cannot be built client-side
/// as one batched action (as dots and boxes does, where the mover can predict
/// it). Hence ONE #fire per call, `move` keeps `turn` on a hit, and the
/// player sees each result before choosing the next shot. The fleet, by
/// contrast, is one whole-turn #place action: nothing about it is hidden.
///
/// Time limit for setup: the rules are pure and cannot read a clock, so the
/// limit is the engine's claim-win window (Host.mo `claimTimeout`): an
/// admiral who does not place the fleet in time may have the win claimed
/// against them. The page also runs a countdown and, at zero, fills in
/// the missing ships at random and sends the fleet itself.

import TP "mo:duel-game-core";
import Rng "mo:duel-game-core/rng";
import Array "mo:core/Array";
import Nat "mo:core/Nat";

module {

  /// Served at `GET /semantics`; see the backend README, "Semantics over HTTP".
  public let SEMANTICS : Text = "GAME: Battleship (classic 10x10)
MODE: turnBased (one action per turn; a hit keeps the turn)
SEATS: p1 = Admiral One, p2 = Admiral Two. In the setup phase p1 acts first,
then p2. In the battle phase the seat named by View.toMove acts.
OPTIONS: none (type Options = record {})

VIEW (Candid) -- what ONE seat sees; the opponent's unsunk ships are absent
  type Seat = variant { p1; p2 };
  type ShipKind = variant { carrier; battleship; cruiser; submarine; destroyer };
  type Ship = record { kind : ShipKind; x : nat; y : nat; horizontal : bool };
  type Mark = record { x : nat; y : nat; hit : bool };
  type SideView = record {
    placed : bool;
    ships : vec Ship;
    shots : vec Mark;
    sunk : nat;
  };
  type Shot = record { by : Seat; x : nat; y : nat; hit : bool; sunk : opt Ship };
  type View = record {
    phase : variant { placing; battle };
    toMove : Seat;
    you : SideView;
    opp : SideView;
    last : opt Shot;
  };
  Coordinates: x is the column 0..9 (left to right), y the row 0..9 (top to
  bottom). A Ship is anchored at (x, y) and covers `length` cells: to the
  right (x .. x+length-1) when horizontal, downwards (y .. y+length-1)
  otherwise. Lengths: carrier 5, battleship 4, cruiser 3, submarine 3,
  destroyer 2.
  you.ships is your whole fleet. you.shots are the enemy's shots at YOUR grid
  in firing order (hit = it struck one of your ships). you.sunk counts your
  ships that are sunk. you.placed tells whether your fleet is down.
  opp.ships lists only the enemy ships already sunk, until the game is over,
  when it lists the whole enemy fleet. opp.shots are YOUR shots at the
  enemy's grid in firing order. opp.sunk counts enemy ships sunk. opp.placed
  tells whether the enemy fleet is down.
  last is the most recent shot of the battle (by whom, where, hit or miss,
  and the ship it sank if any); null before the first shot.

ACTION (Candid)
  type Action = variant {
    place : vec Ship;
    fire : record { x : nat; y : nat };
  };
  place (setup phase only): your whole fleet, exactly five ships, one of each
  kind, in any order.
  fire (battle phase only, on your turn): shoot at the enemy cell (x, y).

RULES
  Rejections: place outside the setup phase; a fleet that is not exactly one
  of each kind; a ship leaving the 10x10 grid; two ships sharing a cell;
  fire during the setup phase; fire outside the grid; fire at a cell you
  already fired at. (Acting out of turn is rejected by the engine.)
  A miss passes the turn to the other seat; a hit leaves it with the
  shooter. After the setup phase a coin toss decides who shoots first.

ENDINGS
  The seat that sinks all five enemy ships wins (p1Wins / p2Wins). No draw.
  Also (engine): a seat that does not act in time can be defeated by a
  claim, and leaving a game aborts it.

CLIENT NOTES
  The setup limit is only a client countdown plus the engine's claim-win
  window: a page should place a random fleet for a player whose time ran out.
  To show a hit/miss history, use you.shots / opp.shots in order and `last`
  for the move that just happened.
";

  public type ShipKind = { #carrier; #battleship; #cruiser; #submarine; #destroyer };

  /// Anchored at (x, y): extends right when `horizontal`, down otherwise.
  public type Ship = { kind : ShipKind; x : Nat; y : Nat; horizontal : Bool };

  public type Cell = { x : Nat; y : Nat };

  public type Action = {
    /// Setup phase: the whole fleet in one action.
    #place : [Ship];
    /// Battle phase: shoot at a cell of the enemy grid.
    #fire : Cell;
  };

  public type Phase = { #placing; #battle };

  /// One admiral's side. `fleet` is empty until it has been placed;
  /// `incoming` is every shot the enemy fired at this grid, in order.
  public type Side = { fleet : [Ship]; incoming : [Cell] };

  /// The latest shot, public to both admirals (a sunk ship is revealed).
  public type Shot = { by : TP.Seat; x : Nat; y : Nat; hit : Bool; sunk : ?Ship };

  public type State = {
    phase : Phase;
    turn : TP.Seat;
    p1 : Side;
    p2 : Side;
    last : ?Shot;
  };

  public type Mark = { x : Nat; y : Nat; hit : Bool };

  public type SideView = {
    placed : Bool;
    ships : [Ship];
    shots : [Mark];
    sunk : Nat;
  };

  public type View = {
    phase : Phase;
    toMove : TP.Seat;
    you : SideView;
    opp : SideView;
    last : ?Shot;
  };

  public type Options = {};

  public func checkOptions(_ : Options) : ?Text = null;

  // ── fixed game data ───────────────────────────────────────────────────
  public let SIZE : Nat = 10;
  public let KINDS : [ShipKind] = [#carrier, #battleship, #cruiser, #submarine, #destroyer];

  public func sideName(seat : TP.Seat) : Text = switch (seat) {
    case (#p1) "Admiral One";
    case (#p2) "Admiral Two";
  };

  public func length(kind : ShipKind) : Nat = switch (kind) {
    case (#carrier) 5;
    case (#battleship) 4;
    case (#cruiser) 3;
    case (#submarine) 3;
    case (#destroyer) 2;
  };

  func other(seat : TP.Seat) : TP.Seat = switch (seat) { case (#p1) #p2; case (#p2) #p1 };

  func sideOf(s : State, seat : TP.Seat) : Side = switch (seat) { case (#p1) s.p1; case (#p2) s.p2 };

  /// The cells a ship covers.
  public func cellsOf(ship : Ship) : [Cell] =
    Array.tabulate<Cell>(length(ship.kind), func(i) =
      if (ship.horizontal) ({ x = ship.x + i; y = ship.y }) else ({ x = ship.x; y = ship.y + i }));

  func onGrid(ship : Ship) : Bool =
    ship.x < SIZE and ship.y < SIZE and (
      if (ship.horizontal) ship.x + length(ship.kind) <= SIZE
      else ship.y + length(ship.kind) <= SIZE
    );

  func sameCell(a : Cell, b : Cell) : Bool = a.x == b.x and a.y == b.y;

  func hasCell(cells : [Cell], c : Cell) : Bool =
    Array.find<Cell>(cells, func(d) = sameCell(c, d)) != null;

  /// Index of the ship covering `c`, if any.
  func shipAt(fleet : [Ship], c : Cell) : ?Ship =
    Array.find<Ship>(fleet, func(sh) = hasCell(cellsOf(sh), c));

  func isSunk(ship : Ship, incoming : [Cell]) : Bool =
    Array.all<Cell>(cellsOf(ship), func(c) = hasCell(incoming, c));

  func sunkCount(side : Side) : Nat =
    Array.filter<Ship>(side.fleet, func(sh) = isSunk(sh, side.incoming)).size();

  /// Why `fleet` is not a legal setup, or null.
  public func checkFleet(fleet : [Ship]) : ?Text {
    if (fleet.size() != KINDS.size()) return ?"Place exactly five ships: carrier, battleship, cruiser, submarine, destroyer.";
    for (k in KINDS.values()) {
      let n = Array.filter<Ship>(fleet, func(sh) = sh.kind == k).size();
      if (n != 1) return ?"The fleet needs exactly one ship of each kind.";
    };
    for (sh in fleet.values()) {
      if (not onGrid(sh)) return ?"A ship leaves the 10x10 grid.";
    };
    var taken : [Cell] = [];
    for (sh in fleet.values()) {
      for (c in cellsOf(sh).values()) {
        if (hasCell(taken, c)) return ?"Two ships overlap.";
        taken := Array.concat(taken, [c]);
      };
    };
    null;
  };

  /// null = legal. (The engine itself rejects an action out of turn.)
  public func validate(s : State, seat : TP.Seat, a : Action) : ?Text {
    if (seat != s.turn) return ?"It is not your turn.";
    switch (a, s.phase) {
      case (#place fleet, #placing) checkFleet(fleet);
      case (#place _, #battle) ?"The fleets are already placed.";
      case (#fire _, #placing) ?"Place your fleet first.";
      case (#fire c, #battle) {
        if (c.x >= SIZE or c.y >= SIZE) return ?"That cell is outside the grid.";
        if (hasCell(sideOf(s, other(seat)).incoming, c)) return ?"You already fired at that cell.";
        null;
      };
    };
  };

  func withSide(s : State, seat : TP.Seat, side : Side) : State = switch (seat) {
    case (#p1) ({ s with p1 = side });
    case (#p2) ({ s with p2 = side });
  };

  public func init(_ : Options, _ : TP.Rng) : State = {
    phase = #placing;
    turn = #p1;
    p1 = { fleet = []; incoming = [] };
    p2 = { fleet = []; incoming = [] };
    last = null;
  };

  /// Check and apply one action of `seat`.
  public func move(s : State, seat : TP.Seat, a : Action, rng : TP.Rng) : {
    #ok : { state : State; verdict : ?TP.Verdict };
    #err : Text;
  } {
    switch (validate(s, seat, a)) {
      case (?why) return #err why;
      case null {};
    };
    switch (a) {
      case (#place fleet) {
        let mine = sideOf(s, seat);
        let placed = withSide(s, seat, { mine with fleet });
        let state : State = switch (seat) {
          // #p1 is done: #p2 places next.
          case (#p1) ({ placed with turn = #p2 });
          // Both fleets are down: the coin decides who opens the battle.
          case (#p2) ({ placed with phase = #battle; turn = if (Rng.below(rng, 2) == 0) #p1 else #p2 });
        };
        #ok { state; verdict = null };
      };
      case (#fire c) {
        let foe = other(seat);
        let target = sideOf(s, foe);
        let incoming = Array.concat(target.incoming, [c]);
        let hitShip = shipAt(target.fleet, c);
        let sunkShip : ?Ship = switch (hitShip) {
          case (?sh) if (isSunk(sh, incoming)) ?sh else null;
          case null null;
        };
        let after = { target with incoming };
        let hit = hitShip != null;
        let won = Array.all<Ship>(after.fleet, func(sh) = isSunk(sh, incoming));
        let state : State = {
          withSide(s, foe, after) with
          turn = if (hit) seat else foe;
          last = ?{ by = seat; x = c.x; y = c.y; hit; sunk = sunkShip };
        };
        #ok { state; verdict = if (won) (switch (seat) { case (#p1) ?#p1Wins; case (#p2) ?#p2Wins }) else null };
      };
    };
  };

  public func toMove(s : State) : TP.Seat = s.turn;

  func marks(side : Side) : [Mark] =
    Array.map<Cell, Mark>(side.incoming, func(c) = { x = c.x; y = c.y; hit = shipAt(side.fleet, c) != null });

  /// What `seat` sees: its own fleet in full and every shot fired at either
  /// grid; the enemy's ships only once sunk, or all of them after the end.
  public func view(s : State, seat : TP.Seat, over : Bool) : View {
    let mine = sideOf(s, seat);
    let theirs = sideOf(s, other(seat));
    {
      phase = s.phase;
      toMove = s.turn;
      you = {
        placed = mine.fleet.size() > 0;
        ships = mine.fleet;
        shots = marks(mine);
        sunk = sunkCount(mine);
      };
      opp = {
        placed = theirs.fleet.size() > 0;
        ships = if (over) theirs.fleet else Array.filter<Ship>(theirs.fleet, func(sh) = isSunk(sh, theirs.incoming));
        shots = marks(theirs);
        sunk = sunkCount(theirs);
      };
      last = s.last;
    };
  };

  /// Every cell `seat` may fire at now (empty outside the battle phase).
  public func legalShots(s : State, seat : TP.Seat) : [Cell] {
    if (s.phase != #battle or seat != s.turn) return [];
    let seen = sideOf(s, other(seat)).incoming;
    var out : [Cell] = [];
    for (y in Nat.range(0, SIZE)) {
      for (x in Nat.range(0, SIZE)) {
        let c = { x; y };
        if (not hasCell(seen, c)) out := Array.concat(out, [c]);
      };
    };
    out;
  };

  public let spec : TP.Spec<State, Action, View, Options> = #turnBased {
    checkOptions;
    init;
    toMove;
    move;
    view;
  };
};

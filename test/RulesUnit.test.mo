// Unit checks for BattleshipRules: init/move/view called directly, no engine.
// Run: mops test
import R "../src/BattleshipRules";
import TP "mo:duel-game-core";
import Rng "mo:duel-game-core/rng";
import Array "mo:core/Array";
import Debug "mo:core/Debug";
import Runtime "mo:core/Runtime";

let rng = Rng.new(42);
let options : R.Options = {};

// A legal fleet: every ship horizontal on its own row, anchored at x = 0.
let fleetA : [R.Ship] = [
  { kind = #carrier; x = 0; y = 0; horizontal = true },
  { kind = #battleship; x = 0; y = 2; horizontal = true },
  { kind = #cruiser; x = 0; y = 4; horizontal = true },
  { kind = #submarine; x = 0; y = 6; horizontal = true },
  { kind = #destroyer; x = 0; y = 8; horizontal = true },
];
// Another legal fleet, vertical, along the right-hand columns.
let fleetB : [R.Ship] = [
  { kind = #carrier; x = 9; y = 0; horizontal = false },
  { kind = #battleship; x = 7; y = 0; horizontal = false },
  { kind = #cruiser; x = 5; y = 0; horizontal = false },
  { kind = #submarine; x = 3; y = 0; horizontal = false },
  { kind = #destroyer; x = 1; y = 0; horizontal = false },
];

func swap(f : [R.Ship], at : Nat, ship : R.Ship) : [R.Ship] =
  Array.tabulate<R.Ship>(f.size(), func(i) { if (i == at) ship else f[i] });

func ok(r : { #ok : { state : R.State; verdict : ?TP.Verdict }; #err : Text }) : { state : R.State; verdict : ?TP.Verdict } =
  switch (r) { case (#ok o) o; case (#err why) Runtime.trap("rejected: " # why) };

func rejected(s : R.State, seat : TP.Seat, a : R.Action) : Text =
  switch (R.move(s, seat, a, rng)) {
    case (#err why) why;
    case (#ok _) Runtime.trap("expected a rejection");
  };

func fire(s : R.State, seat : TP.Seat, x : Nat, y : Nat) : { state : R.State; verdict : ?TP.Verdict } =
  ok(R.move(s, seat, #fire { x; y }, rng));

// Both fleets down; returns the battle state with `first` on turn.
func battle(first : TP.Seat) : R.State {
  let s1 = ok(R.move(R.init(options, rng), #p1, #place fleetA, rng)).state;
  var s = ok(R.move(s1, #p2, #place fleetB, rng)).state;
  // The coin toss is the only randomness: force the opener for the test.
  s := { s with turn = first };
  s;
};

// 1. options, init and spec wiring.
assert R.checkOptions(options) == null;
let s0 = R.init(options, rng);
assert s0.phase == #placing and s0.turn == #p1;
assert s0.p1.fleet.size() == 0 and s0.p2.incoming.size() == 0 and s0.last == null;
switch (R.spec) {
  case (#turnBased t) { assert t.toMove(t.init(options, rng)) == #p1 };
  case (#simultaneous _) Runtime.trap("expected a #turnBased spec");
};
Debug.print("1. options + init + spec wiring OK");

// 2. setup: each way a fleet can be illegal, then the legal ones.
assert R.checkFleet(fleetA) == null and R.checkFleet(fleetB) == null;
assert R.checkFleet([]) != null;
assert R.checkFleet(Array.sliceToArray(fleetA, 0, 4)) != null; // four ships
ignore rejected(s0, #p1, #place (Array.concat(Array.sliceToArray(fleetA, 0, 4), [{ kind = #carrier; x = 0; y = 9; horizontal = true }]))); // two carriers, no destroyer
// off the grid, horizontally and vertically, and anchor outside
assert R.checkFleet(swap(fleetA, 0, { kind = #carrier; x = 6; y = 0; horizontal = true })) != null;
assert R.checkFleet(swap(fleetA, 0, { kind = #carrier; x = 0; y = 6; horizontal = false })) != null;
assert R.checkFleet(swap(fleetA, 4, { kind = #destroyer; x = 10; y = 0; horizontal = true })) != null;
// overlap: destroyer on the carrier's row
assert R.checkFleet(swap(fleetA, 4, { kind = #destroyer; x = 3; y = 0; horizontal = true })) != null;
// a legal fleet may touch: destroyer right under the carrier
assert R.checkFleet(swap(fleetA, 4, { kind = #destroyer; x = 0; y = 1; horizontal = true })) == null;
// p1 places, then it is p2's turn and still setup; fire is refused in setup
let afterP1 = ok(R.move(s0, #p1, #place fleetA, rng));
assert afterP1.verdict == null and afterP1.state.phase == #placing and afterP1.state.turn == #p2;
ignore rejected(s0, #p1, #fire { x = 0; y = 0 });
// p2 places: battle begins with a legal opener
let afterP2 = ok(R.move(afterP1.state, #p2, #place fleetB, rng));
assert afterP2.state.phase == #battle;
// placing again is refused
ignore rejected(afterP2.state, afterP2.state.turn, #place fleetA);
Debug.print("2. setup validation OK");

// 3. battle: miss passes the turn, hit keeps it, repeats and bounds are refused.
let b = battle(#p1);
let miss = fire(b, #p1, 9, 9); // p2's grid: fleetB covers (9,0..4); (9,9) is open water
assert miss.state.turn == #p2 and miss.verdict == null;
switch (miss.state.last) { case (?l) { assert not l.hit and l.by == #p1 and l.x == 9 and l.sunk == null }; case null Runtime.trap("last missing") };
let hit = fire(b, #p1, 9, 0); // carrier of p2
assert hit.state.turn == #p1;
switch (hit.state.last) { case (?l) { assert l.hit and l.sunk == null }; case null Runtime.trap("last missing") };
ignore rejected(hit.state, #p1, #fire { x = 9; y = 0 }); // same cell twice
ignore rejected(b, #p1, #fire { x = 10; y = 0 });
ignore rejected(b, #p1, #fire { x = 0; y = 10 });
ignore rejected(b, #p2, #fire { x = 0; y = 0 }); // not p2's turn
// sinking the destroyer (x=1, y=0..1) reveals it
let h1 = fire(b, #p1, 1, 0);
let h2 = fire(h1.state, #p1, 1, 1);
switch (h2.state.last) {
  case (?l) { assert l.hit and (switch (l.sunk) { case (?sh) sh.kind == #destroyer; case null false }) };
  case null Runtime.trap("last missing");
};
assert h2.state.turn == #p1; // sinking is a hit: shoot again
Debug.print("3. battle turns + rejections OK");

// 4. a win: p1 sinks everything of fleetB; p2 misses in between.
var w = battle(#p1);
var shots = 0;
label sweep for (ship in fleetB.values()) {
  for (c in R.cellsOf(ship).values()) {
    let r = fire(w, #p1, c.x, c.y);
    w := r.state;
    shots += 1;
    if (shots == 17) {
      assert r.verdict == ?#p1Wins;
      break sweep;
    } else {
      assert r.verdict == null and w.turn == #p1;
    };
  };
};
assert shots == 17;
// and p2 can win too
var w2 = battle(#p2);
var n2 = 0;
for (ship in fleetA.values()) {
  for (c in R.cellsOf(ship).values()) {
    let r = fire(w2, #p2, c.x, c.y);
    w2 := r.state;
    n2 += 1;
    if (n2 == 17) { assert r.verdict == ?#p2Wins };
  };
};
assert n2 == 17;
Debug.print("4. win paths OK");

// 5. view: hidden until sunk / over; own fleet in full; marks carry hit flags.
let afterTwo = fire(fire(b, #p1, 9, 0).state, #p1, 8, 9).state; // hit (9,0), miss (8,9) -> p2's turn
let v1 = R.view(afterTwo, #p1, false);
assert v1.you.ships.size() == 5 and v1.you.placed and v1.opp.placed;
assert v1.opp.ships.size() == 0; // nothing of the enemy fleet is revealed yet
assert v1.opp.shots.size() == 2 and v1.opp.shots[0].hit and not v1.opp.shots[1].hit;
assert v1.you.shots.size() == 0;
assert v1.toMove == #p2;
let v2 = R.view(afterTwo, #p2, false);
assert v2.you.shots.size() == 2 and v2.you.shots[0].hit; // p2 sees the shots at its grid
assert v2.opp.ships.size() == 0 and v2.opp.shots.size() == 0;
// sinking reveals just that ship
let sunkView = R.view(h2.state, #p1, false);
assert sunkView.opp.ships.size() == 1 and sunkView.opp.ships[0].kind == #destroyer and sunkView.opp.sunk == 1;
// over = true reveals the whole fleet
let over = R.view(afterTwo, #p1, true);
assert over.opp.ships.size() == 5;
// during setup the opponent's fleet is not visible, only whether it is placed
let setupView = R.view(afterP1.state, #p2, false);
assert setupView.opp.placed and setupView.opp.ships.size() == 0 and not setupView.you.placed;
Debug.print("5. view hiding OK");

// 6. legalShots: whole grid at the start, fewer after a shot, none off turn.
assert R.legalShots(b, #p1).size() == 100;
assert R.legalShots(b, #p2).size() == 0;
assert R.legalShots(miss.state, #p2).size() == 100;
assert R.legalShots(fire(b, #p1, 9, 0).state, #p1).size() == 99;
Debug.print("6. legalShots OK");

Debug.print("ALL BattleshipRules RULESUNIT CHECKS PASSED");

const assert = require("assert");
const engine = require("../assets/projects/flappySquare/gameEngine.js");

function runSimulation(step, totalTime) {
  const state = engine.createState();
  state.running = true;

  for (let time = 0; time < totalTime; time += step) {
    engine.update(state, step, () => 0.5);
  }

  return state;
}

const smooth = runSimulation(1 / 120, 0.6);
const normal = runSimulation(1 / 60, 0.6);

assert.ok(Math.abs(smooth.square.y - normal.square.y) < 4, "movement should stay stable across frame rates");
assert.strictEqual(smooth.pipes.length, normal.pipes.length, "pipe spawning should not depend on frame count");

const collisionState = engine.createState();
collisionState.square.y = engine.config.height;
assert.strictEqual(engine.hasCollision(collisionState), true, "floor collision should be detected");

console.log("flappyEngine.test.js: OK");

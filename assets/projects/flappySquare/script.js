const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d", { alpha: false });
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const engine = window.FlappySquareEngine;
const state = engine.createState();
let lastTimestamp = 0;
let animationId = null;

function syncScore() {
  scoreElement.textContent = String(state.score);
}

function resetGame() {
  engine.resetState(state);
  lastTimestamp = 0;
  syncScore();
  draw();
}

function startGame() {
  if (state.running) {
    engine.flap(state);
    return;
  }

  if (state.over) {
    resetGame();
  }

  state.running = true;
  lastTimestamp = 0;
  animationId = requestAnimationFrame(loop);
}

function playerAction() {
  if (!state.running) {
    startGame();
  }

  engine.flap(state);
}

function drawBackground() {
  ctx.fillStyle = "#dbeafe";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#bfdbfe";
  const offset = (state.time * 42) % 130;
  for (let i = 0; i < 8; i += 1) {
    ctx.fillRect(i * 130 - offset, 330, 90, 18);
  }
}

function drawMessage() {
  if (state.running) {
    return;
  }

  ctx.fillStyle = "rgba(17, 24, 39, 0.72)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 34px system-ui";
  ctx.textAlign = "center";
  ctx.fillText(state.over ? "Koniec gry" : "Gotowy?", canvas.width / 2, canvas.height / 2 - 12);
  ctx.font = "500 18px system-ui";
  ctx.fillText(state.over ? "Kliknij, żeby zagrać ponownie" : "Kliknij Start albo naciśnij spację", canvas.width / 2, canvas.height / 2 + 24);
}

function draw() {
  drawBackground();

  ctx.fillStyle = "#0f766e";
  for (const pipe of state.pipes) {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
  }

  ctx.fillStyle = "#c2410c";
  ctx.fillRect(state.square.x, state.square.y, state.square.size, state.square.size);

  drawMessage();
}

function loop(timestamp) {
  if (!state.running) {
    animationId = null;
    draw();
    return;
  }

  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const deltaSeconds = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  engine.update(state, deltaSeconds, Math.random);
  syncScore();
  draw();
  animationId = requestAnimationFrame(loop);
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  resetGame();
});
canvas.addEventListener("pointerdown", playerAction);
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    playerAction();
  }
});

resetGame();

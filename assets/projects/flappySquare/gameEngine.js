(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.FlappySquareEngine = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const config = {
    width: 720,
    height: 420,
    gravity: 980,
    flapVelocity: -330,
    pipeSpeed: 190,
    pipeWidth: 62,
    pipeGap: 136,
    pipeInterval: 1.45,
    squareStartX: 90,
    squareStartY: 180,
    squareSize: 30,
  };

  function createState() {
    return {
      running: false,
      over: false,
      time: 0,
      pipeTimer: 0,
      score: 0,
      square: {
        x: config.squareStartX,
        y: config.squareStartY,
        size: config.squareSize,
        velocity: 0,
      },
      pipes: [],
    };
  }

  function resetState(state) {
    Object.assign(state, createState());
    return state;
  }

  function getPipeTop(randomValue) {
    const minTop = 54;
    const maxTop = config.height - config.pipeGap - 66;
    return minTop + randomValue * (maxTop - minTop);
  }

  function addPipe(state, randomValue) {
    const top = getPipeTop(randomValue);

    state.pipes.push({
      x: config.width,
      width: config.pipeWidth,
      top,
      bottom: top + config.pipeGap,
      counted: false,
    });
  }

  function flap(state) {
    state.square.velocity = config.flapVelocity;
  }

  function update(state, deltaSeconds, randomSource) {
    if (!state.running || state.over) {
      return state;
    }

    const delta = Math.min(deltaSeconds, 0.05);
    state.time += delta;
    state.pipeTimer += delta;
    state.square.velocity += config.gravity * delta;
    state.square.y += state.square.velocity * delta;

    while (state.pipeTimer >= config.pipeInterval) {
      state.pipeTimer -= config.pipeInterval;
      addPipe(state, randomSource());
    }

    for (const pipe of state.pipes) {
      pipe.x -= config.pipeSpeed * delta;

      if (!pipe.counted && pipe.x + pipe.width < state.square.x) {
        pipe.counted = true;
        state.score += 1;
      }
    }

    state.pipes = state.pipes.filter((pipe) => pipe.x + pipe.width > -10);

    if (hasCollision(state)) {
      state.running = false;
      state.over = true;
    }

    return state;
  }

  function hasCollision(state) {
    const { x, y, size } = state.square;
    const hitFloor = y + size > config.height;
    const hitCeiling = y < 0;
    const hitPipe = state.pipes.some((pipe) => {
      const overlapsX = x < pipe.x + pipe.width && x + size > pipe.x;
      const outsideGap = y < pipe.top || y + size > pipe.bottom;
      return overlapsX && outsideGap;
    });

    return hitFloor || hitCeiling || hitPipe;
  }

  return {
    config,
    createState,
    resetState,
    addPipe,
    flap,
    update,
    hasCollision,
  };
});

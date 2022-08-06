const resetButton = document.getElementById("reset");

function setPaintColor(color) {
  ctx.fillStyle = color;
}

function rect(x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

function beginPath() {
  ctx.beginPath();
}

function isInCanvas(e) {
  if (
    e.clientX > CANVAS_LEFT_MARGIN &&
    e.clientX < CANVAS_LEFT_MARGIN + CANVAS_WIDTH &&
    e.clientY > CANVAS_TOP_MARGIN &&
    e.clientY < CANVAS_TOP_MARGIN + CANVAS_HEIGHT
  ) {
    return true;
  } else {
    return false;
  }
}

function reset() {}

function clear() {
  ctx.save();
  ctx.fillStyle = CANVAS_COLOR;
  ctx.fillRect(
    CANVAS_LEFT_MARGIN,
    CANVAS_TOP_MARGIN,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  ctx.restore();
}

class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

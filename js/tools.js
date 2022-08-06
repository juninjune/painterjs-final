const resetButton = document.getElementById("reset");
const backgroundImg = new Image();
backgroundImg.src = "../img/background.png";

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
  ctx.clearRect(0, 0, BACKGROUND_CANVAS_WIDTH, BACKGROUND_CANVAS_HEIGHT);
}

function fill() {
  CANVAS_COLOR = ctx.fillStyle;
  ctx.fillRect(
    CANVAS_LEFT_MARGIN,
    CANVAS_TOP_MARGIN,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
}

class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

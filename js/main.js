const trash = document.getElementById("reset");

const lineWidth = document.querySelector("#stroke-width");
const lines = new Lines();

let isPaint = false;
let isDrawing = false;
let line;

function mouseMove(e) {
  if (isInCanvas(e)) {
    canvas.style.pointerEvents = "auto";
    if (isDrawing) {
      line.stroke(e);
    }
  } else {
    canvas.style.pointerEvents = "none";
    if (isDrawing) {
      isDrawing = false;
      line.endStroke();
    }
  }
}

function mouseDown(e) {
  if (isInCanvas(e)) {
    if (isPaint) {
    } else {
      line = new Line(e, ctx.lineWidth, ctx.strokeStyle);
      isDrawing = true;
      line.startStroke(e);
    }
  }
}

function mouseUp() {
  if (isDrawing) {
    isDrawing = false;
    line.endStroke();
  }
}

function changeWidth(e) {
  ctx.lineWidth = e.target.value;
}

window.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

lineWidth.addEventListener("change", changeWidth);
trash.addEventListener("click", reset);

function reset() {
  lines.addForce(80);
}

function update() {
  lines.update();
  lines.drawLines();
}

setInterval(update, 30);

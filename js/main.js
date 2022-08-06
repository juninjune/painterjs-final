const lineWidth = document.querySelector("#stroke-width");
const lines = new Lines();

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
    isDrawing = false;
  }
}

function mouseDown(e) {
  if (isInCanvas(e)) {
    line = new Line(e, ctx.lineWidth, ctx.strokeStyle);
    isDrawing = true;
    line.startStroke(e);
  }
}

function mouseUp() {
  isDrawing = false;
  line.endStroke();
}

function changeWidth(e) {
  ctx.lineWidth = e.target.value;
}

window.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

lineWidth.addEventListener("change", changeWidth);

setInterval(lines.drawLines, 3000);

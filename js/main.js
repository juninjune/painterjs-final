const lineWidth = document.querySelector("#stroke-width");
const color = document.querySelector("#color");
const colorChips = Array.from(
  document.getElementsByClassName("palette__color-chip")
);
let selectedColorChip = null;

for (let i = 0; i < colorChips.length; i++) {
  colorChips[i].dataset.color = SELECT_COLORS[i];
  colorChips[i].addEventListener("click", changeColorByColorChip);
}
console.log(colorChips);

let isDrawing = false;

function mouseMove(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  if (!isInCanvas(e)) {
    canvas.style.pointerEvents = "none";
    isDrawing = false;
  } else {
    canvas.style.pointerEvents = "auto";
  }
}

function mouseDown(e) {
  if (isInCanvas(e)) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  }
}

function mouseUp() {
  isDrawing = false;
}

function changeWidth(e) {
  ctx.lineWidth = e.target.value;
  console.log(e.target.value);
}

function changeColor(value) {
  console.log(value);
  ctx.fillStyle = value;
  ctx.strokeStyle = value;
}

function changeColorByColorInput(e) {
  changeColor(e.target.value);
}

function changeColorByColorChip(e) {
  changeColor(e.target.dataset.color);
  if (selectedColorChip) {
    console.dir(selectedColorChip);
    selectedColorChip.classList.remove("selected-chip");
  }
  selectedColorChip = e.target;
  e.target.classList.add("selected-chip");
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

window.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

lineWidth.addEventListener("change", changeWidth);
color.addEventListener("change", changeColorByColorInput);

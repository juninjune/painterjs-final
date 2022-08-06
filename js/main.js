const save = document.getElementById("save");
const textChips = Array.from(
  document.getElementsByClassName("bottom-bar__text-chip")
);
const font = document.getElementById("font-size");
const text = document.getElementById("custom-text");
const file = document.getElementById("img-file");
const trash = document.getElementById("reset");
const strokeMode = document.getElementById("stroke-mode");
const fillMode = document.getElementById("fill-mode");

const lineWidth = document.querySelector("#stroke-width");
const lines = new Lines();

let isFill = false;
let isDrawing = false;
let line;
let fontSize = "20px";

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
    if (isFill) {
      fill();
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

fillMode.addEventListener("click", () => {
  isFill = true;
  fillMode.classList.add("selected-mode");
  strokeMode.classList.remove("selected-mode");
});
strokeMode.addEventListener("click", () => {
  isFill = false;
  strokeMode.classList.add("selected-mode");
  fillMode.classList.remove("selected-mode");
});

trash.addEventListener("click", onTrash);
file.addEventListener("change", fileChange);
canvas.addEventListener("dblclick", textInput);
font.addEventListener("change", onFontSizeChange);
for (let i = 0; i < textChips.length; i++) {
  textChips[i].addEventListener("click", onTextChipSelected);
}
save.addEventListener("click", onSaveClicked);

function onTrash() {
  lineReset();
  setTimeout(() => {
    clear();
  }, 3000);
}

function lineReset() {
  lines.reset(80);
}

function fileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(
      img,
      CANVAS_LEFT_MARGIN,
      CANVAS_TOP_MARGIN,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
  };
}

function textInput(e) {
  ctx.save();
  ctx.font = fontSize + " serif";
  ctx.fillText(text.value, e.offsetX, e.offsetY);
  ctx.restore();
}

function onFontSizeChange(e) {
  console.log(e);
  fontSize = e.target.value;
}

function onTextChipSelected(e) {
  text.value = e.target.dataset.text;
}

function onSaveClicked() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "PAIN!T!.png";
  a.click();
}

function update() {
  lines.update();
  lines.drawLines();
}

setInterval(update, 30);

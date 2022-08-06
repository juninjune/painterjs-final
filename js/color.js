const color = document.querySelector("#color");
const colorChips = Array.from(
  document.getElementsByClassName("palette__color-chip")
);

function changeColor(value) {
  ctx.fillStyle = value;
  ctx.strokeStyle = value;
}

function changeColorByColorInput(e) {
  changeColor(e.target.value);
}

function changeColorByColorChip(e) {
  changeColor(e.target.dataset.color);
  if (selectedColorChip) {
    selectedColorChip.classList.remove("selected-chip");
  }
  selectedColorChip = e.target;
  e.target.classList.add("selected-chip");
}

color.addEventListener("change", changeColorByColorInput);
let selectedColorChip = null;
for (let i = 0; i < colorChips.length; i++) {
  colorChips[i].dataset.color = SELECT_COLORS[i];
  colorChips[i].addEventListener("click", changeColorByColorChip);
}

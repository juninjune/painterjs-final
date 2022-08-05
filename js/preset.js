const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_TOP_MARGIN = 150;
const CANVAS_LEFT_MARGIN = 100;
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

const BACKGROUND_COLOR = "#FBAC9B";
const CANVAS_COLOR = "#FAF3EB";

const SELECT_COLORS = [
  "#fa5d1e",
  "#fbd43b",
  "#f5cdbf",
  "#fa9c4f",
  "#5283dc",
  "#a6573b",
  "#9ba8c8",
  "#da8979",
  "#ec240d",
  "#c7695c",
  "#3f2322",
];

canvas.style.backgroundColor = BACKGROUND_COLOR;

function resize() {
  canvas.width = 884;
  canvas.height = 697;
}

resize();

setPaintColor(CANVAS_COLOR);
rect(CANVAS_LEFT_MARGIN, CANVAS_TOP_MARGIN, CANVAS_WIDTH, CANVAS_HEIGHT);

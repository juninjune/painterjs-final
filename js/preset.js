const backgroundCanvas = document.getElementById("myCanvas");
const backgroundCtx = backgroundCanvas.getContext("2d");

const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

const BACKGROUND_CANVAS_WIDTH = 775;
const BACKGROUND_CANVAS_HEIGHT = 590;

const CANVAS_TOP_MARGIN = 100;
const CANVAS_LEFT_MARGIN = 50;
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
  "#3f2322",
  "#FAF3EB",
];

backgroundCanvas.style.backgroundColor = BACKGROUND_COLOR;

function resize() {
  backgroundCanvas.width = BACKGROUND_CANVAS_WIDTH;
  backgroundCanvas.height = BACKGROUND_CANVAS_HEIGHT;
  canvas.width = BACKGROUND_CANVAS_WIDTH;
  canvas.height = BACKGROUND_CANVAS_HEIGHT;
}

resize();

backgroundCtx.fillStyle = CANVAS_COLOR;
backgroundCtx.fillRect(
  CANVAS_LEFT_MARGIN,
  CANVAS_TOP_MARGIN,
  CANVAS_WIDTH,
  CANVAS_HEIGHT
);

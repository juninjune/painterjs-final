class Lines {
  constructor() {
    this.lines = [];
  }

  drawLines = () => {
    if (!isDrawing) {
      for (let i = 0; i < this.lines.length; i++) {
        this.lines[i].draw();
      }
    }
  };

  addLine(line) {
    this.lines.push(line);
  }
}

class Line {
  constructor(e, lineWidth = 2, color = "black") {
    this.path = [];
    this.lineWidth = lineWidth;
    this.color = color;

    this.accelerate = new Vector2();
    this.velocity = new Vector2();
    this.location = new Vector2(e.offsetX, e.offsetY);
  }

  addPath(e) {
    this.path.push(new Vector2(e.clientX, e.clientY));
  }

  stroke(e) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    line.addPath(e);
  }

  startStroke(e) {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    const line = new Line(e);
  }

  endStroke() {
    lines.addLine(this);
  }

  draw() {
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.location.x, this.location.y);
    for (let i = 0; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }

  addForce(x, y) {
    this.accelerate.x += x;
    this.accelerate.y += y;
  }

  update() {
    this.velocity.x += this.accelerate.x;
    this.velocity.y += this.accelerate.y;

    this.location.x += this.velocity.x;
    this.location.y += this.velocity.y;
  }
}

class Lines {
  constructor() {
    this.lines = [];
  }

  drawLines = () => {
    if (isDrawing) {
      return;
    }
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].draw();
    }
  };

  addLine(line) {
    this.lines.push(line);
  }

  addForce(f) {
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].addForce(f);
    }
  }

  update() {
    if (isDrawing) {
      return;
    }
    clear();
    for (let i = 0; i < this.lines.length; i++) {
      this.lines[i].update();
    }
  }

  reset() {
    this.lines = [];
  }
}

class Line {
  constructor(e, lineWidth = 2, color = "black") {
    this.path = [];
    this.lineWidth = lineWidth;
    this.color = color;

    this.translate = new Vector2();
    this.accelerate = new Vector2();
    this.velocity = new Vector2();
    this.location = new Vector2(e.offsetX, e.offsetY);

    this.isActive = true;
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
    if (!this.isActive) {
      return;
    }
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(
      this.location.x + this.translate.x,
      this.location.y + this.translate.y
    );
    for (let i = 0; i < this.path.length; i++) {
      ctx.lineTo(
        this.path[i].x + this.translate.x,
        this.path[i].y + this.translate.y
      );
    }
    ctx.stroke();
    ctx.restore();
  }

  addForce(f) {
    if (!this.isActive) {
      return;
    }
    this.accelerate.x += Math.random() * f - f / 2;
    this.accelerate.y += Math.random() * f - f / 2;
  }

  update() {
    if (!this.isActive) {
      return;
    }
    this.velocity.x += this.accelerate.x;
    this.velocity.y += this.accelerate.y;

    this.translate.x += this.velocity.x;
    this.translate.y += this.velocity.y;

    this.accelerate = new Vector2();

    if (
      Math.abs(this.translate.x) > BACKGROUND_CANVAS_WIDTH ||
      Math.abs(this.translate.y) > BACKGROUND_CANVAS_HEIGHT
    ) {
      this.isActive = false;
    }
  }
}

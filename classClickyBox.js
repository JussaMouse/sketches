class ClickyBox {
  constructor(x, y, width, height, param) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.param = param
  }

  isColliding() {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    )
  }
}

function mouseClicked() {
  for (let i = 0; i < clickyBoxes.length; i++) {
    if (clickyBoxes[i].isColliding()) {
      // makeSlider(0, 1, 0.5, 0.01)
    }
  }
}

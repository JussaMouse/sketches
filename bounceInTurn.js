function setup() {
  createCanvas(windowWidth, windowHeight)
}

// initialize bump variables
let bRow = 0
let bCol = 0
let yFlip = 0
let y = 0
let y1 = 20

function draw() {
  const rows = 3
  const cols = 3

  // draw a grid of circles
  function ellipsePattern(rows, cols) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (bRow == row && bCol == col) {
          ellipse(col * 100, row * 100 - y, 50)
        } else ellipse(col * 100, row * 100, 50)
      }
    }
  }

  background(20)
  translate(width / 2, height / 4)
  fill(255)
  ellipsePattern(rows, cols)

  // bump y value
  y = lerp(y, y1, 0.25)

  // bump logic
  if (!yFlip) {
    if (y1 - y < 1) {
      y1 = 0
      yFlip = 1
    }
  } else {
    if (y - y1 < 1) {
      y1 = 20
      yFlip = 0
      if (bCol < cols - 1) {
        bCol++
      } else {
        bCol = 0
        if (bRow < rows - 1) {
          bRow++
        } else {
          bRow = 0
        }
      }
    }
  }
}

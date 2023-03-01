function setup() {
  createCanvas(windowWidth, windowHeight)
}

// initialize bump variables
let bRow = [0, 0]
let bCol = [0, 1]
let yFlip = [false, false]
let y = [0, 0]
let yEnd = [20, 20]
let bouncing = false

function draw() {
  const rows = 3
  const cols = 3

  // draw a grid of circles
  function ellipsePattern(rows, cols) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (bRow[0] == row && bCol[0] == col) {
          ellipse(col * 100, row * 100 - y[0], 50)
        } else if (bRow[1] == row && bCol[1] == col) {
          ellipse(col * 100, row * 100 - y[1], 50)
        } else ellipse(col * 100, row * 100, 50)
      }
    }
  }

  background(20)
  translate(width / 2, height / 4)
  fill(255)
  ellipsePattern(rows, cols)

  for (let i = 0; i < 2; i++) {
    // bump y value
    y[i] = lerp(y[i], yEnd[i], 0.05)

    // bump logic
    if (!yFlip[i]) {
      if (yEnd[i] - y[i] < 1) {
        yEnd[i] = 0
        yFlip[i] = true
      }
    } else {
      if (y[i] - yEnd[i] < 1) {
        yEnd[i] = 20
        yFlip[i] = false
        if (bCol[i] < cols - 1) {
          bCol[i]++
        } else {
          bCol[i] = 0
          if (bRow[i] < rows - 1) {
            bRow[i]++
          } else {
            bRow[i] = 0
          }
        }
      }
    }
  }
}

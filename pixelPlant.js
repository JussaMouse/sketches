function setup() {
  createCanvas(1000, 1000)
  background(255, 0, 0)
}
function draw() {
  // grid is a 32X32 array of numbers. the values correspond to one "pixel"'s fill color
  let grid = []
  for (let row = 0; row < 32; row++) {
    grid[row] = []
    for (let col = 0; col < 32; col++) {
      grid[row][col] = 0
      if (row == col) grid[row][col] = 1
    }
  }

  let pixelSize = 10
  let gridSize = pixelSize * 32
  let cx = width / 2
  let cy = height / 2

  translate(cx - gridSize / 2, cy - gridSize / 2)
  for (let row = 0; row < 32; row++) {
    for (let col = 0; col < 32; col++) {
      if (grid[row][col] == 0) fill(255)
      if (grid[row][col] == 1) fill(20)
      if (grid[row][col] != 0 && grid[row][col] != 1) fill(255, 255, 0)

      rect(col * 10, row * 10, 10, 10)
    }
  }

  function pixelSin(grid) {}
}

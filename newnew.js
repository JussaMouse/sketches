let wid = window.innerWidth
let hei = window.innerHeight
let cx = 0.5 * wid
let cy = 0.5 * hei
let u
wid >= hei ? (u = hei * 0.05) : (u = wid * 0.05)
let grid = []
let gridOrigin = { x: cx - 7.5 * u, y: cy - 9 * u }
// grid size = 15*u x 18*u
for (let c = 0; c < 16; c++) {
  grid[c] = []
  for (let r = 0; r < 19; r++) {
    grid[c][r] = {
      x: gridOrigin.x + c * u,
      y: gridOrigin.y + r * u,
      col: c,
      row: r,
      used: false,
    }
  }
}

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  background(255)

  stroke(10)
  fill(255)
  pos = grid[0][8]
  // define a set of allowed destinations
  function allowed(c, r) {
    return c >= 0 && c <= 15 && r >= 0 && r <= 18 && grid[c][r].used == false
  }

  for (let i = 0; i < 1000; i++) {
    pos.used = true
    let cDest = -1
    let rDest = -1
    let n = 0
    while (!allowed(cDest, rDest) && n < 100) {
      cDest = random([pos.col - 2, pos.col, pos.col + 2])
      rDest = random([pos.row - 2, pos.row, pos.row + 2])
      n++
    }
    if (n == 100) {
      n = 0
      while (!allowed(cDest, rDest) && n < 10) {
        cDest = random([pos.col - 1, pos.col, pos.col + 1])
        rDest = random([pos.row - 1, pos.row, pos.row + 1])
        n++
      }
    }
    if (n == 10) break

    line(pos.x, pos.y, grid[cDest][rDest].x, grid[cDest][rDest].y)
    pos = grid[cDest][rDest]
  }
}

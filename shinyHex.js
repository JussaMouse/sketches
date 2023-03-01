let pal = [
  [33, 24, 70],
  [45, 34, 88],
  [67, 56, 125],
  [90, 80, 148],
  [176, 173, 197],
  [15, 26, 48],
  [27, 42, 76],
  [49, 84, 134],
  [93, 129, 172],
  [169, 192, 216],
  [21, 30, 16],
  [30, 48, 28],
  [40, 66, 40],
  [49, 84, 47],
  [110, 144, 110],
]

let wid = window.innerWidth
let hei = window.innerHeight
let cx = 0.5 * wid
let cy = 0.5 * hei
let u
wid >= hei ? (u = hei * 0.05) : (u = wid * 0.05)
let tick = 0
let rateOfTick = 0.5

// GRID /////////////////////////////////
//////////////////////////////////////////////////////////////////////////
let grid = []
let gridOrigin = { x: cx - 6 * u, y: cy - 7.5 * u }
// grid size = 12*u x 15*u
for (let c = 0; c < 13; c++) {
  grid[c] = []
  for (let r = 0; r < 16; r++) {
    grid[c][r] = {
      x: gridOrigin.x + c * u,
      y: gridOrigin.y + r * u,
      col: c,
      row: r,
      used: false,
    }
  }
}

// starting position
let pos = grid[0][7]

function setup() {
  createCanvas(wid, hei)
  background(random(pal))
  angleMode(DEGREES)
  colorMode(HSB)
}

function draw() {
  // translate(wid, hei)
  scale(1.5)

  // define a set of allowed destinations
  function allowed(c, r) {
    return c >= 0 && c <= 12 && r >= 0 && r <= 15 && grid[c][r].used == false
  }

  // walk the grid //////////////////////
  ////////////////////////////////////////////////////////////////////////
  let debugDest = []

  for (let i = 0; i < 5; i++) {
    pos.used = true
    let cDest = -1
    let rDest = -1
    let n = 0
    while (!allowed(cDest, rDest) && n < 10) {
      cDest = random([pos.col - 2, pos.col, pos.col + 2])
      rDest = random([pos.row - 2, pos.row, pos.row + 2])
      n++
    }
    if (n == 10) break

    // line(pos.x, pos.y, grid[cDest][rDest].x, grid[cDest][rDest].y)

    for (let i = 0; i < 1; i += 0.1) {
      let hexX = lerp(pos.x, grid[cDest][rDest].x, i)
      let hexY = lerp(pos.y, grid[cDest][rDest].y, i)
      // PAINT TIME /////////////////////
      ////////////////////////////////////////////////////////////////////
      // push()
      // scale(0.2)
      // translate(x, y)

      noFill()

      let r = u / 3
      let fillColor = map(noise(tick / 10), 0, 1, 0, 100)

      for (let i = 0; i < 360; i += 4) {
        let x = hexX + r * cos(i * 10)
        let y = hexY + r * sin(i * 10)
        mark(
          x,
          y,
          i / 10,
          (i * tick) / 10,
          // [fillColor, 0.01],
          [(i * 120 + 30) % 360, 30, 100, 0.01],
          tick
        )
      }
      // pop()
      tick += rateOfTick
    }
    pos = grid[cDest][rDest]
  }

  function mark(x0, y0, length, angle, color, tick) {
    push()
    scale(noise(tick / 10) * 2)
    translate(x0, y0)
    let x1 = length * cos(angle)
    let y1 = -1 * length * sin(angle)
    stroke(color)

    for (let i = 0; i < 1; i += 0.01) {
      let xl = lerp(0, x1, i)
      let yl = lerp(0, y1, i)
      line(xl, yl, xl + cos(tick * 20) * u, yl - sin(tick * 20) * u)
    }

    // line(0, 0, x1, y1)
    // hex(x1, y1, noise(tick) * u)
    pop()
  }

  function hex(x, y, u) {
    push()
    translate(x, y)
    beginShape()
    for (let i = 30; i < 391; i += 60) {
      vertex(u * cos(i), u * sin(i))
    }
    endShape()
    pop()
  }
}

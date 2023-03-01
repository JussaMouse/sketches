// CHANGE THIS VARIABLE TO CHANGE THE COLOR
// 0 < ci < 15
let ci = 3

// RGB color palettes. gradients transition palA[n] to palB[n]
palA = [
  [7, 13, 33],
  [34, 79, 95],
  [0, 109, 30],
  [228, 215, 140],
  [127, 179, 233],
  [105, 151, 195],
  [204, 125, 0],
  [116, 54, 75],
  [203, 58, 74],
  [111, 155, 135],
  [147, 173, 181],
  [105, 0, 1],
  [27, 132, 140],
  [135, 56, 0],
  [94, 88, 81],
  [10, 109, 144],
]

palB = [
  [121, 9, 73],
  [0, 65, 10],
  [38, 88, 132],
  [233, 194, 199],
  [178, 206, 178],
  [176, 234, 255],
  [130, 58, 28],
  [132, 107, 147],
  [245, 166, 118],
  [127, 152, 149],
  [34, 40, 31],
  [255, 123, 35],
  [130, 157, 191],
  [65, 42, 25],
  [123, 134, 153],
  [54, 110, 143],
]

// distance/angle from mouse position to shape
let r0 = 20
let r0big = 100
let a0 = 0

// distance/angle from a shape's center its vertex
let r1 = 20
let r1big = 100
let a1 = 0

// set the direction of the gradient ('up', 'down', 'left', 'right')
let dir = '↑'

// GRID /////////////////////////////////
//////////////////////////////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let cx = 0.5 * wid
let cy = 0.5 * hei
let u
wid >= hei ? (u = hei * 0.05) : (u = wid * 0.05)
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

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  background(255, 250, 245)

  noStroke()

  // brush color ////////////////////////
  ////////////////////////////////////////////////////////////////////////
  // function getNewColor(n) {
  //   if (dir === '↑') {
  //     newColor = [
  //       map(mouseY, height, 0, palA[n][0], palB[n][0]),
  //       map(mouseY, height, 0, palA[n][1], palB[n][1]),
  //       map(mouseY, height, 0, palA[n][2], palB[n][2]),
  //     ]
  //   } else if (dir === '↓') {
  //     newColor = [
  //       map(mouseY, 0, height, palA[n][0], palB[n][0]),
  //       map(mouseY, 0, height, palA[n][1], palB[n][1]),
  //       map(mouseY, 0, height, palA[n][2], palB[n][2]),
  //     ]
  //   } else if (dir === '→') {
  //     newColor = [
  //       map(mouseX, 0, width, palA[n][0], palB[n][0]),
  //       map(mouseX, 0, width, palA[n][1], palB[n][1]),
  //       map(mouseX, 0, width, palA[n][2], palB[n][2]),
  //     ]
  //   } else {
  //     newColor = [
  //       map(mouseX, width, 0, palA[n][0], palB[n][0]),
  //       map(mouseX, width, 0, palA[n][1], palB[n][1]),
  //       map(mouseX, width, 0, palA[n][2], palB[n][2]),
  //     ]
  //   }
  //   return newColor
  // }

  // starting position
  pos = grid[0][8]

  // define a set of allowed destinations
  function allowed(c, r) {
    return c >= 0 && c <= 12 && r >= 0 && r <= 15 && grid[c][r].used == false
  }

  // walk the grid //////////////////////
  ////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < 200; i++) {
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

    for (let i = 0; i < 1; i += 0.02) {
      let x = lerp(pos.x, grid[cDest][rDest].x, i)
      let y = lerp(pos.y, grid[cDest][rDest].y, i)
      // JAGGY TIME /////////////////////
      ////////////////////////////////////////////////////////////////////
      newColor = [
        map(y, height, 0, palA[ci][0], palB[ci][0]),
        map(y, height, 0, palA[ci][1], palB[ci][1]),
        map(y, height, 0, palA[ci][2], palB[ci][2]),
      ]
      fill(newColor)
      push()
      translate(x, y)
      for (let j = 0; j < 12; j++) {
        // big ? (r = r0big) : (r = r0)
        r = r0
        let x0 = r * cos(a0)
        let y0 = r * sin(a0)
        push()
        translate(x0, y0)
        beginShape()
        for (let k = 0; k < 4; k++) {
          // big ? (r = r1big) : (r = r0)
          a1 += random(90)
          let x1 = r * cos(a1)
          let y1 = r * sin(a1)
          vertex(x1, y1)
          // randoIndex++
        }
        endShape(CLOSE)
        pop()
        a0 += 30
      }
      pop()

      // point(x, y)
    }

    pos = grid[cDest][rDest]
  }
  noFill()
  rect(gridOrigin.x, gridOrigin.y, 15 * u, 18 * u)
}

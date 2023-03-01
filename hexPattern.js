const palDusk = [
  [25, 27, 13],
  [47, 5, 0],
  [110, 52, 35],
  [124, 81, 70],
  [158, 84, 52],
  [194, 123, 3],
  [228, 188, 91],
  [166, 0, 4],
  [127, 184, 79],
  [118, 157, 158],
]

const palWiz = [
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [178, 206, 178],
  [228, 215, 140],
  [127, 179, 233],
  [233, 194, 199],
  [204, 165, 76],
  [176, 234, 255],
]

const palEyes = [
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

const pal2001 = [
  [22, 71, 130],
  [254, 74, 117],
  [14, 70, 67],
  [18, 41, 47],
  [252, 15, 38],
  [103, 5, 6],
  [62, 4, 3],
  [13, 9, 7],
  [238, 204, 165],
  [65, 0, 10],
  [205, 46, 87],
  [171, 240, 217],
  [2, 137, 178],
  [117, 76, 65],
  [18, 49, 53],
  [21, 23, 22],
  [11, 222, 179],
  [31, 2, 44],
  [200, 129, 40],
  [76, 125, 166],
  [118, 0, 131],
  [4, 30, 30],
  [3, 72, 48],
  [158, 82, 146],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 3, gif: true })
}

let dx = 0
let dy = 0

function draw() {
  background(255, 250, 245)

  // define unit length and color total
  let unit
  width > height ? (unit = height / 40) : (unit = width / 40)

  // hexagon maker
  // x, y is position on canvas, u is length of radius
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

  // these objects are sets of parameters (modes)
  // describing where to draw the hexagons
  ///////////////////////////////////////////////////
  let isoTight = {
    dx: floor(2 * (unit * cos(30))),
    dy: floor(unit * (1 + 0.5 * cos(30))) + 2,
    step: 0.5,
    colorSkip: true,
    sColor: [40],
  }

  let isoLoose = {
    dx: floor(4 * (unit * cos(30))) + 1,
    dy: unit,
    step: 0.5,
    colorSkip: true,
    sColor: [40],
  }

  let stackFlat = {
    dx: floor(2 * (unit * cos(30))),
    dy: unit + 1,
    step: 0,
    colorSkip: false,
    sColor: [255],
  }

  let stackTilt = {
    dx: floor(2 * (unit * cos(30))),
    dy: unit + 1,
    step: 0.5,
    colorSkip: true,
    sColor: [255],
  }

  // draw field of hexagons
  ///////////////////////////////////////////////////
  function drawPattern(mode, cols, rows, pal) {
    let colorTotal = pal.length
    let dx = mode.dx
    let dy = mode.dy
    let step = mode.step
    let colorSkip = mode.colorSkip
    let xOffset = 0
    let skipColor = 0

    stroke(mode.sColor)
    for (let row = 0; row < rows; row++) {
      if (row % 2 == 0) {
        xOffset = dx * step
        if (colorSkip) skipColor++
      }

      for (let col = 0; col < cols; col++) {
        fill(pal[(col + row + skipColor) % colorTotal])
        hex(col * dx + xOffset, row * dy, unit)
      }

      if (colorSkip) skipColor--
      xOffset = 0
    }
  }

  translate(width * 0.1, height * 0.1)
  drawPattern(isoTight, 8, 9, palDusk)

  translate(width * 0.45, 0)
  drawPattern(stackFlat, 8, 12, palEyes)

  translate(-width * 0.45, height * 0.45)
  drawPattern(stackTilt, 8, 12, palWiz)

  translate(width * 0.45, 0)
  drawPattern(isoLoose, 4, 11, pal2001)
}

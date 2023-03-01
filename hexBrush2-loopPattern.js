let seed = 11112233

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
  [2, 137, 178],
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

// define unit length
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

let startColor = 0
let tick = 0
let angleOffset = 0
let pal
let swing = 0
let flip
let mode
let cols = 0
let rows = 0
let sketchy
let spectral
let tSpeed = 2

// setup /////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 3, gif: true })
  background(10)
  randomSeed(seed)
  noiseSeed(seed)

  // these objects are sets of parameters (modes)
  // describing where to draw the hexagons
  ///////////////////////////////////////////////////
  let isoTight = {
    name: 'isoTight',
    dx: floor(2 * (unit * cos(30))),
    dy: floor(unit * (1 + 0.5 * cos(30))) + 2,
    step: 0.5,
    colorSkip: true,
    sColor: [40],
  }

  let isoLoose = {
    name: 'isoLoose',
    dx: floor(4 * (unit * cos(30))) + 1,
    dy: unit,
    step: 0.5,
    colorSkip: true,
    sColor: [40],
  }

  let stackFlat = {
    name: 'stackFlat',
    dx: floor(2 * (unit * cos(30))),
    dy: unit + 1,
    step: 0,
    colorSkip: false,
    sColor: [255],
  }

  let stackTilt = {
    name: 'stackTilt',
    dx: floor(2 * (unit * cos(30))),
    dy: unit + 1,
    step: 0.5,
    colorSkip: true,
    sColor: [255],
  }

  angleOffset = random([
    0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
  ])
  startColor = floor(random(16))
  pal = random([palDusk, palEyes, palWiz, pal2001])
  swing = random(20, 35)
  flip = random() < 0.5
  sketchy = random() < 0.5
  spectral = random() < 0.2
  mode = random([isoTight, isoLoose, stackFlat, stackTilt])
  cols = floor(random(3, 6))
  rows = floor(random(3, 9))
}

// draw() /////////////////////////////////////////////////////////////////
function draw() {
  // hexagon maker ///////////////////////////////////
  function hex(x, y, u) {
    push()
    translate(x, y)
    beginShape()
    for (let i = 30; i < 391; i += 60) {
      if (sketchy) {
        vertex(u * cos(i + random(10)), u * sin(i + random(10)))
      } else {
        vertex(u * cos(i), u * sin(i))
      }
    }
    endShape()
    pop()
  }

  // make a field of hexagons
  ///////////////////////////////////////////////////
  function drawPattern(mode, cols, rows, pal) {
    let colorTotal = pal.length
    let dx = mode.dx
    let dy = mode.dy
    let step = mode.step
    let colorSkip = mode.colorSkip
    let xOffset = 0
    let skipColor = 0

    // stroke(mode.sColor)
    for (let row = 0; row < rows; row++) {
      if (row % 2 == 0) {
        xOffset = dx * step
        if (colorSkip) skipColor++
      }

      for (let col = 0; col < cols; col++) {
        if (spectral) {
          noFill()
          stroke(...pal[(startColor + col + row + skipColor) % colorTotal], 30)
        } else {
          noStroke()
          fill(...pal[(startColor + col + row + skipColor) % colorTotal], 20)
        }
        hex(col * dx + xOffset, row * dy, unit)
      }

      if (colorSkip) skipColor--
      xOffset = 0
    }
  }

  // transform the brush /////////////////////////////////////
  push()
  let dx
  if (spectral) tSpeed = 1
  flip ? (dx = width - tick / tSpeed) : (dx = tick / tSpeed)

  translate(dx, height * 0.4) //+ noise(tick / 2000) * 300)
  // scale(1.5 - sin(tick / 5 - angleOffset) * 0.5)
  // rotate((sin(tick / 2 + angleOffset) + cos(tick / 2)) * swing + tick / 10)
  rotate(tick)

  // mark making! //////////////////////////////////////////////
  drawPattern(mode, cols, rows, pal)
  pop()

  // draw a frame //////////////////////////////////////////////
  fill(215)
  noStroke()
  rect(0, 0, width, height * 0.1)
  rect(0, 0, width * 0.1, height)
  rect(width * 0.9, 0, width * 0.11, height)
  rect(0, height * 0.9, width, height * 0.11)

  // metadata viewer ///////////////////////////////////////////
  fill(10)
  let palName = ''
  if (pal[0][0] == 25) {
    palName = 'dusk'
  } else if (pal[0][0] == 7) {
    palName = 'wizard'
  } else if (pal[0][0] == 33) {
    palName = 'eyes'
  } else {
    palName = '2001'
  }
  text(`palette: ${palName}`, 10, 100)
  text(`mode: ${mode.name}`, 10, 120)
  text(`sketchy: ${sketchy}`, 10, 140)
  text(`spectral: ${spectral}`, 10, 160)
  text(`startColor: ${startColor}`, 10, 180)
  text(`angleOffset: ${angleOffset}`, 10, 200)
  text(`swing: ${floor(swing)}`, 10, 220)
  text(`flip: ${flip}`, 10, 240)
  text(`cols: ${cols}`, 10, 260)
  text(`rows: ${rows}`, 10, 280)

  tick++
  console.log(angleOffset)
}

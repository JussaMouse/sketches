let randSeed = Math.random() * 1000000000

// some cool seeds:
// 691528190
// 627642282
// 695835709

// randSeed = 615794912.7869992

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
]
const pal2002 = [
  [62, 4, 3],
  [13, 9, 7],
  [238, 204, 165],
  [65, 0, 10],
  [205, 46, 87],
  [117, 76, 65],
  [18, 49, 53],
  [21, 23, 22],
]
const pal3001 = [
  [11, 222, 179],
  [31, 2, 44],
  [200, 129, 40],
  [76, 125, 166],
  [118, 0, 131],
  [4, 30, 30],
  [171, 240, 217],
  [3, 72, 48],
  [158, 82, 146],
]

const palMantis = [
  [40, 33, 32],
  [39, 82, 167],
  [66, 243, 223],
  [162, 145, 0],
  [61, 81, 1],
  [223, 28, 2],
  [213, 186, 193],
  [39, 176, 187],
  [82, 145, 179],
  [106, 151, 1],
  [243, 255, 255],
  [255, 68, 0],
]

const palShaolin = [
  [41, 47, 69],
  [31, 32, 45],
  [53, 82, 40],
  [83, 135, 71],
  [142, 159, 144],
  [218, 223, 198],
  [135, 186, 120],
  [57, 67, 89],
  [211, 225, 211],
  [133, 159, 103],
  [103, 109, 108],
]

const palSeafloor = [
  [0, 31, 53],
  [1, 43, 55],
  [1, 61, 104],
  [0, 71, 63],
  [0, 84, 139],
  [0, 106, 83],
  [2, 173, 158],
  [0, 155, 177],
  [0, 178, 150],
  [228, 255, 255],
]

// define unit length
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// other globals
let startColor = 0
let tick = 0
let ao = 0
let pal
let swing = 0
let flip
let mode
let cols = 0
let rows = 0
let sketchy
let spectral
let tSpeed = 2
let siiize = 1
let rotation

// setup /////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  // createLoop({ duration: 3, gif: true })
  background(10)
  randomSeed(randSeed)
  noiseSeed(randSeed)

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

  // initialize globals ////////////////////////////////////////
  ao = random(-1000, 1000)
  startColor = floor(random(16))
  pal = random([
    palDusk,
    palEyes,
    palWiz,
    pal2001,
    pal2002,
    pal3001,
    palMantis,
    palShaolin,
    palSeafloor,
  ])
  swing = random(20, 35)
  flip = random() < 0.5
  sketchy = random() < 0.5
  spectral = random() < 0.2
  mode = random([isoTight, isoLoose, stackFlat, stackTilt])
  cols = floor(random(3, 6))
  rows = floor(random(3, 9))
  siiize = random(0.7, 1.5)
  rotation = random([0, 1, 2, 3])
}

// draw() ////////////////////////////////////////////////////////////////
function draw() {
  // hexagon maker ///////////////////////////////////////////////////////
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

  // make a field of hexagons ////////////////////////////////////////////
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

        // call hex() ////////////////////////////////////////////////////
        hex(col * dx + xOffset, row * dy, unit * siiize)
      }

      if (colorSkip) skipColor--
      xOffset = 0
    }
  }

  // transform the brush /////////////////////////////////////////////////
  push()
  if (spectral) tSpeed = 1
  let dx
  flip
    ? (dx = width - tick / tSpeed + sin(tick / 2) * 30)
    : (dx = tick / tSpeed + sin(tick / 2) * 30)

  translate(dx, height * 0.4 + noise(tick / 2000) * 300)
  scale(1.5 - sin(tick / 5 - ao) * 0.5)
  if (rotation === 0) {
    rotate((sin(tick + ao) + sin(tick / 2 + ao)) * swing + tick / 7)
  } else if (rotation === 1) {
    rotate((sin(tick + ao) + sin(tick / 4 + ao)) * swing + tick / 7)
  } else if (rotation === 2) {
    rotate(
      (sin(tick + ao) + sin(tick / 2 + ao) + sin(tick / 4 + ao)) * swing +
        tick / 7
    )
  } else {
    rotate(
      (sin(tick + ao) + sin(tick / 4 + ao) + sin(tick / 8 + ao)) * swing +
        tick / 7
    )
  }
  // rotate(tick)

  // mark making! ////////////////////////////////////////////////////////
  drawPattern(mode, cols, rows, pal)
  pop()

  // draw a frame //////////////////////////////////////////////
  fill(215)
  noStroke()
  rect(0, 0, width, height * 0.025)
  rect(0, 0, width * 0.025, height)
  rect(width * 0.975, 0, width * 0.0251, height)
  rect(0, height * 0.975, width, height * 0.0251)

  // metadata viewer ///////////////////////////////////////////
  // fill(10)
  if (frameCount == 1) {
    let palName = ''
    if (pal[0][0] == 25) {
      palName = 'dusk'
    } else if (pal[0][0] == 7) {
      palName = 'wizard'
    } else if (pal[0][0] == 33) {
      palName = 'eyes'
    } else if (pal[0][0] == 62) {
      palName = '2002'
    } else if (pal[0][0] == 11) {
      palName = '3001'
    } else if (pal[0][0] == 0) {
      palName = 'seafloor'
    } else if (pal[0][0] == 41) {
      palName = 'shaolin'
    } else if (pal[0][0] == 40) {
      palName = 'mantis'
    } else {
      palName = '2001'
    }
    console.log(`seed: ${randSeed}`)
    console.log(`palette: ${palName}`)
    console.log(`mode: ${mode.name}`)
    console.log(`sketchy: ${sketchy}`)
    console.log(`spectral: ${spectral}`)
    console.log(`startColor: ${startColor}`)
    console.log(`angleOffset: ${ao.toFixed(2)}`)
    console.log(`swing: ${floor(swing)}`)
    console.log(`flip: ${flip}`)
    console.log(`cols: ${cols}`)
    console.log(`rows: ${rows}`)
    console.log(`siiize: ${siiize.toFixed(2)}`)
    console.log(`rotation: ${rotation}`)
  }

  tick++
}

let randSeed = Math.random() * 1000000000

const palWiz = {
  name: 'Wiz',
  rgb: [
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
  ],
}
const palEyes = {
  name: 'Eyes',
  rgb: [
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
  ],
}
const pal2001 = {
  name: '2001',
  rgb: [
    [22, 71, 130],
    [2, 137, 178],
    [254, 74, 117],
    [14, 70, 67],
    [18, 41, 47],
    [252, 15, 38],
    [103, 5, 6],
  ],
}
const pal2002 = {
  name: '2002',
  rgb: [
    [62, 4, 3],
    [13, 9, 7],
    [238, 204, 165],
    [65, 0, 10],
    [205, 46, 87],
    [117, 76, 65],
    [18, 49, 53],
    [21, 23, 22],
  ],
}
const pal3001 = {
  name: '3001',
  rgb: [
    [11, 222, 179],
    [31, 2, 44],
    [200, 129, 40],
    [76, 125, 166],
    [118, 0, 131],
    [4, 30, 30],
    [171, 240, 217],
    [3, 72, 48],
    [158, 82, 146],
  ],
}
const palMantis = {
  name: 'Mantis',
  rgb: [
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
  ],
}
const palShaolin = {
  name: 'Shaolin',
  rgb: [
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
  ],
}
const palSeafloor = {
  name: 'Seafloor',
  rgb: [
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
  ],
}

// [define unit length] //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// [other globals] ///////////////////////////////////////////////////////
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
let hide = false
let hideFlip = false

// [setup] /////////////////////////////////////////////////////////////////
function setup() {
  angleMode(DEGREES)
  createCanvas(wid, hei)
  // createLoop({ duration: 3, gif: true })
  background(10)
  randomSeed(randSeed)
  noiseSeed(randSeed)

  // [initialize globals] ////////////////////////////////////////
  ao = random(-1000, 1000)
  startColor = floor(random(16))
  pal = random([
    palEyes,
    palWiz,
    pal2001,
    pal2002,
    pal3001,
    palMantis,
    palShaolin,
    palSeafloor,
  ])
  let palName = pal.name
  pal = shuffle(pal.rgb)
  swing = random(20, 35)
  flip = random() < 0.5
  let randy = random()
  sketchy = randy < 0.5
  let randy2 = random()
  spectral = randy2 < 0.2
  console.log(randy, randy2)
  mode = random([isoTight, isoLoose, stackFlat, stackTilt])
  cols = floor(random(3, 6))
  rows = floor(random(3, 9))
  siiize = random(0.7, 1.5)
  rotation = random([0, 1, 2, 3])

  for (let tick = 0; tick < 5000; tick++) {
    // [transform the brush] /////////////////////////////////////////////////
    push()
    if (spectral) tSpeed = 1
    let dx
    if (flip) {
      dx = width - tick / tSpeed + sin(tick / 2) * 30 - unit * 8
      if (dx < unit * 8) tick = 4999
      // time to hide the final hexagons
      hideFlip = true
    } else {
      dx = tick / tSpeed + sin(tick / 2) * 30 + unit * 8
      if (dx > wid - unit * 8) tick = 4999
      hide = true
    }

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

    // [mark making] ////////////////////////////////////////////////////////
    drawPattern(mode, cols, rows, pal)
    pop()
  }

  // [draw a frame] //////////////////////////////////////////////
  fill(215)
  noStroke()
  rect(0, 0, width, height * 0.025)
  rect(0, 0, width * 0.025, height)
  rect(width * 0.975, 0, width * 0.0251, height)
  rect(0, height * 0.975, width, height * 0.0251)

  // [metadata viewer] ///////////////////////////////////////////
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

  // structy(1, 6, 100)
}

// hexagon maker ///////////////////////////////////////////////////////
function hexy(x, y, u) {
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

// these objects are sets of parameters (modes) describing where to draw
// the hexagons (see mode in [initialize globals])
//////////////////////////////////////////////////////////////////////////
let isoTight = {
  name: 'isoTight',
  dx: Math.floor(2 * (unit * Math.cos(30))),
  dy: Math.floor(unit * (1 + 0.5 * Math.cos(30))) + 2,
  step: 0.5,
  colorSkip: true,
  sColor: [40],
}

let isoLoose = {
  name: 'isoLoose',
  dx: Math.floor(4 * (unit * Math.cos(30))) + 1,
  dy: unit,
  step: 0.5,
  colorSkip: true,
  sColor: [40],
}

let stackFlat = {
  name: 'stackFlat',
  dx: Math.floor(2 * (unit * Math.cos(30))),
  dy: unit + 1,
  step: 0,
  colorSkip: false,
  sColor: [255],
}

let stackTilt = {
  name: 'stackTilt',
  dx: Math.floor(2 * (unit * Math.cos(30))),
  dy: unit + 1,
  step: 0.5,
  colorSkip: true,
  sColor: [255],
}

// [make the brush] //////////////////////////////////////////////////////
function drawPattern(mode, cols, rows, pal) {
  let colorTotal = pal.length
  let dx = mode.dx
  let dy = mode.dy
  let step = mode.step
  let colorSkip = mode.colorSkip
  let xOffset = 0
  let skipColor = 0

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

      hexy(col * dx + xOffset, row * dy, unit * siiize)
    }

    if (colorSkip) skipColor--
    xOffset = 0
  }
}

// Mike Bostock's Fisher-Yates shuffle ///////////////////////////////////
function shuffle(array) {
  var m = array.length,
    t,
    i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

// [structure] ///////////////////////////////////////////////////////////
function structy(numBig, numSmall, border) {
  let structs = []
  let x = {
    min: border,
    max: width - border,
  }
  let y = {
    min: border,
    max: height - border,
  }
  for (let i = 0; i < numBig; i++) {
    let struct = {
      r: random(5 * unit, 12 * unit),
      x: random(x.min, x.max),
      y: random(y.min, y.max),
    }
    structs.push(struct)
    stroke(255, 0, 0)
    noFill()
    ellipse(struct.x, struct.y, struct.r * 2)
  }
  for (let i = 0; i < numSmall; i++) {
    let struct = {
      r: random(0.5 * unit, 2.5 * unit),
      x: random(x.min, x.max),
      y: random(y.min, y.max),
    }
    structs.push(struct)
    stroke(0, 0, 255)
    noFill()
    ellipse(struct.x, struct.y, struct.r * 2)
  }
  console.log(structs)
}

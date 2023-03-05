// parameters of interest ////////////////////////////////////////////////
// A: rotateX()
let a = -92
// B: markMake(x)
let b1 = 10
let b2 = 8
let b3 = 0.125
let b4 = 2
let b5 = 0.25
// C: markMake(y)
let c1 = 0
let c2 = 0
let c3 = 0.1

let mode = 'sphere'

// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let layer1
let numLevels = 20
let siiize = unit * 2
let color0 = [205, 100, 41, 1]
let color1 = [180, 11, 100, 1]

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer :
  layer1 = createGraphics(wid, hei * 1.2, WEBGL)
  layer1.colorMode(HSB)
  layer1.angleMode(DEGREES)
  background(10)

  layer1.clear()
  layer1.translate(unit * 18, -unit * 5, 0)
  // A ////////////////////////////////
  layer1.rotateX(a)
  layer1.scale(1)

  // mark making /////////////////////////////////////////////////////////
  layer1.rotateY(180)
  for (let tick = 0; tick < 7200; tick++) {
    let color0x = [color0[0] + tick / 60, color0[1], color0[2], color0[3]]
    let color1x = [color1[0] - tick / 25, color1[1], color1[2], color1[3]]
    // x, y, z, numSquares, color0, color1
    markMake(
      // B ////////////////////////////////
      b1 * unit + b2 * unit * sin(b3 * tick) + b4 * unit * sin(b5 * tick),
      // C ////////////////////////////////
      c1 * unit + c2 * unit * sin(c3 * tick),
      -tick / 100, // 1 * unit * sin(tick / 10),
      numLevels,
      color0x,
      color1x
    )
    image(layer1, 0, -unit * 6)
    layer1.rotateY(0.05)
    layer1.rotateX(0.15 * sin(tick / 100))
  }
}

function draw() {}

function blendColor(color0, color1, t) {
  return [
    lerp(color0[0], color1[0], t),
    lerp(color0[1], color1[1], t),
    lerp(color0[2], color1[2], t),
    lerp(color0[3], color1[3], t),
  ]
}

function markMake(x, y, z, numSquares, color0, color1) {
  layer1.push()
  layer1.translate(x, y, z)
  let t = 0
  let dt = numSquares ** -1
  for (let i = 0; i < numSquares; i++) {
    layer1.noStroke()
    let color = blendColor(color0, color1, t)
    layer1.fill(color)
    if (mode == 'ellipse') {
      layer1.ellipse(0, i * siiize, siiize)
    } else {
      if (mode == 'box') {
        layer1.box(siiize)
      } else if (mode == 'sphere') {
        layer1.sphere(siiize)
      }
      layer1.translate(0, siiize, 0)
    }
    t += dt
  }

  layer1.pop()
}

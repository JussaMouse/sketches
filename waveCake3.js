// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let layer1
let siiize = unit * 4
let color0 = [205, 100, 41, 1]
let color1 = [180, 11, 100, 0.1]

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer:
  layer1 = createGraphics(wid, hei * 1.2, WEBGL)
  layer1.colorMode(HSB)
  layer1.angleMode(DEGREES)
  background(10)

  layer1.clear()
  layer1.translate(0, -unit * 3, 0)
  layer1.rotateX(-90)
  // layer1.translate(-unit * 20, 0, 0)

  // mark making /////////////////////////////////////////////////////////
  layer1.rotateY(180)
  for (let a = 0; a < 7200; a++) {
    let color0x = [color0[0] + a / 60, color0[1], color0[2], color0[3]]
    let color1x = [color1[0] - a / 25, color1[1], color1[2], color1[3]]
    // x, y, z, numSquares, color0, color1
    markMake(
      unit * 10 + 2 * unit * sin(a / 10),
      -unit * 14 + 2 * unit * sin(a / 100),
      0,
      5,
      color0x,
      color1x
    )
    if (a == 0) {
    }
    image(layer1, 0, -unit * 6)
    layer1.rotateY(0.05)
    layer1.rotateX(0.15 * sin(a / 100))
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
    layer1.box(siiize)
    layer1.translate(0, siiize, 0)
    t += dt
  }

  layer1.pop()
}

// rectangles will stand in for hexagons
// this study is an attempt to port the hexbrush
// idea to 3d

let randSeed = Math.random() * 1000000000

// [define unit length] //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let layer1
let tick = 0
let swing = 0
let siiize = 1
let ao
let color0 = [205, 100, 41, 1]
let color1 = [180, 11, 100, 1]

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer:
  layer1 = createGraphics(wid, hei, WEBGL)
  layer1.colorMode(HSB)
  layer1.angleMode(DEGREES)
  background(10)
  randomSeed(randSeed)
  noiseSeed(randSeed)

  // initialize globals
  ao = random(0, 360)

  layer1.scale(2.2)
  layer1.rotateY(180)
  for (let a = 0; a < 360; a++) {
    markMake(200, -110 + 10 * sin(a ** 2), 0, 1, 5, color0, color1)
    image(layer1, 0, 0)
    layer1.rotateY(0.5)
    layer1.rotateX(0.2 * sin(a * 5))
  }
}

function draw() {
  if (frameCount < 3600) {
  }
}

function blendColor(color0, color1, t) {
  return [
    lerp(color0[0], color1[0], t),
    lerp(color0[1], color1[1], t),
    lerp(color0[2], color1[2], t),
    lerp(color0[3], color1[3], t),
  ]
}

function markMake(x, y, z, siiize, numSquares, color0, color1) {
  layer1.push()
  layer1.translate(x, y, z)
  let t = 0
  let dt = numSquares ** -1
  for (let i = 0; i < numSquares; i++) {
    layer1.noStroke()
    let color = blendColor(color0, color1, t)
    layer1.fill(color)
    layer1.box(50 * siiize)
    layer1.translate(0, 50, 0)
    t += dt
  }
  color0[0] += 0.1
  color1[0] -= 0.4
  layer1.pop()
}

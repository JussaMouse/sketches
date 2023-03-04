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
let r0
let r1

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

  // initialize globals //////////////////////////////////////////////////
  ao = random(0, 360)
  r0 = random(5)
  r1 = random(5)
  console.log(r0, r1)

  // mark making /////////////////////////////////////////////////////////
  layer1.scale(2.2)
  layer1.rotateY(180)
  for (let a = 0; a < 3600; a++) {
    let color01 = [color0[0] + a / 10, color0[1], color0[2], color0[3]]
    let color11 = [color1[0] - a / 10, color1[1], color1[2], color1[3]]
    // x, y, z, siiize, numSquares, color0, color1
    markMake(200, -110 + 10 * sin(a ** 2), 0, 1, 5, color01, color11)
    image(layer1, 0, 0)
    layer1.rotateY(0.05)
    layer1.rotateX(0.2 * sin(a * 5))
  }
}

function draw() {}

function twistColor(color, amp, a, ao, twist) {
  let mappy = color.map((x) => x + amp * sin(ao + a * twist))
  return [mappy[0], color[1], color[2], color[3]]
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

  layer1.pop()
}

// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let pal0 = [
  [205, 100, 41, 1],
  [154, 24, 45, 1],
  [346, 71, 100, 1],
]
let pal1 = [
  [180, 11, 100, 1],
  [0, 63, 24, 1],
  [294, 100, 51, 1],
]
let layer1
let numLevels = 20
let siiize = unit * 4
let numShapes = 5
let color0 = pal0[2]
let color1 = pal1[2]
let vertices = []
let scale0 = 0.8

function setup() {
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer :
  layer1 = createGraphics(wid, hei, WEBGL)
  layer1.colorMode(HSB)
  layer1.angleMode(DEGREES)
  layer1.background(200, 13, 100)
  layer1.scale(scale0)

  vertexCache(vertices, 5)

  for (let tick = 0; tick < 2000; tick++) {
    layer1.push()
    layer1.scale(1 + 0.3 * sin(tick))
    layer1.rotateZ((sin(tick + 30) * unit) / 2 + (sin(tick / 3) * unit) / 3)
    if (tick > 800) {
      // layer1.rotateY(tick / 1000)
      // layer1.scale(scale0 - tick / 10000)
    }
    makeBrush(-wid / 3 + tick / 2, -unit * 4, 100)
    image(layer1, 0, 0)
    // layer1.rotateY(2 * (sin(55 + tick) + 1))
    layer1.rotateZ(-((0.008 * tick) ** 2))
    layer1.pop()
  }
}

function draw() {}

function makeBrush(x, y, siiize) {
  layer1.push()
  layer1.translate(x, y, 0)
  for (let i = 0; i < numShapes; i++) {
    let dt = (numShapes - 1) ** -1
    layer1.strokeWeight(3)
    layer1.stroke(blendColor(color0, color1, i * dt))
    layer1.fill(blendColor(color0, color1, i * dt))
    layer1.beginShape(TRIANGLES)
    layer1.vertex(...vertices[i][0])
    layer1.vertex(...vertices[i][1])
    layer1.vertex(...vertices[i][2])
    layer1.endShape()
  }
  layer1.pop()
}

function vertexCache(vertexArray, numShapes) {
  let tipX = 0
  let tipY = 0
  for (let i = 0; i < numShapes; i++) {
    let v0 = [tipX, tipY - 5]
    let v1 = [random(siiize), random(tipY, siiize + tipY)]
    let v2 = [random(siiize), random(tipY, siiize + tipY)]
    vertexArray.push([v0, v1, v2])
    tipY = max(v1[1], v2[1])
    if (v1[1] == tipY) {
      tipX = v1[0]
    } else {
      tipX = v2[0]
    }
  }
  console.log(vertexArray)
}

function blendColor(color0, color1, t) {
  return [
    lerp(color0[0], color1[0], t),
    lerp(color0[1], color1[1], t),
    lerp(color0[2], color1[2], t),
    lerp(color0[3], color1[3], t),
  ]
}

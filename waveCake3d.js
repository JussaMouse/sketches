let randSeed = Math.floor(Math.random() * 1000000000)
console.log(randSeed)

// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let a = 0.2
let pal0 = [
  [205, 100, 41, a],
  [346, 71, 100, a],
  [155, 99, 80, a],
  [196, 64, 37, a],
  [248, 12, 77, a],
  [211, 45, 91, a],
  [220, 69, 19, a],
  [63, 55, 98, a],
  [148, 25, 82, a],
  [177, 80, 27, a],
  [150, 9, 9, a],
  [148, 25, 82, a],
  [211, 22, 85, a],
  [23, 52, 96, a],
  [345, 78, 80, a],
  [205, 59, 95, a],
  [194, 99, 70, a],
  [120, 14, 81, a],
  [350, 48, 100, a],
  [294, 100, 51, a],
  [63, 55, 98, a],
  [326, 93, 47, a],
  [47, 37, 66, a],
  [42, 60, 89, a],
  [0, 63, 24, a],
  [349, 91, 100, a],
  [51, 24, 54, a],
  [43, 100, 100, a],
  [51, 39, 89, a],
  [359, 95, 40, a],
  [51, 39, 89, a],
]
let pal1 = [
  [180, 11, 100, a],
  [294, 100, 51, a],
  [179, 82, 20, a],
  [194, 19, 71, a],
  [213, 93, 34, a],
  [160, 29, 94, a],
  [153, 28, 61, a],
  [23, 52, 96, a],
  [252, 61, 35, a],
  [168, 95, 87, a],
  [159, 96, 28, a],
  [202, 62, 56, a],
  [154, 24, 45, a],
  [340, 53, 45, a],
  [211, 22, 85, a],
  [194, 99, 70, a],
  [179, 82, 20, a],
  [249, 46, 58, a],
  [326, 93, 47, a],
  [353, 71, 80, a],
  [27, 26, 13, a][(349, 91, 100, a)],
  [27, 26, 13, a],
  [32, 14, 37, a],
  [352, 17, 91, a],
  [359, 100, 41, a],
  [32, 31, 93, a],
  [32, 14, 37, a],
  [14, 68, 43, a],
  [19, 100, 98, a],
  [16, 82, 84, a],
]
let layer1
let numLevels = 20
let siiize = unit * 4
let numShapes = 6
let color0
let color1
let vertices = []
let scale0 = 1
let colorIndex // color to use for gradient
let numRs = 5 // number of Renegade Strokes
let rsIndex = []
let rsColor = []
let cakeShape
let cakeHeight

// set shape
let tickMax
let scA
let scB
let scC
let rzA
let rzB
let rzC
let rzD
let rzE
let rzF

function setup() {
  randomSeed(randSeed)
  noiseSeed(randSeed)
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer :
  layer1 = createGraphics(wid, hei, WEBGL)
  layer1.colorMode(HSB)
  layer1.angleMode(DEGREES)
  layer1.background(5)
  layer1.scale(scale0)

  // gradient flip
  if (random() > 0.5) [pal0, pal1] = [pal1, pal0]

  // choose gradient color
  colorIndex = floor(random(31))
  color0 = pal0[colorIndex]
  color1 = pal1[colorIndex]

  // push vertices (x,y) for n triangles to vertices array
  vertices = vertexCache(numShapes, siiize)

  // create a random Index for
  // where to add the Renegade Strokes
  for (let i = 0; i < numRs; i++) {
    rsIndex.push(floor(random(numShapes)))
    rsColor.push(random(pal0))
    rsColor[i][3] = random(0.2, 1)
  }
  layer1.rotateX(-45)
}

function draw() {
  console.log(frameCount)
  layer1.rotateY(0.1)
  cakeHeight = max(vertices[numShapes - 1][1][1], vertices[numShapes - 1][2][1])
  // cakeShape=random[0,1,2]
  cakeShape = 0
  if (cakeShape == 0) {
    tickMax = wid * 1.5
    // sc = scale
    scA = 0.3 // amplitude
    scB = 1 // frequency
    scC = 0 // offset (degrees)
    // rz = rotateZ
    rzA = unit / 2 // amplitude
    rzB = 1 // frequency
    rzC = 30 // offset (degrees)
    rzD = unit / 3 // amplitude
    rzE = 1 // frequency
    rzF = 0 // offset (degrees)
    // mb = makeBrush
    mbA = 200 //-0.375 * wid - siiize / 2 // x parameter 1st term
    mbB = 0 // 0.5 // x parameter 2nd term (times tick)
    mbC = -cakeHeight / 2 // y parameter
    mbD = 0 // z parameter
  } else if (cakeShape == 1) {
    tickMax = wid * 1.5
    // sc = scale
    scA = 0 // amplitude
    scB = randSeed / 1000000000 // frequency
    scC = 0 // offset (degrees)
    // rz = rotateZ
    rzA = unit / 2 // amplitude
    rzB = 1 // frequency
    rzC = 30 // offset (degrees)
    rzD = unit / 3 // amplitude
    rzE = 1 // frequency
    rzF = 0 // offset (degrees)
    // mb = makeBrush
    mbA = 200 //-0.375 * wid - siiize / 2 // x parameter 1st term
    mbB = 0 // 0.5 // x parameter 2nd term (times tick)
    mbC = -cakeHeight / 2 // y parameter
    mbD = 0 // z parameter
  }
  tick = frameCount
  // mark making /////////////////////////////////////////////////////////
  layer1.push()

  layer1.scale(scale0 + scA * sin(scB * tick + scC))
  layer1.rotateZ(rzA * sin(rzB * tick + rzC) + rzD * sin(rzE * tick + rzF))

  // x, y, z
  makeBrush(mbA + mbB * tick, mbC, mbD, 0)

  layer1.pop()

  image(layer1, 0, 0)
}

function makeBrush(x, y, z) {
  layer1.push()
  layer1.translate(x, y, z)
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

    for (let n = 0; n < numRs; n++) {
      if (i == rsIndex[n]) {
        layer1.stroke(rsColor[n])
        if (n % 3 == 0) {
          layer1.line(
            ...vertices[i][0],
            lerp(vertices[i][0][0], vertices[i][1][0], 0.5),
            lerp(vertices[i][0][1], vertices[i][1][1], 0.5)
          )
        } else if (n % 3 == 1) {
          layer1.line(
            ...vertices[i][1],
            lerp(vertices[i][1][0], vertices[i][2][0], 0.5),
            lerp(vertices[i][1][1], vertices[i][2][1], 0.5)
          )
        } else {
          layer1.line(
            ...vertices[i][2],
            lerp(vertices[i][2][0], vertices[i][0][0], 0.5),
            lerp(vertices[i][2][1], vertices[i][0][1], 0.5)
          )
        }
      }
    }
  }
  layer1.pop()
}

function vertexCache(numShapes, siiize) {
  let vertexArray = []
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
  return vertexArray
}

function blendColor(color0, color1, t) {
  if (abs(color0[0] - color1[0]) > 180) {
    if (color0[0] > color1[0]) {
      color1[0] += 360
    } else {
      color0[0] += 360
    }
  }

  return [
    lerp(color0[0], color1[0], t) % 360,
    lerp(color0[1], color1[1], t),
    lerp(color0[2], color1[2], t),
    lerp(color0[3], color1[3], t),
  ]
}
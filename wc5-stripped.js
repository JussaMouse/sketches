let randSeed =
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) % 100000000000000
console.log(randSeed)

// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// globals
let a = 0.55 // alpha channel for wavecake strokes/ fills
let c = [
  '#003D69', // 0 deep blue
  '#E3FFFF', // 1 white teal
  '#FF4A74', // 2 brite pink
  '#750082', // 3 deep purp
  '#02CC78', // 4 brite teal
  '#093332', // 5 drk teal
  '#224E5E', // 6 drk teal
  '#93ADB5', // 7 lite gray teal
  '#B0ADC4', // 8 lite gray purp
  '#062A57', // 9 drk blu
  '#80B2E8', // 10 sky blu
  '#AAF0D9', // 11 hot teal
  '#0F1A30', // 12 blk blu
  '#709C88', // 13 mid gray teal
  '#F3FA70', // 14 brite pastel yello
  '#F5A676', // 15 lit brn orng
  '#9DD1B5', // 16 lit aqua
  '#2E2359', // 17 deep purp
  '#0E4542', // 18 drk teal
  '#0BDEB4', // 19 hot teal
  '#151716', // 20 blk
  '#03472F', // 21 drk grn
  '#366E8F', // 22 mid gray blu
  '#A9C0D9', // 23 lit gray blu
  '#577367', // 24 mid gray grn
  '#73364A', // 25 mid gray wine
  '#CC2D55', // 26 brite salmon
  '#63B7F2', // 27 bby blu
  '#0289B3', // 28 lit blu
  '#B2CFB2', // 29 lit gray grn
  '#5A5094', // 30 mid gray purp
  '#FF8599', // 31 brite pink
  '#780848', // 32 deep mgnta
  '#CC3B4C', // 33 brite salmon
  '#211C19', // 34 blk
  '#FF1741', // 35 brite red
  '#A89B6A', // 36 tan
  '#E3BA5B', // 37 cream yello
  '#5E5851', // 38 mid gray
  '#3D1717', // 39 drk ochre
  '#E8C1C6', // 40 cream pink
  '#690002', // 41 deep red
  '#8A8569', // 42 mid gray yello
  '#EDCBA4', // 43 cream
  '#FFB700', // 44 marrigold
  '#E3D68A', // 45 lit gray yello
  '#6E3423', // 46 deep orng brn
  '#660507', // 47 drk red
  '#FA4F00', // 48 brite orng
  '#D65527', // 49 deep orng
  '#71707D', // 50 mid gray
  '#FF4A74', // 51 brite salmon
  '#52DED7', // 52 hot aqua
  '#700D21', // 53 drk red
  '#AB8F74', // 54 khaki
  '#48616B', // 55 drk blu gray
  '#85526F', // 56 mid gray mgnta
  '#F7D8CD', // 57 cream
  '', // 58
  '#E887AE', // 59 lit pink
  '#542918', // 60 deep brn
  '#676D75', // 61 mid gray
  '#F2AA83', // 62 cream orng
  '#90D4A3', // 63 lit gray lime
  '#6E4E4C', // 64 mid gray brn
  '#451016', // 65 drk red
  '#5E556B', // 66 mid gray purp
  '#2F302C', // 67 blk gray
  '#739C97', // 68 mid gray teal
  '#F2E6D3', // 69 yello cream
]

let pairs = [
  [c[0], c[1]],
  [c[0], c[10]],
  [c[0], c[27]],
  [c[1], c[23]],
  [c[1], c[6]],
  [c[1], c[52]],
  [c[1], c[28]],
  [c[1], c[12]],
  [c[1], c[14]],
  [c[2], c[3]],
  [c[3], c[33]],
  [c[3], c[23]],
  [c[3], c[11]],
  [c[3], c[35]],
  [c[3], c[39]],
  [c[3], c[65]],
  [c[3], c[34]],
  [c[4], c[30]],
  [c[4], c[51]],
  [c[4], c[19]],
  [c[4], c[5]],
  [c[5], c[36]],
  [c[5], c[28]],
  [c[5], c[22]],
  [c[5], c[42]],
  [c[5], c[63]],
  [c[5], c[23]],
  [c[6], c[57]],
  [c[6], c[7]],
  [c[7], c[34]],
  [c[7], c[55]],
  [c[7], c[17]],
  [c[7], c[20]],
  [c[7], c[57]],
  [c[7], c[61]],
  [c[7], c[52]],
  [c[7], c[39]],
  [c[8], c[9]],
  [c[8], c[53]],
  [c[1], c[32]],
  [c[9], c[45]],
  [c[10], c[62]],
  [c[10], c[20]],
  [c[10], c[11]],
  [c[11], c[20]],
  [c[11], c[68]],
  [c[11], c[36]],
  [c[11], c[27]],
  [c[12], c[27]],
  [c[12], c[23]],
  [c[12], c[13]],
  [c[12], c[63]],
  [c[14], c[15]],
  [c[68], c[52]],
  [c[15], c[25]],
  [c[16], c[17]],
  [c[17], c[37]],
  [c[52], c[17]],
  [c[61], c[17]],
  [c[68], c[17]],
  [c[16], c[22]],
  [c[34], c[16]],
  [c[16], c[66]],
  [c[18], c[19]],
  [c[20], c[21]],
  [c[21], c[45]],
  [c[66], c[22]],
  [c[23], c[24]],
  [c[26], c[23]],
  [c[66], c[23]],
  [c[50], c[23]],
  [c[34], c[26]],
  [c[27], c[28]],
  [c[56], c[28]],
  [c[28], c[57]],
  [c[28], c[66]],
  [c[31], c[27]],
  [c[27], c[40]],
  [c[29], c[64]],
  [c[50], c[29]],
  [c[29], c[30]],
  [c[30], c[57]],
  [c[31], c[32]],
  [c[31], c[45]],
  [c[32], c[35]],
  [c[42], c[33]],
  [c[45], c[32]],
  [c[34], c[35]],
  [c[35], c[41]],
  [c[3], c[51]],
  [c[51], c[34]],
  [c[34], c[69]],
  [c[37], c[38]],
  [c[44], c[38]],
  [c[37], c[59]],
  [c[60], c[37]],
  [c[39], c[40]],
  [c[42], c[43]],
  [c[12], c[16]],
  [c[47], c[48]],
  [c[45], c[49]],
  [c[2], c[25]],
  [c[30], c[19]],
  [c[52], c[35]],
  [c[10], c[18]],
  [c[44], c[53]],
  [c[57], c[65]],
  [c[13], c[19]],
  [c[53], c[49]],
  [c[45], c[48]],
  [c[27], c[18]],
  [c[20], c[61]],
]

let layer1 // canvas to draw wavecake on
let siiize = unit * 4 // triangle size for drawing cake layers
let numShapes = 6 // number of cake layers
let color0 // gradient start
let color1 // gradient end
let vertices = [] // points for drawing triangles with
let scale0 = 0.9
let colorIndex // location of color in c array
let numRs = 6 // number of Renegade Strokes
let rsIndex = [] // where to draw RS
let rsColor = [] // RS color
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
  createCanvas(wid, hei)
  angleMode(DEGREES)
  // painting layer :
  layer1 = createGraphics(wid, hei, WEBGL)
  layer1.colorMode(RGB, 255, 255, 255, 1)
  layer1.angleMode(DEGREES)
  layer1.background(5)
  layer1.scale(scale0)

  // gradient flip
  if (random() > 0.5) {
    for (el of pairs) [el[0], el[1]] = [el[1], el[0]]
  }

  // choose gradient color
  colorIndex = floor(random(pairs.length))
  color0 = chroma(pairs[colorIndex][0])
  color1 = chroma(pairs[colorIndex][1])

  // push vertices (x,y) for triangles to vertices array
  vertices = vertexCache(numShapes, siiize)

  // create a random index for where to add the Renegade Strokes
  // indexes correspond to the triangles being drawn in makeBrush()
  for (let i = 0; i < numRs; i++) {
    rsIndex.push(floor(random(numShapes)))
    let randC = floor(random(c.length))
    rsColor.push(c[randC])
  }

  // shaping params
  cakeHeight = max(vertices[numShapes - 1][1][1], vertices[numShapes - 1][2][1])
  tickMax = wid * 1.5
  // sc = scale
  scA = 0.2
  scB = 1
  scC = 0
  // crab:       rzB = rzE = 0.25
  // wonky crab: rzB = rzE = 0.5
  // loopy:      rzB = rzE = 1
  // loopy2:     rzB = 1, rzE = 0.5/0.25
  // classic:    rzB = 0.25, rzE = 1
  // bunched:    rzB = 0.88, rzE = 0.45
  // rz = rotateZ
  rzA = unit * 0.2
  rzB = 0.6
  rzC = randSeed % 360 // offset (degrees)
  rzD = unit * 0.5
  rzE = 0.35 // frequency
  rzF = randSeed % 180 // offset (degrees)
  // mb = makeBrush
  mbA = -0.375 * wid - siiize / 2 // x parameter 1st term
  mbB = 0.5 // x parameter 2nd term (times tick)
  mbC = -cakeHeight / 2 // y parameter
  mbD = 0 // z parameter

  // mark making /////////////////////////////////////////////////////////
  for (let tick = 0; tick < tickMax; tick++) {
    layer1.push()

    layer1.scale(scale0 + scA * sin(scB * tick + scC))
    layer1.rotateZ(rzA * sin(rzB * tick + rzC) + rzD * sin(rzE * tick + rzF))

    // x, y, z, toggle renegade strokes
    makeBrush(mbA + mbB * tick, mbC, mbD, true)

    layer1.pop()

    image(layer1, 0, 0)
  }
}

function draw() {}

function makeBrush(x, y, z, renegade) {
  layer1.push()
  layer1.translate(x, y, z)

  let bc = chroma.scale([color0, color1]).mode('lch')

  for (let i = 0; i < numShapes; i++) {
    let dt = (numShapes - 1) ** -1
    layer1.strokeWeight(5)
    layer1.stroke([...bc(i * dt).rgb(), a])
    layer1.fill([...bc(i * dt).rgb(), a])
    layer1.beginShape(TRIANGLES)
    layer1.vertex(...vertices[i][0])
    layer1.vertex(...vertices[i][1])
    layer1.vertex(...vertices[i][2])
    layer1.endShape()

    if (renegade) {
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

let randSeed =
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) % 100000000000000
const diceBox = Array.from(String(randSeed), Number)

// randSeed=47692433034945 // sunset

console.log(randSeed)

// define unit length //////////////////////////////////////////////////
let wid = window.innerWidth
let hei = window.innerHeight
let unit
wid > hei ? (unit = hei / 40) : (unit = wid / 40)

// get remap() ///////////////////////////////////////////////////////////
function normy(value, min, max) {
  return (value - min) / (max - min)
}
function lerpy(normy, min, max) {
  return (max - min) * normy + min
}
function remap(value, sourceMin, sourceMax, destMin, destMax) {
  var n = normy(value, sourceMin, sourceMax)
  return lerpy(normy(value, sourceMin, sourceMax), destMin, destMax)
}

// globals
let a = 0.55
// RIP pal0/pal1
let c = [
  [205, 100, 41],
  [180, 11, 100],
  [346, 71, 100],
  [294, 100, 51],
  [155, 99, 80],
  [179, 82, 20],
  [196, 64, 37],
  [194, 19, 71],
  [248, 12, 77],
  [213, 93, 34],
  [211, 45, 91],
  [160, 29, 94],
  [220, 69, 19],
  [153, 28, 61],
  [63, 55, 98],
  [23, 52, 96],
  [148, 25, 82],
  [252, 61, 35],
  [177, 80, 27],
  [168, 95, 87], //
  [150, 9, 9],
  [159, 96, 28],
  [202, 62, 56],
  [211, 22, 85],
  [154, 24, 45],
  [340, 53, 45],
  [345, 78, 80],
  [205, 59, 95],
  [194, 99, 70],
  [120, 14, 81],
  [249, 46, 58],
  [350, 48, 100],
  [326, 93, 47],
  [353, 71, 80],
  [27, 26, 13],
  [349, 91, 100],
  [47, 37, 66],
  [42, 60, 89],
  [32, 14, 37],
  [0, 63, 24],
  [352, 17, 91],
  [359, 100, 41],
  [51, 24, 54],
  [32, 31, 93],
  [43, 100, 100],
  [51, 39, 89],
  [14, 68, 43],
  [359, 95, 40],
  [19, 100, 98],
  [16, 82, 84],
  [245, 10, 49],
  [346, 71, 100],
  [177, 63, 87],
  [348, 88, 44],
  [29, 32, 67],
  [197, 33, 42],
  [326, 38, 52],
  [15, 17, 97],
  [16, 20, 96],
  [336, 42, 91],
  [17, 72, 33],
  [214, 12, 46],
  [21, 46, 95],
  [137, 32, 83],
  [5, 31, 43],
  [353, 77, 27],
  [266, 21, 42],
  [72, 10, 19],
  [173, 26, 61],
  [37, 13, 95],
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
  [c[6], c[58]],
  [c[6], c[7]],
  [c[7], c[34]],
  [c[7], c[55]],
  [c[7], c[17]],
  [c[7], c[20]],
  [c[7], c[58]],
  [c[7], c[61]],
  [c[7], c[52]],
  [c[7], c[39]],
  [c[8], c[9]],
  [c[8], c[53]],
  [c[8], c[60]],
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
  [c[14], c[34]],
  [c[15], c[25]],
  [c[16], c[17]],
  [c[17], c[37]],
  [c[52], c[17]],
  [c[61], c[17]],
  [c[68], c[17]],
  [c[16], c[22]],
  [c[34], c[16]],
  [c[16], c[66]],
  [c[18], c[19]], // c19 light
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
  [c[36], c[34]],
  [c[51], c[34]],
  [c[34], c[69]],
  [c[37], c[38]],
  [c[44], c[38]],
  [c[37], c[59]],
  [c[60], c[37]],
  [c[39], c[40]],
  [c[42], c[43]],
  [c[45], c[46]],
  [c[47], c[48]],
  [c[45], c[49]],
  [c[40], c[50]],
  [c[54], c[55]],
  [c[52], c[35]],
  [c[45], c[67]],
  [c[44], c[53]],
  [c[58], c[65]],
  [c[67], c[44]],
  [c[53], c[49]],
  [c[45], c[48]],
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
let frisky = false // if true... glitch color0/color1

const soulSet = [
  [0, 1, 'land', 'sea'], // 0 design| 0: land, 1: sea
  [0, 1, 'light', 'dark'], // 1 form| 0: light, 1: dark
  [0, 1, 'one', 'many'], // 2 user| 0: one, 1: many
  [0, 1, 'elder', 'academy'], // 3 logos| 0: elder, 1: academy
  [0, 1, 'ice', 'gas'], // 4 draw| 0: ice, 1: gas
  [0, 1, 'seed', 'tree'], // 5 age| 0: seed, 1: tree
  [0, 1, 'world', 'visitor'], // 6 distance| 0: world, 1: visitor
  [0, 1, 'bio', 'techno'], // 7 interface| 0: bio, 1: techno
  [0, 1, 'dog', 'cat'], // 8 system| 0: dog, 1: cat
  // house| 111: espionage, 110: ctf, 101: math, 100: control, 011: racer, 010: scene, 001: viz, 000: culture
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    'espionage',
    'ctf',
    'math',
    'control',
    'racer',
    'scene',
    'viz',
    'culture',
  ],
]
const eventSet = [
  [00, 01, 10], //fork: 0: none, 1: give new offsrping, 2: become new offspring
  [00, 01, 10], //growth: 0: none, 1: expand, 2: contract
  [00, 01, 10], //down: 0: up, 1: service outage, 2: death
  [0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1111], //soulSwitched: 1111: none, 0000-1000: element of soul{} to toggle
]
let life = {
  soul: {
    design: [0, ''],
    form: [0, ''],
    user: [0, ''],
    logos: [0, ''],
    draw: [0, ''],
    age: [0, ''],
    distance: [0, ''],
    interface: [0, ''],
    system: [0, ''],
    house: ['000', ''],
  },
  soulState: '',
  soulP: '',
  event: {
    fork: ['00', ''],
    growth: ['00', ''],
    down: ['00', ''],
    soulSwitch: ['1111', ''],
  },
  eventState: '',
}
let i = 0
for (stat of Object.keys(life.soul)) {
  if (i < soulSet.length - 1) {
    if (diceBox[i] > 4) {
      life.soul[stat][0] = soulSet[i][0]
      life.soul[stat][1] = soulSet[i][2]
    } else {
      life.soul[stat][0] = soulSet[i][1]
      life.soul[stat][1] = soulSet[i][3]
    }
  } else {
    let bigDie = randSeed % 100
    if (bigDie > 98) {
      // 2%
      life.soul[stat][0] = '111'
      life.soul[stat][1] = soulSet[i][8]
    } else if (bigDie > 96) {
      // 2%
      life.soul[stat][0] = '110'
      life.soul[stat][1] = soulSet[i][9]
    } else if (bigDie > 92) {
      // 4%
      life.soul[stat][0] = '101'
      life.soul[stat][1] = soulSet[i][10]
    } else if (bigDie > 86) {
      // 6%
      life.soul[stat][0] = '100'
      life.soul[stat][1] = soulSet[i][11]
    } else if (bigDie > 76) {
      // 10%
      life.soul[stat][0] = '011'
      life.soul[stat][1] = soulSet[i][12]
    } else if (bigDie > 60) {
      // 16%
      life.soul[stat][0] = '010'
      life.soul[stat][1] = soulSet[i][13]
    } else if (bigDie > 34) {
      // 26%
      life.soul[stat][0] = '001'
      life.soul[stat][1] = soulSet[i][14]
    } else {
      // 34%
      life.soul[stat][0] = '000'
      life.soul[stat][1] = soulSet[i][15]
    }
  }
  life.soulState += life.soul[stat][0]
  i++
}

life.soulP = remap(parseInt(life.soulState, 2), 0, 4095, 0, 1)
// for (stat )
// console.log(life.soul.design)

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
  if (random() > 0.5) {
    for (el of pairs) [el[0], el[1]] = [el[1], el[0]]
    console.log('flip!')
  }

  // choose gradient color
  colorIndex = floor(random(pairs.length))
  // color0 = [...pal0[colorIndex], a]
  // color1 = [...pal1[colorIndex], a]
  color0 = [...pairs[colorIndex][0], a]
  color1 = [...pairs[colorIndex][1], a]
  console.log(`pairs[${colorIndex}]`)

  // push vertices (x,y) for n triangles to vertices array
  vertices = vertexCache(numShapes, siiize)

  // create a random Index for
  // where to add the Renegade Strokes
  for (let i = 0; i < numRs; i++) {
    rsIndex.push(floor(random(numShapes)))
    rsColor.push(random(c))
    // console.log(rsColor)
    // rsColor[i][3] = random(0.2, 1)
    rsColor[i][3] = random(0.2, 1)
  }
  console.log(rsColor)
  // layer1.rotateX(-45)

  // for (let x = -wid / 2; x < wid / 2; x++) {
  //   life.eventState = noise(x / 10)
  //   if (life.eventState > 0.8333) {
  //     layer1.fill(0, 100, 100)
  //     layer1.ellipse(x, -hei / 2 + map(life.eventState, 0, 1, 150, 50), 9)
  //   } else if (life.eventState > 0.6666) {
  //     layer1.fill(120, 100, 100)
  //     layer1.ellipse(x, -hei / 2 + map(life.eventState, 0, 1, 150, 50), 5)
  //   } else if (life.eventState > 50) {
  //     layer1.fill(170, 100, 100)
  //     layer1.ellipse(x, -hei / 2 + map(life.eventState, 0, 1, 150, 50), 2)
  //   }
  // }
  console.log(color0, color1)

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
    mbA = -0.375 * wid - siiize / 2 // x parameter 1st term
    mbB = 0.5 // x parameter 2nd term (times tick)
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

  // mark making /////////////////////////////////////////////////////////
  for (let tick = 0; tick < wid * 1.5; tick++) {
    layer1.push()

    layer1.scale(scale0 + scA * sin(scB * tick + scC))
    layer1.rotateZ(rzA * sin(rzB * tick + rzC) + rzD * sin(rzE * tick + rzF))

    // x, y, z
    makeBrush(mbA + mbB * tick, mbC, mbD, 0)

    layer1.pop()

    image(layer1, 0, 0)
  }
}

function draw() {
  // console.log(frameCount)
  // layer1.rotateY(0.1)
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

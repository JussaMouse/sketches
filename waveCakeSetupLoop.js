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
  [205, 100, 41], //00
  [180, 11, 100], //01
  [346, 71, 100], //02
  [294, 100, 51], //03
  [155, 99, 80], //04
  [179, 82, 20], //05
  [196, 64, 37], //06
  [194, 19, 71], //07
  [248, 12, 77], //08
  [213, 93, 34], //09
  [211, 45, 91], //10
  [160, 29, 94], //11
  [220, 69, 19], //12
  [153, 28, 61], //13
  [63, 55, 98], //14
  [23, 52, 96], //15
  [148, 25, 82], //16
  [252, 61, 35], //17
  [177, 80, 27], //18
  [168, 95, 87], //19 // light
  [150, 9, 9], //20
  [159, 96, 28], //21
  [202, 62, 56], //22
  [211, 22, 85], //23
  [154, 24, 45], //24
  [340, 53, 45], //25
  [345, 78, 80], //26
  [205, 59, 95], //27
  [194, 99, 70], //28
  [120, 14, 81], //29
  [249, 46, 58], //30
  [350, 48, 100], //31
  [326, 93, 47], //32
  [353, 71, 80], //33
  [27, 26, 13], //34
  [349, 91, 100], //35
  [47, 37, 66], //36
  [42, 60, 89], //37
  [32, 14, 37], //38
  [0, 63, 24], //39
  [352, 17, 91], //40
  [359, 100, 41], //41
  [51, 24, 54], //42
  [32, 31, 93], //43
  [43, 100, 100], //44
  [51, 39, 89], //45
  [14, 68, 43], //46
  [359, 95, 40], //47
  [19, 100, 98], //48
  [16, 82, 84], //49
  [245, 10, 49], //50
  [346, 71, 100], //51
  [177, 63, 87], //52
  [348, 88, 44], //53
  [29, 32, 67], //54
  [197, 33, 42], //55
  [326, 38, 52], //56
  [15, 17, 97], //57
  [16, 20, 96], //58
  [336, 42, 91], //59
  [17, 72, 33], //60
  [214, 12, 46], //61
  [21, 46, 95], //62
  [137, 32, 83], //63
  [5, 31, 43], //64
  [353, 77, 27], //65
  [266, 21, 42], //66
  [72, 10, 19], //67
  [173, 26, 61], //68
  [37, 13, 95], //69
]

let pairs = [
  [c[0], c[1]], //00 brite white/lit blu/drk blu    // salmon/brn/orng/drk green/bby blu on the navy side accent
  [c[0], c[10]], //01 briteish baby blu/ dark aqua
  [c[0], c[27]], //02 briteish baby blu/ dark aqua    //drk grn/hot teal/ brn
  [c[1], c[23]], //03 brite lit lavender/ white     // navy/drk mgnta/ drk gray accent
  [c[1], c[6]], //04 briteish drk aqua/ white   //purp mud gray/blk/hot orng accent
  [c[1], c[52]], //05 brite hot aqua/ white   //gray/cream/blk
  [c[1], c[28]], //06 brite aqua/white    // drk teal/brn?/ accent
  [c[1], c[12]], //07 briteish drk navy/ gray blu/ white    // tan on navy/ cream/ blk/ bby blu
  [c[1], c[14]], //08 megabrite yello/green/white     // drk grn
  [c[2], c[3]], //09 megabrite purp/hotpink/hotsalmon     // drk teal accent/ cream/ gray/ yello
  [c[3], c[33]], //10 brite orng /purp    // hot aqua/salmon/white teal
  [c[3], c[23]], //11 brite lit blu ray/purp/mgnta
  [c[3], c[11]], //12 brite aqua/ blu/mgnta   //hot aqua behind mgnta/ salmon on purple/ blk on white teal
  [c[3], c[35]], //13 megabrite purp/mgnta/hot orange
  [c[3], c[39]], //14 brite drk red brn/ purp     //drk grn accent
  [c[3], c[65]], //15 briteish drk red brn/ purp    //gray/hot colors accent
  [c[3], c[34]], //16 dullish drk brn/ purple   // cream/white teal/lit pink
  [c[4], c[30]], //17 brite purp gray/hot grn   // hot aqua accent on the purple side
  [c[4], c[51]], //18 megabrite pink/ orng /yello /grn /teal
  [c[4], c[19]], //19 megabrite hot aqua/hot grn
  [c[4], c[5]], //20 brite drk grn/hot grn    // no aqua accent/ tan/ salmon
  [c[5], c[36]], //21 dullish tan/grn/drk teal
  [c[5], c[28]], //22 briteish drk teal/ baby blu   // tan/ peach or white teal edge on bby blu/ ? behind drk teal/ salmon on blu
  [c[5], c[22]], //23 dullish drk grn/gray blu    //drk red accent  //hot pink/mgnta/gray
  [c[5], c[42]], //24 dullish drk teal/grn/tan    // navy /white
  [c[5], c[63]], //25 dullish dark aqua /light aqua
  [c[5], c[23]], //26 briteish drk teal/lit gray blu  // cream/hot blu accent
  [c[6], c[58]], //27 briteish cream/grn/drk aqua
  [c[6], c[7]], //28 dullish drk teal/lit gray    //mgnta on teal side/orng on gray side/aqua middle
  [c[7], c[34]], //29 dull drk brn/olive/lit gray   //hot colors
  [c[7], c[55]], //30 dull lit gray teal/gray teal    // merrigold behind
  [c[7], c[17]], //31 dull lit gray/purp    // navy, bby blu, salmon
  [c[7], c[20]], //32 dull drk olive/lit gray blu
  [c[7], c[58]], //33 briteish pastel pink/grn/blu    // brn/blk/cream
  [c[7], c[61]], //34 dull slate /bluegray    // pink/ teal
  [c[7], c[52]], //35 brite gray/hot aqua   // navy/peach accent
  [c[7], c[39]], //36 dull blue/ purp
  [c[8], c[9]], //37 dullish navy/lit gray purp
  [c[8], c[53]], //38 briteish lit gray blu/purp/drk red
  [c[1], c[32]], //39 white blu/drk mgnta
  [c[9], c[45]], //40 brite navy/grn/cream yello    //orng over yello/ brn    //navy/ cream yello
  [c[10], c[62]], //41 brite peach/pink/purp/baby blu     //hot teal/ navy on the blue side/white/ yello on pink
  [c[10], c[20]], //42 briteish lit gray blu/gray teal/blk teal
  [c[10], c[11]], //43 brite hot aqua/bby blu
  [c[11], c[20]], //44 dullish blk teal/lit gray aqua   // yello/powder purp/ blk
  [c[11], c[68]], //45 brite lit aqua/ gray aqua
  [c[11], c[36]], //46 briteish hot aqua/ tan
  [c[11], c[27]], //47 brite lit gray aqua/bby blu    // navy/drk teal/cream/brn/ hot salmon over the blue side
  [c[12], c[27]], //48 briteish lit blu/drk blu
  [c[12], c[23]], //49 dull navy/lit gray   // cream/ pink/ purp on the gray edge
  [c[12], c[13]], //50 briteish navy/teal   //hot aqua/cream accent
  [c[12], c[63]], //51 briteish navy/aqua   // peach/merrigold/navy
  [c[14], c[15]], //52 brite peachy salmon/canary   // drk teal/ sky blu/ pink accent   // gray/ pink behind yello/ brown behind
  [c[14], c[34]], //53 dark brn/hot yello     // grey purp/ purp
  [c[15], c[25]], //54 dull ochre /cream
  [c[16], c[17]], //55 briteish hot aqua/drk purp   // merrigold? accent
  [c[17], c[37]], //56 bright drk purp/pink/yello
  [c[52], c[17]], //57 briteish drk purp/hot aqua   // white behind purp/ blu on the aqua edge/ yello on purp
  [c[61], c[17]], //58 dull mid gray/drk purp
  [c[68], c[17]], //59 dullish drk purp/gray aqua   //white behind the purple accent //hot salmon over both sides
  [c[16], c[22]], //60 brite gray bby blu/lit aqua  // hot pink/ med gray/ cream accent //tan accent
  [c[34], c[16]], //61 briteish lit aqua/drk brn
  [c[16], c[66]], //62 brite lit aqua/ gray drk purp
  [c[18], c[19]], //63 briteish drk grn/ aqua   // brn/blk/cream
  [c[20], c[21]], //64 dull blk grn/grn     // hot aqua/white
  [c[21], c[45]], //65 brite cream yello/grn
  [c[66], c[22]], //66  tween gray purp/aqua
  [c[23], c[24]], //67 dull light gray/ gray green    // wine/ gray/ white
  [c[26], c[23]], //68 brite hot mgnta/lit gray bby blu   //blk navy on gray bby/ orange on pink
  [c[66], c[23]], //69 dull gray purp/ lit gray
  [c[50], c[23]], //70 dull lit gray/ lit brn gray
  [c[34], c[26]], //71 brite hot mgnta/drk brn
  [c[27], c[28]], //72 megabrite lit blu/ blu   // white/ cream edge/ drk gray/ cream behind blu
  [c[56], c[28]], //73 briteish gray purp/ aqua   // lit teal/cream accent/ peach on blue
  [c[28], c[57]], //74 //brite yello/ grn/ blu
  [c[28], c[66]], //75 briteish sky blue/gray purp    //wine/drk gray teal/lit lavender
  [c[31], c[27]], //76 megabrite hot blue/purp/pnk/salmon   // cream/
  [c[27], c[40]], //77 brite powder blue /pink /cream   //white/cream in middle or hot aqua
  [c[29], c[64]], //78 dullish lit gray aqua/olive/med brn
  [c[50], c[29]], //79 brite mid gray/white teal    //peach/ navy/ drk grn
  [c[29], c[30]], //80 dull gray teal/purp    //brite color behind the gray teal
  [c[30], c[57]], //81 brite pastels cream/purp   // salmon accent
  [c[31], c[32]], //82 brite drk mgnta/lit pink
  [c[31], c[45]], //83 brite hot lit pink/hot lit yello ***   //white accent
  [c[32], c[35]], //84 brite drk mgnta/hot salmon   // bby blu/ white behind purp/ slate teal
  [c[42], c[33]], //85 dullish gray teal/hot salmon
  [c[45], c[32]], //86 briteish cream yello/drk mgnta
  [c[34], c[35]], //87 brite drk brn/ hot salmon
  [c[35], c[41]], //88 briteish drk red/hot salmon
  [c[3], c[51]], //89 brite purp/powder salmon
  [c[51], c[34]], //90 brite drk brn/ hot pink    //grey green on pink/blue on brn
  [c[34], c[69]], //91 dullish cream/drk brn
  [c[37], c[38]], //92 briteish lit chrcl/yellow    // navy/yellow accent   //purp/hot aqua
  [c[44], c[38]], //93 briteish merrigold/ lit chrcl    //blk/hot pink/ hot blu/ hot teal
  [c[37], c[59]], //94 brite lit pink/orng/yello    // white/purp
  [c[60], c[37]], //95 med yello/med brn
  [c[39], c[40]], //96 dullish drk red brn/cream
  [c[42], c[43]], //97 dullish lit olive/cream
  [c[45], c[46]], //98 briteish lit yello/mid brn
  [c[47], c[48]], //99 brite orng/red orng
  [c[45], c[49]], //100 brite orng/lit yello
  [c[2], c[25]], //101 briteish hot salmon/brn red      // navy/ white behind/ white gray on salmon edge/ hot color in middle/ blk
  [c[30], c[19]], //102 drk gray purp/hot teal    // hot orng/hot teal/pink accent
  [c[52], c[35]], //103 megabrite red/hot aqua
  [c[10], c[18]], //104 lit blu/drk aqua
  [c[44], c[53]], //105 brite drk red/merrigold   // mgnta/ drk teal
  [c[58], c[65]], //106 dullish drk red/ cream    //drk green over cream
  [c[13], c[19]], //107 brite teal gray/hot teal
  [c[53], c[49]], //108 brite lit orng/drk red orng
  [c[45], c[48]], //109 brite white yello/daglo orng
  [c[34], c[63]], //110 briteish lite teal/drk brn
  [c[20], c[61]], //111 dull mid gray/dark gray   // blu on drk gray/white behind gray
  [c[68], c[52]], //112 brite teal gray/hot aqua  //hot aqua on gray side/wine on aqua side/ hot salmon
  [c[12], c[16]], //113 briteish navy/ lit teal
  [c[27], c[18]], //114 briteish bby blu/drk grn    // cream/drk mgnta
  [], //115
  [], //116
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
  soulState: '00000000',
  soulP: 0,
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
  color0 = [...pairs[colorIndex][0], a]
  color1 = [...pairs[colorIndex][1], a]
  let cIndex0 = c.indexOf(pairs[colorIndex][0])
  let cIndex1 = c.indexOf(pairs[colorIndex][1])
  console.log(`pairs[${colorIndex}]`)
  console.log(`c[${cIndex0}]: ${color0}`)
  console.log(`c[${cIndex1}]: ${color1}`)
  // console.log(`pairs[${colorIndex}]`)
  // let rand0 = floor(random(c.length))
  // let rand1 = floor(random(c.length))
  // for (elem of pairs) {
  //   if (elem.includes(c[rand0]) && elem.includes(c[rand1])) {
  //     console.log(`dupe of pairs[${pairs.indexOf(elem)}]`)
  //   }
  // }

  // push vertices (x,y) for n triangles to vertices array
  vertices = vertexCache(numShapes, siiize)

  // create a random Index for
  // where to add the Renegade Strokes
  for (let i = 0; i < numRs; i++) {
    rsIndex.push(floor(random(numShapes)))
    let randC = floor(random(c.length))
    console.log(`rs${i}: c[${randC}]: ${c[randC]}`)
    rsColor.push(random(c))
    // console.log(rsColor)
    // rsColor[i][3] = random(0.2, 1)
    rsColor[i][3] = 1
  }
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

    // x, y, z, toggle renegade stripes
    makeBrush(mbA + mbB * tick, mbC, mbD, true)

    layer1.pop()

    image(layer1, 0, 0)
  }
}

function draw() {
  // console.log(frameCount)
  // layer1.rotateY(0.1)
}

function makeBrush(x, y, z, renegade) {
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

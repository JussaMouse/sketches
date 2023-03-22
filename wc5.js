let randSeed =
  Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) % 100000000000000
const diceBox = Array.from(String(randSeed), Number)

// randSeed = 56598228421479

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
  [c[0], c[1]], //00 brite white/lit blu/drk blu    // salmon/brn/orng/drk green/bby blu on the navy side accent
  [c[0], c[10]], //01 briteish baby blu/ dark aqua   // navy/ cream orng on drk blu
  [c[0], c[27]], //02 briteish baby blu/ dark aqua    //drk grn/hot teal/ brn
  [c[1], c[23]], //03 brite lit lavender/ white     // navy/drk mgnta/ drk gray accent //no drk grn
  [c[1], c[6]], //04 briteish drk aqua/ white   //purp mud gray/blk/hot orng accent //navy mgnta?
  [c[1], c[52]], //05 brite hot aqua/ white   //gray/cream/blk
  [c[1], c[28]], //06 brite aqua/white    // drk teal/brn?/ accent
  [c[1], c[12]], //07 briteish drk navy/ gray blu/ white    // tan on navy/ cream/ blk/ bby blu
  [c[1], c[14]], //08 megabrite yello/green/white     // drk grn // med grn on white edge
  [c[2], c[3]], //09 megabrite purp/hotpink/hotsalmon     // drk teal accent/ cream/ gray/ yello //brite red on purple/aqua middle
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
  [c[5], c[63]], //25 dullish dark aqua /light aqua   // cream orng?/white gray
  [c[5], c[23]], //26 briteish drk teal/lit gray blu  // cream/hot blu accent
  [c[6], c[57]], //27 briteish cream/grn/drk aqua   // marrigold on cream/ hot grn middle/brite smth on drk aqua
  [c[6], c[7]], //28 dullish drk teal/lit gray    //mgnta on teal side/orng on gray side/aqua middle
  [c[7], c[34]], //29 dull drk brn/olive/lit gray   //hot colors
  [c[7], c[55]], //30 dull lit gray teal/gray teal    // merrigold behind
  [c[7], c[17]], //31 dull lit gray/purp    // navy, bby blu, salmon
  [c[7], c[20]], //32 dull drk olive/lit gray blu
  [c[7], c[57]], //33 briteish pastel pink/grn/blu    // brn/blk/cream
  [c[7], c[61]], //34 dull slate /bluegray    // pink/ teal //hot yello/ drk blu //drk purp
  [c[7], c[52]], //35 brite gray/hot aqua   // navy/peach accent //pink cream + mustard on the grey side/salmon on aqua
  [c[7], c[39]], //36 dull blue/ purp
  [c[8], c[9]], //37 dullish navy/lit gray purp
  [c[8], c[53]], //38 briteish lit gray blu/purp/drk red
  [c[1], c[32]], //39 white blu/drk mgnta
  [c[9], c[45]], //40 brite navy/grn/cream yello    //orng over yello/ brn    //navy/ cream yello //mgnta or aqua on navy/marrigold on yello
  [c[10], c[62]], //41 brite peach/pink/purp/baby blu     //hot teal/ navy on the blue side/white/ yello on pink
  [c[10], c[20]], //42 briteish lit gray blu/gray teal/blk teal
  [c[10], c[11]], //43 brite hot aqua/bby blu
  [c[11], c[20]], //44 dullish blk teal/lit gray aqua   // yello/powder purp/ blk
  [c[11], c[68]], //45 brite lit aqua/ gray aqua
  [c[11], c[36]], //46 briteish hot aqua/ tan
  [c[11], c[27]], //47 brite lit gray aqua/bby blu    // navy/drk teal/cream/brn/ hot salmon over the blue side
  [c[12], c[27]], //48 briteish lit blu/drk blu
  [c[12], c[23]], //49 dull navy/lit gray   // cream/ pink/ purp on the gray edge //no drk red
  [c[12], c[13]], //50 briteish navy/teal   //hot aqua/cream accent
  [c[12], c[63]], //51 briteish navy/aqua   // peach/merrigold/navy
  [c[14], c[15]], //52 brite peachy salmon/canary   // drk teal/ sky blu/ pink accent   // gray/ pink behind yello/ brown behind  // hot pink+aqua on peach side
  [c[68], c[52]], //53 brite teal gray/hot aqua  //hot aqua on gray side/wine on aqua side/ hot salmon
  [c[15], c[25]], //54 dull ochre /cream
  [c[16], c[17]], //55 briteish hot aqua/drk purp   // merrigold? accent
  [c[17], c[37]], //56 bright drk purp/pink/yello
  [c[52], c[17]], //57 briteish drk purp/hot aqua   // white behind purp/ blu on the aqua edge/ yello on purp
  [c[61], c[17]], //58 dull mid gray/drk purp
  [c[68], c[17]], //59 dullish drk purp/gray aqua   //white behind the purple accent //hot salmon over both sides
  [c[16], c[22]], //60 brite gray bby blu/lit aqua  // hot pink/ med gray/ cream accent //tan accent
  [c[34], c[16]], //61 briteish lit aqua/drk brn
  [c[16], c[66]], //62 brite lit aqua/ gray drk purp    // brn on teal side/thin salmon lines middle
  [c[18], c[19]], //63 briteish drk grn/ aqua   // brn/blk/cream
  [c[20], c[21]], //64 dull blk grn/grn     // hot aqua/white // no red
  [c[21], c[45]], //65 brite cream yello/grn
  [c[66], c[22]], //66  tween gray purp/aqua   //hot orng behind purp
  [c[23], c[24]], //67 dull light gray/ gray green    // wine/ gray/ white
  [c[26], c[23]], //68 brite hot mgnta/lit gray bby blu   //blk navy on either side/ orange or yello on pink
  [c[66], c[23]], //69 dull gray purp/ lit gray
  [c[50], c[23]], //70 dull lit gray/ lit brn gray
  [c[34], c[26]], //71 brite hot mgnta/drk brn   // blue/lit gray on brn side
  [c[27], c[28]], //72 megabrite lit blu/ blu   // white/ cream edge/ drk gray/ cream behind blu
  [c[56], c[28]], //73 briteish gray purp/ aqua   // lit teal/cream accent/ peach on blue //no aqua on purp side
  [c[28], c[57]], //74 //brite yello/ grn/ blu
  [c[28], c[66]], //75 briteish sky blue/gray purp    //wine/drk gray teal/lit lavender //c[59] on blu side/ cream behind gray purp
  [c[31], c[27]], //76 megabrite hot blue/purp/pnk/salmon   // cream/
  [c[27], c[40]], //77 brite powder blue /pink /cream   //white/cream in middle or hot aqua
  [c[29], c[64]], //78 dullish lit gray aqua/olive/med brn
  [c[50], c[29]], //79 brite mid gray/white teal    //peach/ navy/ drk grn
  [c[29], c[30]], //80 dull gray teal/purp    //brite color behind the gray teal
  [c[30], c[57]], //81 brite pastels cream/purp   // salmon accent //no yello
  [c[31], c[32]], //82 brite drk mgnta/lit pink
  [c[31], c[45]], //83 brite hot lit pink/hot lit yello ***   //white accent
  [c[32], c[35]], //84 brite drk mgnta/hot salmon   // bby blu/ white behind purp/ slate teal
  [c[42], c[33]], //85 dullish gray teal/hot salmon //no red/orng on salmon side
  [c[45], c[32]], //86 briteish cream yello/drk mgnta   // hot aqua on yello side //hot salmon on yello/ yello on  mgnta
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
  [c[12], c[16]], //98 briteish navy/ lit teal
  [c[47], c[48]], //99 brite orng/red orng
  [c[45], c[49]], //100 brite orng/lit yello
  [c[2], c[25]], //101 briteish hot salmon/brn red      // navy/ white behind/ white gray on salmon edge/ hot color in middle/ blk
  [c[30], c[19]], //102 drk gray purp/hot teal    // hot orng/hot teal/pink accent //yello behind middle/ white on teal edge
  [c[52], c[35]], //103 megabrite red/hot aqua //mid gray on red edge
  [c[10], c[18]], //104 lit blu/drk aqua // purp/ cream
  [c[44], c[53]], //105 brite drk red/merrigold   // mgnta/ drk teal //cream/white/mid gray
  [c[57], c[65]], //106 dullish drk red/ cream    //drk green over cream
  [c[13], c[19]], //107 brite teal gray/hot teal    // hot salmon on aqua side/ no brn
  [c[53], c[49]], //108 brite lit orng/drk red orng  // hot orng edge/ white teal
  [c[45], c[48]], //109 brite white yello/daglo orng
  [c[27], c[18]], //110 briteish bby blu/drk grn    // cream/drk mgnta
  [c[20], c[61]], //111 dull mid gray/dark gray   // blu on drk gray/white behind gray
]

let layer1
let numLevels = 20
let siiize = unit * 4
let numShapes = 6
let color0
let color1
let vertices = []
let scale0 = 0.9
let colorIndex // color to use for gradient
let numRs = 8 // number of Renegade Strokes
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
  layer1.colorMode(RGB, 255, 255, 255, 1)
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
  // color0 = [...pairs[colorIndex][0], a]
  // color1 = [...pairs[colorIndex][1], a]
  color0 = chroma(pairs[colorIndex][0])
  color1 = chroma(pairs[colorIndex][1])
  // color0 = chroma(random(c))
  // color1 = chroma(random(c))
  // let cIndex0 = c.indexOf(pairs[colorIndex][0])
  // let cIndex1 = c.indexOf(pairs[colorIndex][1])
  let cIndex0 = c.indexOf(color0.hex().toUpperCase())
  let cIndex1 = c.indexOf(color1.hex().toUpperCase())
  console.log(
    `pairs[${colorIndex}]/ c[${cIndex0}]: ${color0}/ c[${cIndex1}]: ${color1}`
  )

  // push vertices (x,y) for n triangles to vertices array
  vertices = vertexCache(numShapes, siiize)

  // create a random Index for
  // where to add the Renegade Strokes
  for (let i = 0; i < numRs; i++) {
    rsIndex.push(floor(random(numShapes)))
    let randC = floor(random(c.length))
    console.log(`rs${i}: c[${randC}]: ${c[randC]}`)
    rsColor.push(c[randC])
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
    scA = 0.24 // amplitude {0.12 -}
    scB = 1 // frequency
    scC = 0 // offset (degrees)
    // rz = rotateZ
    // crab:       rzB = rzE = 0.25
    // wonky crab: rzB = rzE = 0.5
    // loopy:      rzB = rzE = 1
    // loopy2:     rzB = 1, rzE = 0.5/0.25
    // classic:    rzB = 0.25, rzE = 1
    // bunched:    rzB = 0.88, rzE = 0.45
    rzA = unit / 2 // amplitude
    rzB = 0.88 // frequency
    rzC = randSeed % 360 // offset (degrees)
    rzD = unit * 0.5 // amplitude //0.1. 0.25, 0.5... 2.5... 10+ is really crazy
    rzE = 0.35 // frequency
    rzF = randSeed % 180 // offset (degrees)
    console.log(`rzA: ${rzA}/ rzB: ${rzB}/ rzD: ${rzD}/ rzE: ${rzE}`)
    // mb = makeBrush
    mbA = -0.375 * wid - siiize / 2 // x parameter 1st term
    mbB = 0.5 // x parameter 2nd term (times tick)
    mbC = -cakeHeight / 2 // y parameter
    mbD = 0 // z parameter
  } else if (cakeShape == 1) {
    tickMax = wid / 2
    // sc = scale
    scale0 = 1
    scA = 0 // amplitude
    scB = 2 //randSeed / 1000000000 // frequency
    scC = 0 // offset (degrees)
    // rz = rotateZ
    rzA = unit // amplitude
    rzB = 1.2 // frequency
    rzC = 180 // offset (degrees)
    rzD = unit / 3 // amplitude
    rzE = 2 // frequency
    rzF = 0 // offset (degrees)
    // mb = makeBrush
    mbA = -200 //-0.375 * wid - siiize / 2 // x parameter 1st term
    mbB = 0.33 // 0.5 // x parameter 2nd term (times tick)
    mbC = -cakeHeight / 2 // y parameter
    mbD = 0 // z parameter
    layer1.rotateZ(randSeed % 100)
  }

  // mark making /////////////////////////////////////////////////////////
  for (let tick = 0; tick < tickMax; tick++) {
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
  layer1.orbitControl()
  // console.log(frameCount)
  // layer1.rotateY(0.1)
}

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

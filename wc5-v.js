let myFont
function preload() {
  myFont = loadFont('./UbuntuMono-Regular.ttf')
}

// canvases
let wid = window.innerWidth - 500
let hei = window.innerHeight
let unit
let ori = ''
let layerBg
let layerSoul

// dna
let addy = '0x'
let randSeed
let soul

// colors
let alph = 0.4
let c = [
  {
    // 0
    hex: '#003D69',
    brite: 'deep',
    group: 'B',
  },
  {
    // 1
    hex: '#E3FFFF',
    brite: 'lit',
    group: 'G',
  },
  {
    // 2
    hex: '#FF4A74',
    brite: 'brite',
    group: 'M',
  },
  {
    // 3
    hex: '#750082',
    brite: 'deep',
    group: 'V',
  },
  {
    // 4
    hex: '#02CC78',
    brite: 'brite',
    group: 'G',
  },
  {
    // 5
    hex: '#093332',
    brite: 'drk',
    group: 'G',
  },
  {
    // 6
    hex: '#224E5E',
    brite: 'dull',
    group: 'G',
  },
  {
    // 7
    hex: '#93ADB5',
    brite: 'lit',
    group: 'B',
  },
  {
    // 8
    hex: '#B0ADC4',
    brite: 'lit',
    group: 'V',
  },
  {
    // 9
    hex: '#062A57',
    brite: 'drk',
    group: 'B',
  },
  {
    // 10
    hex: '#80B2E8',
    brite: 'mid',
    group: 'B',
  },
  {
    // 11
    hex: '#AAF0D9',
    brite: 'brite',
    group: 'G',
  },
  {
    // 12
    hex: '#0F1A30',
    brite: 'drk',
    group: 'B',
  },
  {
    // 13
    hex: '#709C88',
    brite: 'mid',
    group: 'G',
  },
  {
    // 14
    hex: '#F3FA70',
    brite: 'brite',
    group: 'Y',
  },
  {
    // 15
    hex: '#F5A676',
    brite: 'mid',
    group: 'O',
  },
  {
    // 16
    hex: '#9DD1B5',
    brite: 'mid',
    group: 'G',
  },
  {
    // 17
    hex: '#2E2359',
    brite: 'drk',
    group: 'V',
  },
  {
    // 18
    hex: '#0E4542',
    brite: 'drk',
    group: 'G',
  },
  {
    // 19
    hex: '#0BDEB4',
    brite: 'brite',
    group: 'G',
  },
  {
    // 20
    hex: '#151716',
    brite: 'drk',
    group: 'mono',
  },
  {
    // 21
    hex: '#03472F',
    brite: 'deep',
    group: 'G',
  },
  {
    // 22
    hex: '#366E8F',
    brite: 'mid',
    group: 'B',
  },
  {
    // 23
    hex: '#A9C0D9',
    brite: 'lit',
    group: 'B',
  },
  {
    // 24
    hex: '#577367',
    brite: 'mid',
    group: 'dull',
  },
  {}, // 25
  {
    // 26
    hex: '#CC2D55',
    brite: 'deep',
    group: 'M',
  },
  {
    // 27
    hex: '#63B7F2',
    brite: 'lit',
    group: 'B',
  },
  {
    // 28
    hex: '#0289B3',
    brite: 'deep',
    group: 'B',
  },
  {
    // 29
    hex: '#B2CFB2',
    brite: 'mid',
    group: 'G',
  },
  {
    // 30
    hex: '#5A5094',
    brite: 'mid',
    group: 'V',
  },
  {
    // 31
    hex: '#FF8599',
    brite: 'mid',
    group: 'R',
  },
  {
    // 32
    hex: '#780848',
    brite: 'deep',
    group: 'M',
  },
  {
    // 33
    hex: '#CC3B4C',
    brite: 'mid',
    group: 'M',
  },
  {
    // 34
    hex: '#211C19',
    brite: 'drk',
    group: 'dull',
  },
  {
    // 35
    hex: '#FF1741',
    brite: 'brite',
    group: 'R',
  },
  {
    // 36
    hex: '#A89B6A',
    brite: 'mid',
    group: 'Y',
  },
  {
    // 37
    hex: '#E3BA5B',
    brite: 'mid',
    group: 'Y',
  },
  {
    // 38
    hex: '#5E5851',
    brite: 'mid',
    group: 'mono',
  },
  {
    // 39
    hex: '#3D1717',
    brite: 'drk',
    group: 'R',
  },
  {
    // 40
    hex: '#E8C1C6',
    brite: 'mid',
    group: 'R',
  },
  {
    // 41
    hex: '#690002',
    brite: 'drk',
    group: 'R',
  },
  {
    // 42
    hex: '#8A8569',
    brite: 'mid',
    group: 'Y',
  },
  {
    // 43
    hex: '#EDCBA4',
    brite: 'lit',
    group: 'dull',
  },
  {
    // 44
    hex: '#FFB700',
    brite: 'deep',
    group: 'Y',
  },
  {
    // 45
    hex: '#E3D68A',
    brite: 'lit',
    group: 'Y',
  },
  {
    // 46
    hex: '#6E3423',
    brite: 'deep',
    group: 'dull',
  },
  {}, // 47
  {
    // 48
    hex: '#FA4F00',
    brite: 'brite',
    group: 'O',
  },
  {
    // 49
    hex: '#D65527',
    brite: 'deep',
    group: 'O',
  },
  {
    // 50
    hex: '#71707D',
    brite: 'mid',
    group: 'mono',
  },
  {}, // 51
  {
    // 52
    hex: '#52DED7',
    brite: 'brite',
    group: 'B',
  },
  {}, // 53
  {
    // 54
    hex: '#AB8F74',
    brite: 'mid',
    group: 'dull',
  },
  {
    // 55
    hex: '#48616B',
    brite: 'mid',
    group: 'B',
  },
  {
    // 56
    hex: '#85526F',
    brite: 'mid',
    group: 'M',
  },
  {
    // 57
    hex: '#F7D8CD',
    brite: 'lit',
    group: 'R',
  },
  {
    // 58
    hex: '#FFFFFF',
    brite: 'lit',
    group: 'mono',
  },
  {
    // 59
    hex: '#E887AE',
    brite: 'mid',
    group: 'R',
  },
  {
    // 60
    hex: '#542918',
    brite: 'deep',
    group: 'dull',
  },
  {
    // 61
    hex: '#676D75',
    brite: 'mid',
    group: 'mono',
  },
  {
    // 62
    hex: '#F2AA83',
    brite: 'mid',
    group: 'O',
  },
  {
    // 63
    hex: '#90D4A3',
    brite: 'mid',
    group: 'G',
  },
  {
    // 64
    hex: '#6E4E4C',
    brite: 'mid',
    group: 'dull',
  },
  {
    // 65
    hex: '#451016',
    brite: 'drk',
    group: 'R',
  },
  {
    // 66
    hex: '#5E556B',
    brite: 'mid',
    group: 'V',
  },
  {
    // 67
    hex: '#2F302C',
    brite: 'drk',
    group: 'mono',
  },
  {
    // 68
    hex: '#739C97',
    brite: 'mid',
    group: 'G',
  },
  {
    // 69
    hex: '#F2E6D3',
    brite: 'lit',
    group: 'dull',
  },
]
let megabrite = [
  // the third element is an array of color groups to exclude
  // 0=R, 1=O, 2=Y, 3=G, 4=B, 5=V, 6=M
  [c[1].hex, c[14].hex, ['R']], //['G', 'no R']], //00 megabrite yello/green/white     // drk grn // med grn on white edge // ['mono', 'B', 'Y']],
  [c[2].hex, c[3].hex], //01 megabrite purp/hotpink/hotsalmon     // drk teal accent/ cream/ gray/ yello //brite red on purple/aqua middle
  [c[3].hex, c[35].hex], //, ['mono', 'B', 'Y']], //02 megabrite purp/mgnta/hot orange
  [c[4].hex, c[19].hex, ['R', 'M']], //, ['mono', 'dull', 'G', 'Y']], //03 megabrite hot aqua/hot grn
  [c[27].hex, c[28].hex], //04 megabrite lit blu/ blu   // white/ cream edge/ drk gray/ cream behind blu
  [c[31].hex, c[27].hex], //05 megabrite hot blue/purp/pnk/salmon   // cream/
]
let brite = [
  [c[0].hex, c[1].hex], //00 brite white/lit blu/drk blu    // salmon/brn/orng/drk green/bby blu on the navy side accent
  [c[1].hex, c[23].hex], //01 brite lit lavender/ white     // navy/drk mgnta/ drk gray accent //no drk grn
  [c[1].hex, c[52].hex], //02 brite hot aqua/ white   //gray/cream/blk
  [c[1].hex, c[28].hex], //03 brite aqua/white    // drk teal/brn?/ accent
  [c[3].hex, c[33].hex], //04 brite orng /purp    // hot aqua/salmon/white teal
  [c[3].hex, c[23].hex], //05 brite lit blu ray/purp/mgnta
  [c[3].hex, c[11].hex, ['R', 'M']], //06 brite aqua/ blu/mgnta   //hot aqua behind mgnta/ salmon on purple/ blk on white teal
  [c[3].hex, c[39].hex, ['G']], //07 brite drk red brn/ purp     //drk grn accent // white/ cream
  [c[4].hex, c[30].hex], //08 brite purp gray/hot grn   // hot aqua accent on the purple side
  [c[4].hex, c[5].hex, ['R', 'M']], //09 brite drk grn/hot grn    // no aqua accent/ tan/ salmon
  [c[7].hex, c[52].hex], //10 brite gray/hot aqua   // navy/peach accent //pink cream + mustard on the grey side/salmon on aqua //lit yello behind gray
  [c[9].hex, c[45].hex], //11 brite navy/grn/cream yello    //orng over yello/ brn    //navy/ cream yello //mgnta or aqua on navy/marrigold on yello
  [c[10].hex, c[62].hex], //12 brite peach/pink/purp/baby blu     //hot teal/ navy on the blue side/white/ yello on pink
  [c[10].hex, c[11].hex], //13 brite hot aqua/bby blu //mid orng
  [c[11].hex, c[68].hex, ['R']], //14 brite lit aqua/ gray aqua
  [c[11].hex, c[27].hex], //15 brite lit gray aqua/bby blu    // navy/drk teal/cream/brn/ hot salmon over the blue side
  [c[14].hex, c[15].hex], //16 brite peachy salmon/canary   // drk teal/ sky blu/ pink accent   // gray/ pink behind yello/ brown behind  // hot pink+aqua on peach side
  [c[68].hex, c[52].hex], //17 brite teal gray/hot aqua  //hot aqua on gray side/wine on aqua side/ hot salmon
  [c[17].hex, c[37].hex], //18 brite drk purp/pink/yello
  [c[16].hex, c[22].hex, ['R', 'M']], //19 brite gray bby blu/lit aqua  // hot pink/ med gray/ cream accent //tan accent
  [c[16].hex, c[66].hex, ['R', 'M']], //20 brite lit aqua/ gray drk purp    // brn on teal side/thin salmon lines middle
  [c[21].hex, c[45].hex, ['V', 'R', 'M']], //21 brite cream yello/grn
  [c[26].hex, c[23].hex, ['G', 'O']], //22 brite hot mgnta/lit gray bby blu   //blk navy on either side/ orange or yello on pink
  [c[34].hex, c[26].hex, ['G']], //23 brite hot mgnta/drk brn   // blue/lit gray on brn side
  [c[27].hex, c[40].hex], //24 brite powder blue /pink /cream   //white/cream in middle or hot aqua
  [c[50].hex, c[29].hex, ['R']], //25 brite mid gray/white teal    //peach/ navy/ drk grn
  [c[30].hex, c[57].hex], //26 brite pastels cream/purp   // salmon accent //no yello
  [c[31].hex, c[45].hex], //27 brite hot lit pink/hot lit yello ***   //white accent
  [c[32].hex, c[35].hex], //28 brite drk mgnta/hot salmon   // bby blu/ white behind purp/ slate teal
  [c[34].hex, c[35].hex, ['Y', 'V']], //29 brite drk brn/ hot salmon
  [c[3].hex, c[35].hex], //30 brite purp/powder salmon
  [c[35].hex, c[34].hex, ['O']], //31 brite drk brn/ hot pink    //grey green on pink/blue on brn
  [c[37].hex, c[59].hex], //32 brite lit pink/orng/yello    // white/purp
  [c[41].hex, c[48].hex], //33 brite orng/red orng
  [c[45].hex, c[49].hex], //34 brite orng/lit yello
  [c[30].hex, c[19].hex], //35 brite drk gray purp/hot teal    // hot orng/hot teal/pink accent //yello behind middle/ white on teal edge
  [c[44].hex, c[41].hex], //36 brite drk red/merrigold   // mgnta/ drk teal //cream/white/mid gray
  [c[13].hex, c[19].hex, ['R', 'O']], //37 brite teal gray/hot teal    // hot salmon on aqua side/ no brn/ no red
  [c[41].hex, c[49].hex], //38 brite lit orng/drk red orng  // hot orng edge/ white teal
  [c[45].hex, c[48].hex], //39 brite white yello/daglo orng
]
let briteish = [
  [c[0].hex, c[10].hex], //00 briteish baby blu/ dark aqua   // navy/ cream orng on drk blu
  [c[0].hex, c[27].hex], //01 briteish baby blu/ dark aqua    //drk grn/hot teal/ brn
  [c[1].hex, c[6].hex, ['R', 'M']], //02 briteish drk aqua/ white   //purp mud gray/blk/hot orng accent //navy mgnta?
  [c[1].hex, c[12].hex], //03 briteish drk navy/ gray blu/ white    // tan on navy/ cream/ blk/ bby blu
  [c[3].hex, c[65].hex], //04 briteish drk red brn/ purp    //gray/hot colors accent
  [c[5].hex, c[28].hex], //05 briteish drk teal/ baby blu   // tan/ peach or white teal edge on bby blu/ ? behind drk teal/ salmon on blu
  [c[5].hex, c[23].hex], //06 briteish drk teal/lit gray blu  // cream/hot blu accent
  [c[7].hex, c[57].hex], //07 briteish pastel pink/grn/blu    // brn/blk/cream
  [c[8].hex, c[41].hex, ['G']], //08 briteish lit gray blu/purp/drk red
  [c[1].hex, c[32].hex, ['O']], //09 briteish white blu/drk mgnta
  [c[10].hex, c[20].hex, ['R']], //10 briteish lit gray blu/gray teal/blk teal
  [c[12].hex, c[27].hex], //11 briteish lit blu/drk blu
  [c[12].hex, c[13].hex, ['R', 'M']], //12 briteish navy/teal   //hot aqua/cream accent
  [c[12].hex, c[63].hex], //13 briteish navy/aqua   // peach/merrigold/navy
  [c[16].hex, c[17].hex], //14 briteish hot aqua/drk purp   // merrigold? accent
  [c[52].hex, c[17].hex, ['R']], //15 briteish drk purp/hot aqua   // white behind purp/ blu on the aqua edge/ yello on purp // gray, cream, purp, brn
  [c[34].hex, c[16].hex], //16 briteish lit aqua/drk brn
  [c[18].hex, c[19].hex, ['R']], //17 briteish drk grn/ aqua   // brn/blk/cream
  [c[56].hex, c[28].hex, ['Y', 'R']], //18 briteish gray purp/ aqua   // lit teal/cream accent/ peach on blue //no aqua on purp side
  [c[28].hex, c[66].hex], //19 briteish sky blue/gray purp    //wine/drk gray teal/lit lavender //c[59].hex on blu side/ cream behind gray purp
  [c[45].hex, c[32].hex], //20 briteish cream yello/drk mgnta   // hot aqua on yello side //hot salmon on yello/ yello on  mgnta
  [c[35].hex, c[41].hex], //21 briteish drk red/hot salmon
  [c[44].hex, c[38].hex, ['Y']], //22 briteish merrigold/ lit chrcl    //blk/hot pink/ hot blu/ hot teal
  [c[12].hex, c[16].hex], //23 briteish navy/ lit teal  //
  [c[10].hex, c[18].hex], //24 briteish lit blu/drk aqua // purp/ cream
  [c[27].hex, c[18].hex, ['R']], //25 briteish bby blu/drk grn    // cream/drk mgnta
]
let dullish = [
  [c[3].hex, c[34].hex, ['G']], //00 dullish drk brn/ purple   // cream/white teal/lit pink
  [c[5].hex, c[22].hex], //01 dullish drk grn/gray blu    //drk red accent  //hot pink/mgnta/gray
  [c[5].hex, c[63].hex, ['R', 'M']], //02 dullish dark aqua /light aqua   // cream orng?/white gray
  [c[6].hex, c[7].hex], //03 dullish drk teal/lit gray    //mgnta on teal side/orng on gray side/aqua middle
  [c[9].hex, c[7].hex], //04 dullish navy/lit gray purp
  [c[11].hex, c[20].hex], //05 dullish blk teal/lit gray aqua   // yello/powder purp/ blk
  [c[68].hex, c[17].hex, ['R', 'M']], //06 dullish drk purp/gray aqua   //white behind the purple accent //hot salmon over both sides
  [c[28].hex, c[57].hex], //07 //cream pink/ mid blu
]
let dull = [
  [c[7].hex, c[34].hex], //00 dull drk brn/olive/lit gray   //hot colors
  [c[7].hex, c[55].hex], //01 dull lit gray teal/gray teal    // merrigold behind
  [c[7].hex, c[17].hex], //02 dull lit gray/purp    // navy, bby blu, salmon
  [c[7].hex, c[20].hex], //03 dull drk olive/lit gray blu
  [c[7].hex, c[61].hex], //04 dull slate /bluegray    // pink/ teal //hot yello/ drk blu //drk purp
  [c[7].hex, c[39].hex], //05 dull blue/ purp
  [c[12].hex, c[23].hex], //06 dull navy/lit gray   // cream/ pink/ purp on the gray edge //no drk red
  [c[61].hex, c[17].hex], //07 dull mid gray/drk purp
  [c[20].hex, c[21].hex, ['M', 'R']], //08 dull blk grn/grn     // hot aqua/white // no red
  [c[23].hex, c[24].hex], //09 dull light gray/ gray green    // wine/ gray/ white
  [c[66].hex, c[23].hex], //10 dull gray purp/ lit gray
  [c[50].hex, c[23].hex], //11 dull lit gray/ lit brn gray
  [c[29].hex, c[30].hex], //12 dull gray teal/purp    //brite color behind the gray teal
  [c[20].hex, c[61].hex], //13 dull mid gray/dark gray   // blu on drk gray/white behind gray
]
let litColors = c
  .filter((color) => color.brite == 'lit')
  .map((color) => color.hex)
let briteColors = c
  .filter((color) => color.brite == 'brite')
  .map((color) => color.hex)
let litty = briteColors.concat(litColors)
let natty = c.filter((color) => color.group == 'dull').map((color) => color.hex)
let mono = c.filter((color) => color.group == 'mono').map((color) => color.hex)
let groups = ['R', 'O', 'Y', 'G', 'B', 'V', 'M']
let palette = []
let color0
let color1
let cIndex0
let cIndex1
let rsSet
let rsAlpha = 0.5
let rsPalette = []

// shapes + stripes
let vertices = [] //
let brushMode = 'triangle'
let siiize
let numShapes = 4 // brush shapes
let numRs = 2 // number of Renegade Strokes
let cakeShape = 0
let cakeHeight
let cakeLength = 'med'
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
let x0 = 0
let mbA
let mbB
let mbC
let mbD
let thinny = false
let ghost = false
let sp = {
  tickMax: [0, 0, 10000, 1],
  x0: [0, -5000, 5000, 1],
  scale0: [0.9, 0, 2, 0.01],
  scA: [0, 0, 1, 0.01],
  scB: [0, 0, 2, 0.01],
  scC: [0, 0, 360, 1],
  rzA: [0, 0, 2, 0.01],
  rzB: [0, 0, 2, 0.01],
  rzC: [0, 0, 360, 1],
  rzD: [0, 0, 4, 0.02],
  rzE: [0, 0, 3, 0.02],
  rzF: [0, 0, 360, 1],
  mbA: [0, -2500, 2500, 1],
  mbB: [0, 0, 1, 0.01],
  mbC: [0, -2500, 2500, 1],
  mbD: [0, -1000, 1000, 1],
}
let rsSet2
let sliders = []

//////////////////////////////////////////////////////////////////////////
function makeBits(type) {
  let bitString = ''
  let bits = []
  if (type == 'rng') {
    for (let i = 0; i < 40; i++) {
      let digit = Math.floor(Math.random() * 16).toString(16)
      addy += digit
      if (i < 4) {
        digit = parseInt(digit, 16).toString(2).padStart(4, '0')
        for (let j = 0; j < 4; j++) {
          bits.push(digit[j])
        }
        bitString += digit
      }
    }
    console.log('addy: ', addy)
  }
  console.log('16 bits: ', bitString)
  return [bits, bitString]
}

//////////////////////////////////////////////////////////////////////////
function getSoul(bits, bitString) {
  soul = {
    design: bits[0], // 0 design
    form: bits[1], // 1 form
    user: bits[2], // 2 user
    logos: bits[3], // 3 logos
    age: bits[4], // 4 age
    distance: bits[5], // 5 distance
    interface: bits[6], // 6 interface
    system: bits[7], // 7 system
    mind: bits[8], // 8 mind
    house: '' + bits[9] + bits[10] + bits[11], // house| 111: espionage, 110: ctf, 101: math, 100: control, 011: racer, 010: scene, 001: viz, 000: culture
    mood: '' + bits[12] + bits[13] + bits[14] + bits[15],
    soulP: remap(parseInt(bitString, 2), 0, 65535, 0, 1),
  }
}

//////////////////////////////////////////////////////////////////////////
function makeBrush2(x, y, z, brushMode, rsSet, tick, renegade) {
  layerSoul.push()
  layerSoul.translate(x, y, z)

  let bc = chroma.scale([palette[0], palette[1]]).mode('lch')
  if (brushMode == 'fuzzy') alph = 0.01
  if (brushMode == 'sphere' || brushMode == 'box' || brushMode == 'numbers')
    alph = 0.1

  for (let i = 0; i < numShapes; i++) {
    // draw cake
    let dt = (numShapes - 1) ** -1

    layerSoul.strokeWeight(floor(unit / 5))
    if (thinny) layerSoul.strokeWeight(1)

    layerSoul.stroke([...bc(i * dt).rgb(), alph])
    layerSoul.fill([...bc(i * dt).rgb(), alph])
    if (brushMode == 'numbers') {
      let num = tick % 100
      layerSoul.textFont(myFont)
      layerSoul.textSize(unit * 3)
      layerSoul.text(`${num}`, ...vertices[i][0])
      layerSoul.text(`${num}`, ...vertices[i][1])
      layerSoul.text(`${num}`, ...vertices[i][2])
    } else if (brushMode == 'triangle') {
      console.log('hiu')
      layerSoul.beginShape(TRIANGLES)
      layerSoul.vertex(...vertices[i][0])
      layerSoul.vertex(...vertices[i][1])
      layerSoul.vertex(...vertices[i][2])
      layerSoul.endShape()
    } else if (brushMode == 'sphere' || brushMode == 'box') {
      for (let j = 0; j < 3; j++) {
        layerSoul.push()
        layerSoul.translate(...vertices[i][j], z)
        brushMode == 'sphere'
          ? layerSoul.sphere(unit * 2)
          : layerSoul.box(unit * 2)
        layerSoul.pop()
      }
    } else if (brushMode == 'fuzzy') {
      layerSoul.strokeWeight(1)
      for (let k = 0; k < 10; k++) {
        let d = unit * 2
        layerSoul.line(
          vertices[i][0][0] + random(-d, d),
          vertices[i][0][1] + random(-d, d),
          vertices[i][1][0] + random(-d, d),
          vertices[i][1][1] + random(-d, d)
        )
        layerSoul.line(
          vertices[i][1][0] + random(-d, d),
          vertices[i][1][1] + random(-d, d),
          vertices[i][2][0] + random(-d, d),
          vertices[i][2][1] + random(-d, d)
        )
        layerSoul.line(
          vertices[i][2][0] + random(-d, d),
          vertices[i][2][1] + random(-d, d),
          vertices[i][0][0] + random(-d, d),
          vertices[i][0][1] + random(-d, d)
        )
      }
    }

    // draw RS
    if (renegade && rsSet[i] != 0) {
      if (brushMode == 'fuzzy') rsAlpha = 0.02
      if (brushMode == 'sphere' || brushMode == 'box') rsAlpha = 0.07
      layerSoul.stroke(chroma(rsSet[i]).alpha(rsAlpha).hex())
      layerSoul.fill(chroma(rsSet[i]).alpha(rsAlpha).hex())
      if (brushMode == 'triangle') {
        layerSoul.line(
          ...vertices[i][0],
          lerp(vertices[i][0][0], vertices[i][1][0], 0.5),
          lerp(vertices[i][0][1], vertices[i][1][1], 0.5)
        )
      } else {
        if (brushMode == 'fuzzy') {
          z = -unit
          layerSoul.scale(0.8)
        }
        layerSoul.push()

        layerSoul.translate(...vertices[i][2], unit / 2)
        if (brushMode == 'numbers') {
          layerSoul.noStroke()
          layerSoul.fill(chroma('white').alpha(0.05).hex())
          layerSoul.text(`${addy[i + 2]}`, 0, 0, 0)
        } else {
          brushMode == 'box'
            ? layerSoul.box(unit * 2)
            : layerSoul.sphere(unit * 2)
        }
        layerSoul.pop()
      }
    }
  }
  layerSoul.pop()
}

//////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////
function getPalette(s) {
  let palette = []
  let name = ''
  let pi

  if (s.mood == '0000') {
    pi = floor(random(megabrite.length))
    palette = megabrite[pi]
    name = 'megabrite'
  } else if (s.mood == '0001' || s.mood == '0010') {
    pi = floor(random(dull.length))
    palette = dull[pi]
    name = 'dull'
    if (cakeShape == 1) palette = megabrite[floor(random(megabrite.length))]
  } else if (
    s.mood == '0011' ||
    s.mood == '0100' ||
    s.mood == '0101' ||
    s.mood == '0110'
  ) {
    pi = floor(random(dullish.length))
    palette = dullish[pi]
    name = 'dullish'
    if (cakeShape == 1) palette = megabrite[floor(random(megabrite.length))]
  } else if (
    s.mood == '0111' ||
    s.mood == '1000' ||
    s.mood == '1001' ||
    s.mood == '1010'
  ) {
    pi = floor(random(briteish.length))
    palette = briteish[pi]
    name = 'briteish'
  } else {
    pi = floor(random(brite.length))
    palette = brite[pi]
    name = 'brite'
  }

  // pi = 4
  // pair = dullish[4]
  // name = 'dullish'

  let group0 = random(groups)
  let group1 = random(groups)
  if (palette[2]) {
    console.log(`exclude: ${palette[2]}`)
    while (palette[2].includes(group0)) group0 = random(groups)
    while (palette[2].includes(group1)) group1 = random(groups)
  }
  console.log('group 0: ', group0)
  console.log('group 1: ', group1)

  function filty(color) {
    if ((name == 'dull' || name == 'dullish') && cakeShape == 0) {
      return (
        (color.group == group0 || color.group == group1) &&
        (color.brite == 'brite' || color.brite == 'lit')
      )
    }
    return color.group == group0 || color.group == group1
  }

  rsGroups = c.filter((color) => filty(color)).map((color) => color.hex)

  rsGroups.concat(mono)

  return [chroma(palette[0]), chroma(palette[1]), rsGroups, name, pi] //, gi]
}

//////////////////////////////////////////////////////////////////////////
function getRs(numShapes, numRs, rsPalette) {
  // check that numShapes > numRs
  if (numShapes < numRs)
    console.log('**ERROR: numRs MUST BE SMALLER THAN numShapes**')
  let rsSet = []
  for (let i = 0; i < numShapes; i++) rsSet[i] = 0
  for (let i = 0; i < numRs; i++) {
    let randI
    do {
      randI = floor(random(rsSet.length))
    } while (rsSet[randI] != 0)
    rsSet[randI] = random(rsPalette)
    let colour = c.findIndex((e) => e.hex === rsSet[randI].toUpperCase())
    console.log(
      `rs ${i}: ${c[colour].brite} ${c[colour].group} ${c[colour].hex}`
    )
  }
  return rsSet
}

//////////////////////////////////////////////////////////////////////////
function setup() {
  // set units
  if (wid > hei) {
    ori = 'horizontal'
    unit = hei / 50
  } else {
    ori = 'vertical'
    unit = wid / 50
  }
  l2w = wid * 0.25
  l2h = hei * 0.25
  siiize = unit * 4 // brush shape size
  grid = {
    blockSize: unit / 5,
    rows: 12,
    cols: 12,
  }
  console.log(`unit: ${unit.toFixed(2)}`)
  bs = Math.max(Math.floor(grid.blockSize), 1)
  console.log('bs: ', bs)

  // set dna
  let b = makeBits('rng')
  getSoul(...b)
  for (stat of Object.keys(soul)) console.log(`${stat}: ${soul[stat]}`)
  randSeed = Math.floor(soul.soulP * 1000000000)
  console.log('randSeed: ', randSeed)

  // set sketch prefs
  createCanvas(wid, hei)
  randomSeed(randSeed)
  noiseSeed(randSeed)
  angleMode(DEGREES)

  // set extra canvases
  layerBg = createGraphics(wid, hei)
  layerBg.background(5)

  layerSoul = createGraphics(wid, hei, WEBGL)
  layerSoul.colorMode(RGB, 255, 255, 255, 1)
  layerSoul.angleMode(DEGREES)
  layerSoul.scale(sp.scale0[0])

  // set visual traits
  if (soul.design == 1 && soul.form == 1 && soul.distance == 1) {
    alph = 0.1
    ghost = true
    console.log('ghost')
  }
  if (
    soul.logos == 1 &&
    soul.form == 0 &&
    soul.interface == 1 &&
    soul.house == '111'
  )
    brushMode = 'box'
  if (soul.system == 0 && soul.design == 0 && soul.user == 1 && !cakeShape)
    brushMode = 'sphere'
  if (
    soul.age == 1 &&
    soul.interface == 0 &&
    soul.distance == 0 &&
    soul.mood == '1111' &&
    !cakeShape
  )
    brushMode = 'fuzzy'
  if (brushMode == 'triangle' && soul.house == '011') cakeLength = 'long'
  if (brushMode == 'triangle' && soul.house == '001') cakeLength = 'short'
  if (soul.house == '110' && soul.mood == '1001') {
    numShapes = 2
    siiize = unit * 8
    numRs = 1
  }
  if (soul.mind == 1 && soul.system == 1 && soul.user == 0) {
    thinny = true
    console.log('thinny')
  }
  if (soul.age == 1) {
    numShapes = 5
    numRs = 3
  }
  if (soul.distance == 0 && soul.mind == 0 && soul.logos == 0) {
    cakeShape = 1
    numShapes = 12
    numRs += 2
    siiize = unit * 1.5
  }
  if (soul.mind == 0 && soul.interface == 1 && soul.house == '101')
    brushMode = 'numbers'

  if (brushMode == 'triangle' && !ghost && !thinny) numRs *= 2
  if (numRs > numShapes) numRs = numShapes

  // set vertices
  vertices = vertexCache(numShapes, siiize)
  cakeHeight = max(vertices[numShapes - 1][1][1], vertices[numShapes - 1][2][1])

  // set transform params
  if (cakeShape == 0) {
    if (cakeLength == 'short') {
      layerSoul.scale(0.8)
      sp.tickMax[0] = 1.5 * wid
      sp.x0[0] = 0
    } else if (cakeLength == 'med') {
      layerSoul.scale(0.65)
      sp.tickMax[0] = 1.98 * wid
      sp.x0[0] = -wid * 0.28
    } else {
      layerSoul.scale(0.55)
      sp.tickMax[0] = 3 * wid
      sp.x0[0] = -wid * 0.85
    }
    // sc = scale
    sp.scA[0] = random(0.1, 0.3) //amplitude
    sp.scB[0] = random(0.85, 1) //frequency
    sp.scC[0] = 0 // offset (degrees)
    // rz = rotateZ
    sp.rzA[0] = random(0.3, 0.8) // amplitude
    sp.rzB[0] = random(0.36, 0.93) // frequency
    sp.rzC[0] = randSeed % 360 // offset (degrees)
    sp.rzD[0] = random(0.33, 0.9) // amplitude
    if (soul.mood == '0000' && soul.house == '101') {
      layerSoul.scale(0.7)
      sp.rzD[0] = 4
      console.log('fairy')
    }
    sp.rzE[0] = random(0.3, 1) // 0.65 // frequency
    sp.rzF[0] = randSeed % 180 // offset (degrees)
    // mb = makeBrush
    sp.mbA[0] = -0.35 * wid - siiize / 2 // x parameter 1st term
    sp.mbB[0] = 0.5 // x parameter 2nd term (times tick)
    sp.mbC[0] = -cakeHeight / 2 // y parameter
    sp.mbD[0] = 0 // z parameter

    if (soul.house != '011' && soul.house != '001' && soul.mood == '1111') {
      sp.scB[0] = random(0.1, 0.4)
      sp.tickMax[0] = 1.88 * wid
      sp.scale0[0] = 0.8
      sp.x0[0] = -wid * 0.24
    }
    if (brushMode == 'fuzzy') {
      sp.tickMax[0] = 1.55 * wid
      sp.x0[0] = -wid * 0.07
      sp.mbC[0] = -cakeHeight / 3
    }
    console.log(`length: ${cakeLength}`)
  } else if (cakeShape == 1) {
    sp.x0[0] = 0
    sp.tickMax[0] = wid * 0.55
    // sc = scale
    sp.scale0[0] = 1.8
    soul.design == 0 ? (sp.scA[0] = 0) : (sp.scA[0] = random(0.05, 0.15)) // amplitude
    soul.form == 0 ? (sp.scB[0] = 0) : (sp.scB[0] = random(2)) //randSeed / 1000000000 // frequency
    soul.user == 0 ? (sp.scC[0] = 0) : (sp.scC[0] = random(360)) // offset (degrees)
    // rz = rotateZ
    soul.age == 0 ? (sp.rzA[0] = 0.1) : (sp.rzA[0] = random(0.5, 2)) // amplitude
    sp.rzB[0] = 1.2 // frequency
    sp.rzC[0] = 180 // offset (degrees)
    sp.rzD[0] = random(0.9, 1.5) // amplitude
    if (soul.distance == 0) sp.rzD[0] = 0.67
    sp.rzE[0] = random(0.5, 2.5) // frequency
    sp.rzF[0] = 0 // offset (degrees)
    // mb = makeBrush
    sp.mbA[0] = -0.15 * wid //-0.375 * wid - siiize / 2 // x parameter 1st term
    sp.mbB[0] = 0.5 // 0.33 // 0.5 // x parameter 2nd term (times tick)
    sp.mbC[0] = -cakeHeight / 2 // y parameter
    sp.mbD[0] = 0 // z parameter
    // layerSoul.rotateZ(randSeed % 100)
  }
  console.log(`brushMode: ${brushMode}`)
  console.log(`numShapes: ${numShapes}`)
  console.log(`numRs: ${numRs}`)
  console.log(`cakeshape: ${cakeShape}`)
  console.log(
    `tickMax: ${(sp.tickMax[0] / wid).toFixed(2)} * wid\nx0: ${(
      sp.x0[0] / wid
    ).toFixed(2)} * wid\nscale0: ${sp.scale0[0]}`
  )
  console.log(
    `scA: ${sp.scA[0].toFixed(2)} amplitude\nscB: ${sp.scB[0].toFixed(
      2
    )} freq\nscC: ${sp.scC[0]} offset`
  )
  console.log(
    `rzA: ${sp.rzA[0].toFixed(2)} amp\nrzB: ${sp.rzB[0].toFixed(
      2
    )} freq\nrzC: ${sp.rzC[0].toFixed(2)} offset\nrzD: ${sp.rzD[0].toFixed(
      2
    )} amp\nrzE: ${sp.rzE[0].toFixed(2)} freq\nrzF: ${sp.rzF[0]} offset`
  )
  console.log(
    `mbA: ${sp.mbA[0].toFixed(2)} x_a\nmbB: ${sp.mbB[0].toFixed(2)} x_b\nmbC: ${
      sp.scC[0]
    } y\nmbD: ${sp.mbD[0]} z`
  )

  // set victorizers
  let n = 0
  for (param of Object.keys(sp)) {
    sliders[n] = createSlider(
      sp[param][1],
      sp[param][2],
      sp[param][0],
      sp[param][3]
    )

    console.log(sliders[n].value())
    sliders[n].position(wid + 150, 20 + n * 20)
    sliders[n].style('width', '300px')

    if (param == 'tickerMax') {
    }
    sliders[n].input(() => {
      // sp[param][0] = slidy.value()
      // layerSoul.clear()

      //testing v
      stateSetter(param)

      // markMaking(slidy.value())
    })

    n++
  }

  // choose gradient color
  palette = getPalette(soul)
  rsPalette = palette[2]

  // flip!
  if (random() > 0.5) {
    ;[palette[0], palette[1]] = [palette[1], palette[0]]
    console.log('flip!')
  }

  // these index variables are just for making the console.log below
  cIndex0 = c.findIndex((e) => e.hex === palette[0].hex().toUpperCase())
  cIndex1 = c.findIndex((e) => e.hex === palette[1].hex().toUpperCase())
  console.log(
    `${palette[3]}[${palette[4]}]: \n${c[cIndex0].brite} ${c[cIndex0].group} ${c[cIndex0].hex}\n${c[cIndex1].brite} ${c[cIndex1].group} ${c[cIndex1].hex}`
  )

  // get rs array for makebrush
  rsSet2 = getRs(numShapes, numRs, rsPalette)

  markMaking(sp.tickMax[0])
}

//////////////////////////////////////////////////////////////////////////
function draw() {
  image(layerBg, 0, 0)

  drawLines()

  image(layerSoul, 0, 0)

  makeClickyBoxes()
}

function markMaking() {
  // mark making /////////////////////////////////////////////////////////
  for (let tick = 0; tick < sp.tickMax[0]; tick++) {
    layerSoul.push()

    layerSoul.scale(
      sp.scale0[0] + sp.scA[0] * sin(sp.scB[0] * tick + sp.scC[0])
    )
    layerSoul.rotateZ(
      sp.rzA[0] * unit * sin(sp.rzB[0] * tick + sp.rzC[0]) +
        sp.rzD[0] * unit * sin(sp.rzE[0] * tick + sp.rzF[0])
    )

    // x, y, z, brushMode, rsSet, tick, renegade
    // makeBrush(mbA + mbB * (tick + x0), mbC, mbD, brushMode, rsColor, tick, true) //rsSwitch)
    makeBrush2(
      sp.mbA[0] + sp.mbB[0] * (tick + sp.x0[0]),
      sp.mbC[0],
      sp.mbD[0],
      brushMode,
      rsSet2,
      tick,
      true
    ) //rsSwitch)

    layerSoul.pop()
  }
  console.log(sp)
}

function drawLines() {
  stroke(255)
  line(0, hei * 0.1, wid, hei * 0.1)
  line(0, hei * 0.5, wid, hei * 0.5)
  line(0, hei * 0.9, wid, hei * 0.9)
  line(wid * 0.1, 0, wid * 0.1, hei)
  line(wid * 0.5, 0, wid * 0.5, hei)
  line(wid * 0.9, 0, wid * 0.9, hei)
}

function makeClickyBoxes() {
  let i = 0
  for (param of Object.keys(sp)) {
    // fill(255)
    // rect(wid + 20, 20 + i * 20, 50, 15)
    // rect(wid + 80, 20 + i * 20, 50, 15)

    // fill(0)
    // text(param, wid + 25, 32 + i * 20)
    // text(sp[param][0].toFixed(2).toString(), wid + 85, 32 + i * 20)

    button = createButton(param)
    button.position(wid, 20 + i * 20)

    button2 = createButton(sp[param][0].toFixed(2).toString())
    button2.position(wid + 65, 20 + i * 20)

    i++
  }
}

// function updateParam() {
//   sp[param][0] = sliders[n].value()
// }

// function makeSlider(min, max, def, step) {
//   slider = createSlider(min, max, def, step)
//   slider.position(wid * 0.5 - 100, 10)
//   slider.style('width', '200px')
// }

function stateSetter() {
  let i = 0
  for (param of Object.keys(sp)) {
    sp[param][0] = sliders[i].value()
    i++
  }
  layerSoul.clear()
  markMaking()
}

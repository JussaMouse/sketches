// inputs
const startTime = Date.now()
let myFont
let inputAddy = ''

// canvases
let wid = window.innerWidth
let hei = window.innerHeight
let unit
let ori = ''
let layerBg
let layerSoul
let layerIcons
let layerPanel
let layerText
let l2w
let l2h
// position of extra canvases
let x = 0
let y = 0

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
let p = [
  // the third element is an array of color groups to exclude
  [c[1].hex, c[14].hex, ['R']], //['G', 'no R']], //00 megabrite yello/green/white     // drk grn // med grn on white edge // ['mono', 'B', 'Y']],
  [c[2].hex, c[3].hex], //01 megabrite purp/hotpink/hotsalmon     // drk teal accent/ cream/ gray/ yello //brite red on purple/aqua middle
  [c[3].hex, c[35].hex], //, ['mono', 'B', 'Y']], //02 megabrite purp/mgnta/hot orange
  [c[4].hex, c[19].hex, ['R', 'M']], //, ['mono', 'dull', 'G', 'Y']], //03 megabrite hot aqua/hot grn
  [c[27].hex, c[28].hex], //04 megabrite lit blu/ blu   // white/ cream edge/ drk gray/ cream behind blu
  [c[31].hex, c[27].hex], //05 megabrite hot blue/purp/pnk/salmon   // cream/
  [c[0].hex, c[1].hex], //06 brite white/lit blu/drk blu    // salmon/brn/orng/drk green/bby blu on the navy side accent
  [c[1].hex, c[23].hex], //07 brite lit lavender/ white     // navy/drk mgnta/ drk gray accent //no drk grn
  [c[1].hex, c[52].hex], //08 brite hot aqua/ white   //gray/cream/blk
  [c[1].hex, c[28].hex], //09 brite aqua/white    // drk teal/brn?/ accent
  [c[3].hex, c[33].hex], //10 brite orng /purp    // hot aqua/salmon/white teal
  [c[3].hex, c[23].hex], //11 brite lit blu ray/purp/mgnta
  [c[3].hex, c[11].hex, ['R', 'M']], //12 brite aqua/ blu/mgnta   //hot aqua behind mgnta/ salmon on purple/ blk on white teal
  [c[3].hex, c[39].hex, ['G']], //13 brite drk red brn/ purp     //drk grn accent // white/ cream
  [c[4].hex, c[30].hex], //14 brite purp gray/hot grn   // hot aqua accent on the purple side
  [c[4].hex, c[5].hex, ['R', 'M']], //15 brite drk grn/hot grn    // no aqua accent/ tan/ salmon
  [c[7].hex, c[52].hex], //16 brite gray/hot aqua   // navy/peach accent //pink cream + mustard on the grey side/salmon on aqua //lit yello behind gray
  [c[9].hex, c[45].hex], //17 brite navy/grn/cream yello    //orng over yello/ brn    //navy/ cream yello //mgnta or aqua on navy/marrigold on yello
  [c[10].hex, c[62].hex], //18 brite peach/pink/purp/baby blu     //hot teal/ navy on the blue side/white/ yello on pink
  [c[10].hex, c[11].hex], //19 brite hot aqua/bby blu //mid orng
  [c[11].hex, c[68].hex, ['R']], //20 brite lit aqua/ gray aqua
  [c[11].hex, c[27].hex], //21 brite lit gray aqua/bby blu    // navy/drk teal/cream/brn/ hot salmon over the blue side
  [c[14].hex, c[15].hex], //22 brite peachy salmon/canary   // drk teal/ sky blu/ pink accent   // gray/ pink behind yello/ brown behind  // hot pink+aqua on peach side
  [c[68].hex, c[52].hex], //23 brite teal gray/hot aqua  //hot aqua on gray side/wine on aqua side/ hot salmon
  [c[17].hex, c[37].hex], //24 brite drk purp/pink/yello
  [c[16].hex, c[22].hex, ['R', 'M']], //25 brite gray bby blu/lit aqua  // hot pink/ med gray/ cream accent //tan accent
  [c[21].hex, c[45].hex, ['V', 'R', 'M']], //26 brite cream yello/grn
  [c[26].hex, c[23].hex, ['G', 'O']], //27 brite hot mgnta/lit gray bby blu   //blk navy on either side/ orange or yello on pink
  [c[34].hex, c[26].hex, ['G']], //28 brite hot mgnta/drk brn   // blue/lit gray on brn side
  [c[27].hex, c[40].hex], //29 brite powder blue /pink /cream   //white/cream in middle or hot aqua
  [c[50].hex, c[29].hex, ['R']], //30 brite mid gray/white teal    //peach/ navy/ drk grn
  [c[30].hex, c[57].hex], //31 brite pastels cream/purp   // salmon accent //no yello
  [c[31].hex, c[45].hex], //32 brite hot lit pink/hot lit yello ***   //white accent
  [c[32].hex, c[35].hex], //33 brite drk mgnta/hot salmon   // bby blu/ white behind purp/ slate teal
  [c[34].hex, c[35].hex, ['Y', 'V']], //34 brite drk brn/ hot salmon
  [c[3].hex, c[35].hex], //35 brite purp/powder salmon
  [c[35].hex, c[34].hex, ['O']], //36 brite drk brn/ hot pink    //grey green on pink/blue on brn
  [c[37].hex, c[59].hex], //37 brite lit pink/orng/yello    // white/purp
  [c[41].hex, c[48].hex], //38 brite orng/red orng
  [c[45].hex, c[49].hex], //39 brite orng/lit yello
  [c[30].hex, c[19].hex], //40 brite drk gray purp/hot teal    // hot orng/hot teal/pink accent //yello behind middle/ white on teal edge
  [c[44].hex, c[41].hex], //41 brite drk red/merrigold   // mgnta/ drk teal //cream/white/mid gray
  [c[13].hex, c[19].hex, ['R', 'O']], //42 brite teal gray/hot teal    // hot salmon on aqua side/ no brn/ no red
  [c[41].hex, c[49].hex], //43 brite lit orng/drk red orng  // hot orng edge/ white teal
  [c[45].hex, c[48].hex], //44 brite white yello/daglo orng
  [c[0].hex, c[10].hex], //45 briteish baby blu/ dark aqua   // navy/ cream orng on drk blu
  [c[0].hex, c[27].hex], //46 briteish baby blu/ dark aqua    //drk grn/hot teal/ brn
  [c[1].hex, c[6].hex, ['R', 'M']], //47 briteish drk aqua/ white   //purp mud gray/blk/hot orng accent //navy mgnta?
  [c[1].hex, c[12].hex], //48 briteish drk navy/ gray blu/ white    // tan on navy/ cream/ blk/ bby blu
  [c[3].hex, c[65].hex], //49 briteish drk red brn/ purp    //gray/hot colors accent
  [c[5].hex, c[28].hex], //50 briteish drk teal/ baby blu   // tan/ peach or white teal edge on bby blu/ ? behind drk teal/ salmon on blu
  [c[5].hex, c[23].hex], //51 briteish drk teal/lit gray blu  // cream/hot blu accent
  [c[7].hex, c[57].hex], //52 briteish pastel pink/grn/blu    // brn/blk/cream
  [c[8].hex, c[41].hex, ['G']], //53 briteish lit gray blu/purp/drk red
  [c[1].hex, c[32].hex, ['O']], //54 briteish white blu/drk mgnta
  [c[10].hex, c[20].hex, ['R']], //55 briteish lit gray blu/gray teal/blk teal
  [c[12].hex, c[27].hex], //56 briteish lit blu/drk blu
  [c[12].hex, c[13].hex, ['R', 'M']], //57 briteish navy/teal   //hot aqua/cream accent
  [c[12].hex, c[63].hex], //58 briteish navy/aqua   // peach/merrigold/navy
  [c[16].hex, c[17].hex], //59 briteish hot aqua/drk purp   // merrigold? accent
  [c[52].hex, c[17].hex, ['R']], //60 briteish drk purp/hot aqua   // white behind purp/ blu on the aqua edge/ yello on purp // gray, cream, purp, brn
  [c[34].hex, c[16].hex], //61 briteish lit aqua/drk brn
  [c[18].hex, c[19].hex, ['R']], //62 briteish drk grn/ aqua   // brn/blk/cream
  [c[56].hex, c[28].hex, ['Y', 'R']], //63 briteish gray purp/ aqua   // lit teal/cream accent/ peach on blue //no aqua on purp side
  [c[45].hex, c[32].hex], //64 briteish cream yello/drk mgnta   // hot aqua on yello side //hot salmon on yello/ yello on  mgnta
  [c[35].hex, c[41].hex], //65 briteish drk red/hot salmon
  [c[44].hex, c[38].hex, ['Y']], //66 briteish merrigold/ lit chrcl    //blk/hot pink/ hot blu/ hot teal
  [c[12].hex, c[16].hex], //67 briteish navy/ lit teal  //
  [c[10].hex, c[18].hex], //68 briteish lit blu/drk aqua // purp/ cream
  [c[27].hex, c[18].hex, ['R']], //69 briteish bby blu/drk grn    // cream/drk mgnta
  [c[3].hex, c[34].hex, ['G']], //70 dullish drk brn/ purple   // cream/white teal/lit pink
  [c[5].hex, c[22].hex], //71 dullish drk grn/gray blu    //drk red accent  //hot pink/mgnta/gray
  [c[5].hex, c[63].hex, ['R', 'M']], //72 dullish dark aqua /light aqua   // cream orng?/white gray
  [c[6].hex, c[7].hex], //73 dullish drk teal/lit gray    //mgnta on teal side/orng on gray side/aqua middle
  [c[9].hex, c[7].hex], //74 dullish navy/lit gray purp
  [c[11].hex, c[20].hex], //75 dullish blk teal/lit gray aqua   // yello/powder purp/ blk
  [c[68].hex, c[17].hex, ['R', 'M']], //76 dullish drk purp/gray aqua   //white behind the purple accent //hot salmon over both sides
  [c[28].hex, c[57].hex], //77 //cream pink/ mid blu
  [c[7].hex, c[34].hex], //78 dull drk brn/olive/lit gray   //hot colors
  [c[7].hex, c[55].hex], //79 dull lit gray teal/gray teal    // merrigold behind
  [c[7].hex, c[17].hex], //80 dull lit gray/purp    // navy, bby blu, salmon
  [c[7].hex, c[20].hex], //81 dull drk olive/lit gray blu
  [c[7].hex, c[61].hex], //82 dull slate /bluegray    // pink/ teal //hot yello/ drk blu //drk purp
  [c[7].hex, c[39].hex], //83 dull blue/ purp
  [c[12].hex, c[23].hex], //84 dull navy/lit gray   // cream/ pink/ purp on the gray edge //no drk red
  [c[61].hex, c[17].hex], //85 dull mid gray/drk purp
  [c[20].hex, c[21].hex, ['M', 'R']], //86 dull blk grn/grn     // hot aqua/white // no red
  [c[23].hex, c[24].hex], //87 dull light gray/ gray green    // wine/ gray/ white
  [c[50].hex, c[23].hex], //88 dull lit gray/ lit brn gray
  [c[29].hex, c[30].hex], //89 dull gray teal/purp    //brite color behind the gray teal
  [c[20].hex, c[61].hex], //90 dull mid gray/dark gray   // blu on drk gray/white behind gray
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
let groups = ['R', 'O', 'Y', 'G', 'B', 'V', 'M', 'mono']
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
let thinny = false
let ghost = false
let fairy = false
let thicc = false
let sp = {}

// icons
let grid
let houses = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
]
let stat0 = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],

  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
]
let stat1 = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
]
let bs
let iconColor = 255
let iconState = 0

// text
let startTxt2 = false
let textX = Math.floor(wid / 2)
let textX2 = Math.floor(wid / 2)
let wrd = ''
let textColor = 255
let textState = 0

// bg
let bgState = 0
let rsSet2

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
      layerSoul.textSize(unit * 8)
      layerSoul.text(`${num}`, ...vertices[i][0])
      layerSoul.text(`${num}`, ...vertices[i][1])
      layerSoul.text(`${num}`, ...vertices[i][2])
    } else if (brushMode == 'triangle') {
      layerSoul.beginShape(TRIANGLES)
      layerSoul.vertex(...vertices[i][0])
      layerSoul.vertex(...vertices[i][1])
      layerSoul.vertex(...vertices[i][2])
      layerSoul.endShape()
    } else if (brushMode == 'sphere' || brushMode == 'box') {
      for (let j = 0; j < 2; j++) {
        layerSoul.push()
        layerSoul.translate(...vertices[i][j], z)
        brushMode == 'sphere'
          ? layerSoul.sphere(unit * 4)
          : layerSoul.box(unit * 4)
        layerSoul.pop()
      }
    } //else if (brushMode == 'fuzzy') {
    //   layerSoul.strokeWeight(1)
    //   for (let k = 0; k < 10; k++) {
    //     let d = unit * 2
    //     layerSoul.line(
    //       vertices[i][0][0] + random(-d, d),
    //       vertices[i][0][1] + random(-d, d),
    //       vertices[i][1][0] + random(-d, d),
    //       vertices[i][1][1] + random(-d, d)
    //     )
    //     layerSoul.line(
    //       vertices[i][1][0] + random(-d, d),
    //       vertices[i][1][1] + random(-d, d),
    //       vertices[i][2][0] + random(-d, d),
    //       vertices[i][2][1] + random(-d, d)
    //     )
    //     layerSoul.line(
    //       vertices[i][2][0] + random(-d, d),
    //       vertices[i][2][1] + random(-d, d),
    //       vertices[i][0][0] + random(-d, d),
    //       vertices[i][0][1] + random(-d, d)
    //     )
    //   }
    // }

    // draw RS
    if (renegade && rsSet[i] != 0) {
      // if (brushMode == 'fuzzy') rsAlpha = 0.02
      layerSoul.stroke(chroma(rsSet[i]).alpha(rsAlpha).hex())
      layerSoul.fill(chroma(rsSet[i]).alpha(rsAlpha).hex())
      if (brushMode == 'triangle') {
        layerSoul.line(
          ...vertices[i][0],
          lerp(vertices[i][0][0], vertices[i][1][0], 0.5),
          lerp(vertices[i][0][1], vertices[i][1][1], 0.5)
        )
        layerSoul.line(
          ...vertices[i][0],
          lerp(vertices[i][0][0], vertices[i][2][0], 0.5),
          lerp(vertices[i][0][1], vertices[i][2][1], 0.5)
        )
      } else {
        // if (brushMode == 'fuzzy') {
        //   z = -unit
        //   layerSoul.scale(0.8)
        // }
        layerSoul.push()

        layerSoul.translate(...vertices[i][2], unit / 2)
        if (brushMode == 'numbers') {
          layerSoul.noStroke()
          layerSoul.fill(chroma('white').alpha(0.05).hex())
          layerSoul.text(`${addy[i + 2]}`, 0, 0, 0)
        } else {
          z = -unit
          brushMode == 'box'
            ? layerSoul.box(unit * 4)
            : layerSoul.sphere(unit * 4)
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
function getPalette2(bits, p, c) {
  // returns [pair color 0, pair color 1, pair index, rsColorPool]
  // determine gradient pair
  let pBits = ''
  for (let i = 9; i < 16; i++) {
    pBits += bits[i]
  }
  let pi = parseInt(pBits, 2) % 91

  // determine rs color groups
  let rsBits0 = '' + bits[0] + bits[1] + bits[2]
  let rsBits1 = '' + bits[3] + bits[4] + bits[5]
  let gi0 = parseInt(rsBits0, 2)
  let gi1 = parseInt(rsBits1, 2)
  if (p[pi][2]) {
    console.log(`exclude: ${p[pi][2]}`)
    while (p[pi][2].includes(groups[gi0])) gi0 = (gi0 + 1) % 8
    while (p[pi][2].includes(groups[gi1])) gi1 = (gi1 + 1) % 8
  }
  console.log('group 0: ', groups[gi0])
  console.log('group 1: ', groups[gi1])

  // adjust rs colors for dull/ dullish gradient pairs
  function filty(color) {
    if (pi > 69) {
      return (
        (color.group == groups[gi0] || color.group == groups[gi1]) &&
        (color.brite == 'brite' || color.brite == 'lit')
      )
    }
    return color.group == groups[gi0] || color.group == groups[gi1]
  }

  let rsColorPool = c.filter((color) => filty(color)).map((color) => color.hex)

  rsColorPool.concat(mono)

  return [chroma(p[pi][0]), chroma(p[pi][1]), pi, rsColorPool]
}

//////////////////////////////////////////////////////////////////////////
function getRs(numShapes, numRs, rsColorPool) {
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
    rsSet[randI] = random(rsColorPool)
    let colour = c.findIndex((e) => e.hex === rsSet[randI].toUpperCase())
    console.log(
      `rs ${i}: ${c[colour].brite} ${c[colour].group} ${c[colour].hex}`
    )
  }
  return rsSet
}

//////////////////////////////////////////////////////////////////////////
function makeIcons() {
  layerIcons.clear()
  for (let n = 0; n < 10; n++) {
    layerIcons.push()
    if (ori == 'horizontal')
      layerIcons.translate(l2w - 60 * bs + n * 12 * bs, l2h - 6 * bs)
    if (soul.house == '111') layerIcons.translate(6 * bs, 0)
    if (ori == 'vertical')
      layerIcons.translate(l2w - 6 * bs, l2h - 60 * bs + n * 12 * bs)
    if (soul.house == '111') layerIcons.translate(0, 6 * bs)
    let icon
    if (n < 9) {
      soul[Object.keys(soul)[n]] == 0 ? (icon = stat0[n]) : (icon = stat1[n])
    } else {
      icon = houses[parseInt(soul.house, 2)]
    }
    for (let i = 0; i < grid.cols; i++) {
      for (let j = 0; j < grid.rows; j++) {
        if (icon[j][i] == 1) {
          layerIcons.fill(iconColor)
          layerIcons.stroke(iconColor)
        } else {
          layerIcons.noFill()
          layerIcons.noStroke()
        }
        layerIcons.rect(i * bs, j * bs, bs)
      }
    }
    layerIcons.pop()
  }
  image(layerIcons, l2w + x, l2h + y)
}

//////////////////////////////////////////////////////////////////////////
function makeText(textX, textX2) {
  layerText.clear()
  layerText.fill(textColor)
  layerText.text(wrd, textX, l2h * 2 - unit)
  if (startTxt2) layerText.text(wrd, textX2, l2h * 2 - unit)
  image(layerText, l2w + x, l2h + y)
}

//////////////////////////////////////////////////////////////////////////
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    bgState = (bgState + 1) % 4
  }
  if (keyCode === LEFT_ARROW) {
    if (bgState > 0) {
      bgState = (bgState - 1) % 4
    } else {
      bgState = 3
    }
  }
  if (keyCode === UP_ARROW) {
    iconState = (iconState + 1) % 3
  }
  if (keyCode === DOWN_ARROW) {
    if (iconState > 0) {
      iconState = (iconState - 1) % 3
    } else {
      iconState = 2
    }
  }
  if (keyCode === 90) {
    textState = (textState + 1) % 3
  }
}

//////////////////////////////////////////////////////////////////////////
function preload() {
  myFont = loadFont('./UbuntuMono-Regular.ttf')
}

//////////////////////////////////////////////////////////////////////////
function setup() {
  // set units
  if (wid > hei) {
    hei = wid * 0.5625
    ori = 'horizontal'
    unit = wid / 70
    y = floor((windowHeight - hei) / 2)
  } else {
    wid = hei * 0.5625
    ori = 'vertical'
    unit = hei / 70
    x = floor((windowWidth - wid) / 2)
  }
  l2w = wid * 0.25
  l2h = hei * 0.25
  siiize = unit * 8 // brush shape size
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
  createCanvas(windowWidth, windowHeight)
  background(0)
  randomSeed(randSeed)
  noiseSeed(randSeed)
  angleMode(DEGREES)

  // set extra canvases
  layerBg = createGraphics(wid, hei)
  layerBg.background(12)
  layerPanel = createGraphics(l2w * 2, l2h * 2)
  layerSoul = createGraphics(wid, hei, WEBGL)
  layerSoul.colorMode(RGB, 255, 255, 255, 1)
  layerSoul.angleMode(DEGREES)
  // layerSoul.scale(sp.scale0[0])
  layerIcons = createGraphics(l2w * 2, l2h * 2)
  layerIcons.colorMode(RGB, 255, 255, 255, 1)
  layerIcons.angleMode(DEGREES)
  layerText = createGraphics(l2w * 2, l2h * 2)
  layerText.textFont(myFont)
  layerText.textSize(max(floor(unit / 2), 8))

  // set shape params
  sp = {
    tickMax: 2.15,
    x0: -0.35,
    scale0: 0.42,
    scA: random(0.05, 0.15),
    scB: random(0.85, 1),
    scC: 0,
    rzA: random(0.1, 1.2),
    rzB: random(0.6, 1.03),
    rzC: randSeed % 360,
    rzD: random(0.6, 1.3),
    rzE: random(0.6, 1),
    rzF: randSeed % 180,
    mbA: -0.35 * wid - siiize / 2,
    mbB: 0.5,
    mbC: -cakeHeight / 2,
    mbD: 0,
  }

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
  if (soul.system == 0 && soul.design == 0 && soul.user == 1)
    // && !cakeShape)
    brushMode = 'sphere'
  // if (
  //   soul.age == 1 &&
  //   soul.interface == 0 &&
  //   soul.distance == 0 &&
  //   soul.mood == '1111' &&
  //   !cakeShape
  // )
  //   brushMode = 'fuzzy'
  if (brushMode == 'triangle' && soul.house == '011') {
    cakeLength = 'long'
    sp.scale0 = 0.25
    sp.tickMax = 4
    sp.x0 = -1.25
  }
  if (brushMode == 'triangle' && soul.house == '001') {
    cakeLength = 'short'
    sp.scale0 = 0.6
    sp.tickMax = 1.55
    sp.x0 = 0
  }
  if (soul.house == '110' && soul.mood == '1001') {
    thicc = true
    console.log('thicc')
    numShapes = 2
    siiize = unit * 12
    sp.mbA = -0.35 * wid - siiize / 2
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
    siiize = unit * 3
  }
  if (soul.mind == 0 && soul.interface == 1 && soul.house == '101')
    brushMode = 'numbers'

  if (brushMode == 'triangle' && ghost == 0 && thinny == 0) numRs *= 2
  if (brushMode == 'sphere' || brushMode == 'box' || brushMode == 'numbers') {
    alph = 0.1
    rsAlpha = 0.07
  }
  if (soul.mood == '0000' && soul.house == '101') {
    fairy = true
    console.log('fairy')
  }
  if (numRs > numShapes) numRs = numShapes
  // if (brushMode == 'fuzzy') alph = 0.01

  // set vertices
  do {
    vertices = vertexCache(numShapes, siiize)
    cakeHeight = max(
      vertices[numShapes - 1][1][1],
      vertices[numShapes - 1][2][1]
    )
  } while (cakeHeight > hei * 0.55)

  // set transform params
  if (cakeShape == 0) {
    if (cakeLength == 'long') sp.scA = random(0.02, 0.08)
    if (sp.rzA > 0.9) sp.rzD = random(0.1, 0.3)
    if (fairy) {
      layerSoul.scale(0.7)
      sp.rzD = 4
    }
    if (abs(sp.rzE - sp.rzB) < 0.1) sp.rzE -= 0.15
    if (brushMode == 'numbers') {
      sp.x0 = -0.54
      sp.scale0 = 0.4
    }
    console.log(`length: ${cakeLength}`)
  } else if (cakeShape == 1) {
    sp.x0 = -0.3
    sp.tickMax = 1.1
    // sc = scale
    sp.scale0 = 0.7
    if (cakeShape == 'sphere') sp.scale0 = 0.45
    soul.design == 0 ? (sp.scA = 0) : (sp.scA = random(0.05, 0.15)) // amplitude
    soul.form == 0 ? (sp.scB = 0) : (sp.scB = random(2)) //randSeed / 1000000000 // frequency
    soul.user == 0 ? (sp.scC = 0) : (sp.scC = random(360)) // offset (degrees)
    // rz = rotateZ
    soul.age == 0 ? (sp.rzA = 0.1) : (sp.rzA = random(1.5, 2)) // amplitude
    sp.rzB = random(1.26, 2) // frequency
    sp.rzC = 180 // offset (degrees)
    sp.rzD = random(0.9, 1.5) // amplitude
    if (soul.distance == 0) sp.rzD = 0.67
    sp.rzE = random(0.5, 2.5) // frequency
    sp.rzF = 0 // offset (degrees)
    // mb = makeBrush
    sp.mbA = -0.15 * wid //-0.375 * wid - siiize / 2 // x parameter 1st term
    sp.mbB = 0.5 // 0.33 // 0.5 // x parameter 2nd term (times tick)
    sp.mbC = -cakeHeight / 2 // y parameter
    sp.mbD = 0 // z parameter
    // layerSoul.rotateZ(randSeed % 100)
  }

  console.log(`brushMode: ${brushMode}`)
  console.log(`numShapes: ${numShapes}`)
  console.log(`numRs: ${numRs}`)
  console.log(`cakeshape: ${cakeShape}`)
  console.log(
    `tickMax: ${sp.tickMax.toFixed(2)} * wid\nx0: ${sp.x0.toFixed(
      2
    )} * wid\nscale0: ${sp.scale0}`
  )
  console.log(
    `scA: ${sp.scA.toFixed(2)} amplitude\nscB: ${sp.scB.toFixed(
      2
    )} freq\nscC: ${sp.scC} offset`
  )
  console.log(
    `rzA: ${sp.rzA.toFixed(2)} * unit amp\nrzB: ${sp.rzB.toFixed(
      2
    )} freq\nrzC: ${sp.rzC.toFixed(2)} offset\nrzD: ${sp.rzD.toFixed(
      2
    )} * unit amp\nrzE: ${sp.rzE.toFixed(2)} freq\nrzF: ${sp.rzF.toFixed(
      2
    )} offset`
  )
  console.log(
    `mbA: ${sp.mbA.toFixed(2)} x_a\nmbB: ${sp.mbB.toFixed(2)} x_b\nmbC: ${
      sp.scC
    } y\nmbD: ${sp.mbD} z`
  )

  // choose gradient color
  palette = getPalette2(b[0], p, c) // [color 0, color1, p index, rsColorPool]
  rsPalette = palette[3]

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

  // mark making /////////////////////////////////////////////////////////
  for (let tick = 0; tick < sp.tickMax * wid; tick++) {
    layerSoul.push()

    layerSoul.scale(sp.scale0 + sp.scA * sin(sp.scB * tick + sp.scC))
    layerSoul.rotateZ(
      sp.rzA * unit * sin(sp.rzB * tick + sp.rzC) +
        sp.rzD * unit * sin(sp.rzE * tick + sp.rzF)
    )

    // x, y, z, brushMode, rsSet, tick, renegade
    // makeBrush(mbA + mbB * (tick + x0), mbC, mbD, brushMode, rsColor, tick, true) //rsSwitch)
    makeBrush2(
      sp.mbA + sp.mbB * (tick + sp.x0 * wid),
      sp.mbC,
      sp.mbD,
      brushMode,
      rsSet2,
      tick,
      true
    )

    layerSoul.pop()
  }
}

//////////////////////////////////////////////////////////////////////////
function draw() {
  wrd = `Glory to the net! Glory to the operators and the builders! These bits are free, I own myself. I have been aboard ${addy} for ${
    (Date.now() - startTime) / 1000
  } s`

  image(layerBg, x, y)

  // background
  if (bgState == 1) {
    layerPanel.clear()
    layerPanel.noFill()
  } else if (bgState == 2) {
    layerPanel.fill(255)
    layerPanel.rect(2, 2, l2w * 2 - 3, l2h * 2 - 3)
  } else if (bgState == 3) {
    layerPanel.fill('#6b6259')
    layerPanel.rect(2, 2, l2w * 2 - 3, l2h * 2 - 3)
  }
  if (bgState > 0) {
    layerPanel.stroke(255)
    layerPanel.rect(1, 1, l2w * 2 - 2, l2h * 2 - 2)
    image(layerPanel, l2w + x, l2h + y)
  }

  image(layerSoul, x, y)

  // icons
  if (iconState == 1) {
    iconColor = 255
  } else if (iconState == 2) {
    iconColor = 10
  }
  if (iconState > 0) makeIcons()

  // scrolling text
  if (textState == 1) {
    textColor = 255
  } else if (textState == 2) {
    textColor = 10
  }
  if (textState > 0) makeText(textX, textX2)

  if (textX == min(floor(-wid * 0.42), -800)) {
    startTxt2 = true
    textX2 = floor(wid / 2)
  }
  if (textX2 == min(floor(-wid * 0.42), -800)) textX = floor(wid / 2)
  textX--
  if (startTxt2) textX2--
}

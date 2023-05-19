// swinging, stretching, chonking, color shifting rows of lines
// use the lines to make squares
// draw 40 squares in a spiral

let wid = window.innerWidth
let hei = window.innerHeight
let unit = hei / 50
if (hei > wid) unit = wid / 50
let tickAnim = 0
let tickNoise = 0
let greyVal = 0 // 0-100
let hueVal = 0 // 0-360
let tickShape = 0

function noiseLine(
  numStrokes,
  boxX,
  lineW,
  brushW,
  swing,
  chonkSpeed,
  swingSpeed,
  colorSpeed,
  colorSwitch
) {
  // colorSpeed /= 10
  let strokeDx = boxX / numStrokes
  for (let i = 0; i < numStrokes; i++) {
    greyVal =
      (noise((i / 50) * colorSpeed + tickShape) +
        sin((i / 50) * colorSpeed + tickShape)) *
        50 +
      50
    hueVal =
      ((noise(tickShape * colorSpeed) + cos(tickShape * colorSpeed)) * 90) % 360
    strokeWeight(max(noise(tickNoise * chonkSpeed * 0.5) * lineW, 1))
    stroke(0, 0, greyVal)
    if (colorSwitch) stroke(hueVal, 50, greyVal / 2)
    let slant =
      sin(i * 10 + floor(millis() * swingSpeed)) * swing * 0.5 +
      noise(tickNoise / 3) * swing * 0.1
    let y =
      noise((tickShape + tickNoise) / 100) * brushW +
      sin((tickShape + tickNoise) / 2) * (brushW / 3) +
      brushW * 0.15
    line(i * strokeDx + slant, -y, i * strokeDx, y)

    tickNoise += 0.001
    tickShape += 0.0005
  }
}

function noiseBox(
  x,
  y,
  numStrokes,
  boxX,
  lineW,
  brushW,
  swing,
  chonkSpeed,
  swingSpeed,
  colorSpeed,
  colorSwitch
) {
  translate(x, y)
  for (let i = 0; i < 4; i++) {
    noiseLine(
      numStrokes,
      boxX,
      lineW,
      brushW,
      swing,
      chonkSpeed,
      swingSpeed,
      colorSpeed,
      colorSwitch
    )
    translate(boxX, 0)
    rotate(90)
  }
}

function setup() {
  createCanvas(wid, hei)
  background(8)
  angleMode(DEGREES)
  strokeCap(PROJECT)
  strokeWeight(2)
  colorMode(HSB, 360, 100, 100, 1)
}

function draw() {
  if (millis() > tickAnim) {
    background(8)
    //       x,
    //       y,
    //       numStrokes,
    //       boxX,
    //       lineW,
    //       brushW,
    //       swing,
    //       chonkSpeed,
    //       swingSpeed,
    //       colorSpeed,
    //       colorSwitch

    // noiseBox(
    //   wid * 0.125,
    //   hei * 0.125,
    //   32,
    //   unit * 33,
    //   10,
    //   42,
    //   12,
    //   0.1,
    //   0.16,
    //   0.1,
    //   false
    // )
    translate(300, 300)
    let r = 800
    let numBox = 40
    for (let i = 0; i < numBox; i++) {
      let theta = lerp(0, 1720, i / numBox)
      let ri = lerp(0, r, i / numBox)
      let x = ri * cos(theta)
      let y = ri * sin(theta)
      let colorSwitch = random() > 0.5
      noiseBox(
        x + sin(greyVal / 50) * 10,
        y,
        9 + i,
        unit * i,
        1 + i,
        6 + i * 5,
        (2 * i) / 2,
        0.001 * i,
        0.36 - i * 0.02,
        0.001,
        false
      )
      greyVal = (greyVal + 7) % 100
      // tickShape+=.01
      // tickNoise+=.01
    }

    // tickAnim += 41.67
    tickAnim += 120
  }

  // console.log(millis())
  // console.log(`+${tick}`)
}

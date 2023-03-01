// take a circular slice of 3d noise space
// (a cross section of a torus) and view it as a 2d animation
let palBlend = [
  // [0, 0, 100],
  // [0, 0, 0],
  [190, 46, 100],
  [138, 100, 10],
  [0, 100, 60],
  [57, 100, 100],
]

let pal = [
  [71, 22, 87],
  [98, 36, 62],
  [154, 24, 45],
  [47, 37, 66],
  [148, 25, 82],
  [358, 68, 65],
  [155, 35, 35],
  [0, 63, 24],
  [38, 100, 89],
  [61, 75, 65],
  [78, 87, 59],
]

let r0 = 1
let slices = []
let sliceData = []
let sliceTotal = 360
let samples
let tick = 0
let blend = false
let wid = 1000 // window.innerWidth
let hei = 600 // window.innerHeight
let unit
wid < hei ? (unit = wid / 100) : (unit = hei / 100)

function setup() {
  createCanvas(wid, hei, WEBGL)
  colorMode(HSB)
  background(50, 10, 100, 0.05) //(209, 17, 100) //(0, 0, 10)
  angleMode(DEGREES)
  noiseDetail(2, 0.45) ///////////////////////////////////////////////////
  frameRate(24)
  // createLoop({ duration: 15, gif: true})

  // seed
  let seedLil = random()
  let seedBig = floor(seedLil * 1000000)
  noiseSeed(seedBig)
  randomSeed(seedBig)
  console.log(`big seed: ${seedBig}, lil seed: ${seedLil}`)

  // cache the noise coords + noisevals in slices[theta[x,y,z,noiseVal]]
  // (sliceTotal = 360 so set theta increment to 1)
  samples = 1500
  for (let theta = 0; theta < 360; theta += 1) {
    for (let i = 0; i < samples; i++) {
      let r1 = sqrt(random(0, 0.25))
      let phi = random(0, 360)
      let x = (r0 + r1 * cos(phi)) * sin(theta)
      let y = r1 * sin(phi) + 2
      let z = (r0 + r1 * cos(phi)) * cos(theta)
      let noiseVal = noise(x, y, z)
      sliceData.push([x, y, z, noiseVal])
      if (i == samples - 1) {
        slices[theta] = sliceData
      }
    }
    sliceData = []
  }
}

function draw() {
  if (tick == 360) createLoop({ duration: 15, gif: true })
  scale(2.5)

  translate(-unit * 14, -unit * 28, unit * 18)
  rotateY(91 - tick)
  noStroke()

  // # of frames of animation = sliceTotal
  sliceData = slices[tick % sliceTotal]
  for (let i = 0; i < samples; i++) {
    let x = sliceData[i][0] * unit * 14
    let y = sliceData[i][1] * unit * 14
    let z = sliceData[i][2] * unit * 14
    push()
    translate(x, y, z)
    noiseVal = sliceData[i][3]
    if (noiseVal > 0.909) {
      if (blend) {
        fill(blendColor(palBlend, 1))
        stroke(blendColor(palBlend, 1))
      } else {
        fill(pal[10])
        stroke(pal[10])
      }
    } else if (noiseVal > 0.8181) {
      if (blend) {
        fill(blendColor(palBlend, 0.9))
        stroke(blendColor(palBlend, 0.9))
      } else {
        fill(pal[9])
        stroke(pal[9])
      }
    } else if (noiseVal > 0.7272) {
      if (blend) {
        fill(blendColor(palBlend, 0.8))
        stroke(blendColor(palBlend, 0.8))
      } else {
        fill(pal[8])
        stroke(pal[8])
      }
    } else if (noiseVal > 0.6363) {
      if (blend) {
        fill(blendColor(palBlend, 0.7))
        stroke(blendColor(palBlend, 0.7))
      } else {
        fill(pal[7])
        stroke(pal[7])
      }
    } else if (noiseVal > 0.5454) {
      if (blend) {
        fill(blendColor(palBlend, 0.6))
        stroke(blendColor(palBlend, 0.6))
      } else {
        fill(pal[6])
        stroke(pal[6])
      }
    } else if (noiseVal > 0.4545) {
      if (blend) {
        fill(blendColor(palBlend, 0.5))
        stroke(blendColor(palBlend, 0.5))
      } else {
        fill(pal[5])
        stroke(pal[5])
      }
    } else if (noiseVal > 0.3636) {
      if (blend) {
        fill(blendColor(palBlend, 0.4))
        stroke(blendColor(palBlend, 0.4))
      } else {
        fill(pal[4])
        stroke(pal[4])
      }
    } else if (noiseVal > 0.2727) {
      if (blend) {
        fill(blendColor(palBlend, 0.3))
        stroke(blendColor(palBlend, 0.3))
      } else {
        fill(pal[3])
        stroke(pal[3])
      }
    } else if (noiseVal > 0.1818) {
      if (blend) {
        fill(blendColor(palBlend, 0.2))
        stroke(blendColor(palBlend, 0.2))
      } else {
        fill(pal[2])
        stroke(pal[2])
      }
    } else if (noiseVal > 0.0909) {
      if (blend) {
        fill(blendColor(palBlend, 0.1))
        stroke(blendColor(palBlend, 0.1))
      } else {
        fill(pal[1])
        stroke(pal[1])
      }
    } else {
      if (blend) {
        fill(blendColor(palBlend, 0))
        stroke(blendColor(palBlend, 0))
      } else {
        fill(pal[0])
        stroke(pal[0])
      }
    }

    // mark making ///////////////////////////////////////////////////////

    strokeWeight(1)
    // point(0, 0)

    // box(unit)

    // sphere(unit)

    // ellipse(0, 0, unit)
    // ellipse(
    //   5 * cos(map(sin(tick), -1, 1, 30, 60)),
    //   5 * sin(map(sin(tick), -1, 1, 60, 30)),
    //   2
    // )

    // line
    let p1 = [0, 0, 0]
    let p2 = [
      cos(map(sin(tick), -1, 1, 30, 60)),
      sin(map(sin(tick), -1, 1, 30, 60)),
      0, //cos(map(sin(tick), -1, 1, 0, 90)),
    ]
    line(...p1, ...p2)

    // points in a line
    // for (let t = 0; t < 1; t += 0.2) {
    //   // point(lerp(0, 3 * cos(tick * 10), t), lerp(0, 3 * sin(tick * 15), t))
    //   ellipse(
    //     lerp(0, 3 * cos(tick * 10), t),
    //     lerp(0, 3 * sin(tick * 15), t),
    //     unit / 2
    //   )
    // }

    // sphere or box in a line (slow)
    // for (let t = 0; t < 1; t += 0.2) {
    //   let coord = [
    //     lerp(0, cos(tick * 2 + random(5)), t),
    //     lerp(0, sin(tick * 3 + random(10)), t),
    //     lerp(0, cos(tick), t),
    //   ]
    //   translate(...coord)
    //   box(unit / 10)
    // }

    pop()
  }

  // increment
  tick++
  if (tick % sliceTotal == 0) console.log('looped +1')
  console.log(tick)
}

function blendColor(pal, t) {
  return [
    lerp(pal[0][0], pal[1][0], t),
    lerp(pal[0][1], pal[1][1], t),
    lerp(pal[0][2], pal[1][2], t),
  ]
}

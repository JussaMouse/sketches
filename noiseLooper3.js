// take a circular slice of 3d noise space
// (a cross section of a torus) and view it as a 2d animation
let pal = [
  [159, 100, 48],
  [63, 55, 98],
  [13, 99, 65],
  [155, 99, 100],
  [31, 100, 100],
  [43, 100, 100],
  [179, 82, 20],
  [349, 91, 100],
  [350, 48, 100],
  [110, 89, 88],
]
let r0 = 1.5
let slices = []
let sliceData = []
let sliceTotal = 360
let tick = 0
let wid = 1000
let hei = 600
let unit
wid < hei ? (unit = wid / 100) : (unit = hei / 100)

function setup() {
  createCanvas(wid, hei, WEBGL)
  colorMode(HSB)
  angleMode(DEGREES)
  noiseDetail(8, 0.425)
  // frameRate(60)
  // createLoop({ duration: 6, gif: true })
  // noiseSeed(0)

  // cache the noise coords + noisevals in slices[theta[x,y,z,noiseVal]]
  // (sliceTotal = 360 so set theta increment to 1)
  for (let theta = 0; theta < 360; theta += 1) {
    for (let i = 0; i < 10000; i++) {
      let r1 = random(0, 1)
      let phi = random(0, 360)
      let x = (r0 + r1 * cos(phi)) * sin(theta) + 2
      let y = r1 * sin(phi) + 1
      let z = (r0 + r1 * cos(phi)) * cos(theta)
      let noiseVal = noise(x, y, z)
      sliceData.push([x, y, z, noiseVal])
      if (i == 9999) {
        slices[theta] = sliceData
      }
    }
    sliceData = []
  }
}

function draw() {
  background(50, 10, 100)
  translate(-width, -height * 0.85, 0)
  rotateY(90 - tick)
  orbitControl(4, 4)
  noStroke()

  // # of frames of animation = sliceTotal
  sliceData = slices[tick % sliceTotal]
  for (let i = 0; i < 10000; i++) {
    let x = sliceData[i][0] * unit * 120
    let y = sliceData[i][1] * unit * 120
    let z = sliceData[i][2] * unit * 120
    push()
    translate(x, y, z)
    noiseVal = sliceData[i][3]
    if (noiseVal > 0.9) {
      fill(pal[9])
    } else if (noiseVal > 0.8) {
      fill(pal[8])
    } else if (noiseVal > 0.7) {
      fill(pal[7])
    } else if (noiseVal > 0.6) {
      fill(pal[6])
    } else if (noiseVal > 0.5) {
      fill(pal[5])
    } else if (noiseVal > 0.4) {
      fill(pal[4])
    } else if (noiseVal > 0.3) {
      fill(pal[3])
    } else if (noiseVal > 0.2) {
      fill(pal[2])
    } else if (noiseVal > 0.1) {
      fill(pal[1])
    } else fill(pal[0])

    sphere(unit * 6)
    pop()
  }

  stroke('red')
  line(0, 0, 0, 100, 0, 0)
  stroke('green')
  line(0, 0, 0, 0, 100, 0)
  stroke('blue')
  line(0, 0, 0, 0, 0, 100)

  // increment
  tick++
}

// function blendColor(pal, t) {
//   return [
//     lerp(pal[0][0], pal[1][0], t),
//     lerp(pal[0][1], pal[1][1], t),
//     lerp(pal[0][2], pal[1][2], t),
//   ]
// }

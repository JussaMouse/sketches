// take a circular slice of 3d noise space
// (a cross section of a torus) and view it as a 2d animation
let palHsb = [
  // [0, 0, 100],
  // [0, 0, 0],
  [190, 46, 100],
  [138, 100, 10],
]
let r0 = 0.5
let slices = []
let sliceData = []
let sliceTotal = 360
let tick = 0
let wid = 1000 // window.innerWidth
let hei = 600 // window.innerHeight
let unit
wid < hei ? (unit = wid / 100) : (unit = hei / 100)

function setup() {
  createCanvas(wid, hei, WEBGL)
  colorMode(HSB)
  angleMode(DEGREES)
  noiseDetail(3, 0.55)
  frameRate(6)
  // createLoop({ duration: 18, gif: true })
  // noiseSeed(0)

  // cache the noise coords + noisevals in slices[theta[x,y,z,noiseVal]]
  // (sliceTotal = 360 so set theta increment to 1)
  for (let theta = 0; theta < 360; theta += 1) {
    for (let i = 0; i < 10000; i++) {
      let r1 = random(0, 0.25)
      let phi = random(0, 360)
      let x = (r0 + r1 * cos(phi)) * sin(theta)
      let y = r1 * sin(phi) + 2
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
  translate(-unit * 8, -unit * 28, unit * 75)
  rotateY(91 - tick)
  noStroke()

  // # of frames of animation = sliceTotal
  sliceData = slices[tick % sliceTotal]
  for (let i = 0; i < 10000; i++) {
    let x = sliceData[i][0] * unit * 14
    let y = sliceData[i][1] * unit * 14
    let z = sliceData[i][2] * unit * 14
    push()
    translate(x, y, z)
    noiseVal = sliceData[i][3]

    if (noiseVal > 0.8) {
      fill(blendColor(palHsb, 1))
    } else if (noiseVal > 0.7) {
      fill(blendColor(palHsb, 0.9))
    } else if (noiseVal > 0.6) {
      fill(blendColor(palHsb, 0.8))
    } else if (noiseVal > 0.5) {
      fill(blendColor(palHsb, 0.7))
    } else if (noiseVal > 0.4) {
      fill(blendColor(palHsb, 0.6))
    } else if (noiseVal > 0.3) {
      fill(blendColor(palHsb, 0.5))
    } else if (noiseVal > 0.2) {
      fill(blendColor(palHsb, 0.4))
    } else if (noiseVal > 0.1) {
      fill(blendColor(palHsb, 0.2))
    } else fill(blendColor(palHsb, 0))

    // mark making ///////////////////////////////////////////////////////
    sphere(unit * 2)
    pop()
  }

  // increment
  tick++
  if (tick % sliceTotal == 0) console.log('looped +1')
}

function blendColor(pal, t) {
  return [
    lerp(pal[0][0], pal[1][0], t),
    lerp(pal[0][1], pal[1][1], t),
    lerp(pal[0][2], pal[1][2], t),
  ]
}

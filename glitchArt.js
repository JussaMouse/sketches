const pal = [
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [178, 206, 178],
  [228, 215, 140],
  [127, 179, 233],
  [233, 194, 199],
  [204, 165, 76],
  [176, 234, 255],
]

let flip = false

let rands = []
for (let i = 0; i < 300; i++) {
  rands[i] = Math.random()
}

function setup() {
  createCanvas(800, 600)
  angleMode(DEGREES)
  // frameRate(2)
  background(pal[0])
  blendMode(BLEND)
  // createLoop({ duration: 4.5, gif: true })
}

function draw() {
  // if (frameCount % 4 == 0) flip = !flip
  // if (flip) blendMode(HARD_LIGHT)
  // else blendMode(SOFT_LIGHT)

  scale(0.5)
  translate(width, height)
  // translate(width * 0.5, height * 0.5)
  stroke(pal[1])
  fill(...pal[8], 100)
  rect(-width * 0.1, -height * 0.2, width * 0.2, height * 0.4)
  for (let i = 0; i < 300; i++) {
    noFill()
    strokeWeight(1)
    stroke(...pal[floor(rands[i] * pal.length) % 12], 100)
    let k = 1 - i / 100

    push()
    // rotate(150)
    bezier(
      (-width * sin(frameCount * 4)) / 10,
      (-height * cos(frameCount * 4)) / 5,
      width * (cos(i) * k + rands[i]),
      -height * (sin(i) * k + rands[i]),
      -width * (cos(i) * k + rands[i]),
      height * (sin(i) * k + rands[i]),
      (width * sin((frameCount + 90) * 4)) / 10,
      (height * cos((frameCount + 90) * 4)) / 5
    )
    rotate(-150)
    translate(width * 0.39, 0)
    pop()
  }
}

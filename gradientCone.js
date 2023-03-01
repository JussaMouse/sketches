const pal = [
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [204, 165, 76],
  [228, 215, 140],
  [178, 206, 178],
  [127, 179, 233],
  [233, 194, 199],
  [176, 234, 255],
]

let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(20)
  noStroke()
  rotate(PI / 2)
  translate(height * 0.4, -width * 0.5)
  let len = height * 0.5

  for (let n = 0; n < 10; n++) {
    let amp = 200 - n * 20
    let dotSize = 100 - n * 10

    for (let i = 0; i < len; i++) {
      let x = i
      let y = (i / 200) * amp * sin(tick + i)
      let newColor = [
        map(i, 0, len, pal[n][0], pal[n + 1][0]),
        map(i, 0, len, pal[n][1], pal[n + 1][1]),
        map(i, 0, len, pal[n][2], pal[n + 1][2]),
      ]
      fill(newColor)
      ellipse(x, y, dotSize)
    }
  }
  tick += 0.01
}

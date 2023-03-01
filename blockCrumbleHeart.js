const pal = [
  [7, 13, 33],
  [6, 43, 87],
  [43, 70, 63],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [178, 206, 178],
  [228, 215, 140],
  [233, 194, 199],
  [127, 179, 233],
  [204, 165, 76],
  [176, 234, 255],
]

let heart = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  noiseSeed(33232)
  // createLoop({ duration: 2, gif: true })
}

function draw() {
  background(20)
  noStroke()
  let u
  width > height ? (u = floor(height / 11)) : (u = floor(width / 11))
  translate(u, height - u)
  for (let n = 0; n < 13; n++) {
    let heightMachine = floor((sin(millis() / 4 + n * 3) + noise(n + millis() / 100)) * 5) + 4
    if (heightMachine > 9) heightMachine = 9
    for (let i = 0; i < heightMachine; i++) {
      fill(pal[i] || pal[11])
      if (heart[i][n]) rect(u * n, -u * i, u, -u)
    }
  }
}

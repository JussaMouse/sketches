const pal = [
  [7, 13, 33],
  [6, 43, 87],
  [34, 79, 95],
  [38, 88, 132],
  [111, 155, 135],
  [204, 165, 76],
  [228, 215, 140],
  [127, 179, 233],
  [233, 194, 199],
  [176, 234, 255],
]
let n = 0
let randos = []
for (let i = 0; i < 1000; i++) {
  randos[i] = Math.random()
}
let tPressed = 0
let big = false
let up = true

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(20)
}

function draw() {
  noStroke()
  if (mouseIsPressed && tPressed < 300) {
    translate(mouseX, mouseY)
    for (let i = 0; i < 360; i++) {
      let x = 10 * cos(i)
      let y = 10 * sin(i)
      let newcolor
      if (up) {
        newColor = [
          map(tPressed, 0, 300, pal[n % 10][0], pal[(n + 2) % 10][0]),
          map(tPressed, 0, 300, pal[n % 10][1], pal[(n + 2) % 10][1]),
          map(tPressed, 0, 300, pal[n % 10][2], pal[(n + 2) % 10][2]),
        ]
      } else {
        newColor = [
          map(tPressed, 0, 300, pal[(n + 2) % 10][0], pal[n % 10][0]),
          map(tPressed, 0, 300, pal[(n + 2) % 10][1], pal[n % 10][1]),
          map(tPressed, 0, 300, pal[(n + 2) % 10][2], pal[n % 10][2]),
        ]
      }
      fill(newColor)
      ellipse(x, y, big ? random(100, 200) : random(10, 15))
      tPressed += 0.005
    }
  }
}

function mouseReleased() {
  tPressed = 0
}

function keyPressed() {
  if (keyCode === SHIFT) {
    big = true
  }
  if (keyCode === UP_ARROW) {
    up = true
  }
  if (keyCode === DOWN_ARROW) {
    up = false
  }

  if (keyCode === 48) {
    n = 0
    // jump += 80
  }
  if (keyCode === 49) {
    n = 1
    // jump += 80
  }
  if (keyCode === 50) {
    n = 2
    // jump += 80
  }
  if (keyCode === 51) {
    n = 3
    // jump += 80
  }
  if (keyCode === 52) {
    n = 4
    // jump += 80
  }
  if (keyCode === 53) {
    n = 5
    // jump += 80
  }
  if (keyCode === 54) {
    n = 6
    // jump += 80
  }
  if (keyCode === 55) {
    n = 7
    // jump += 80
  }
  if (keyCode === 56) {
    n = 8
    // jump += 80
  }
  if (keyCode === 57) {
    n = 9
    // jump += 80
  }
}

function keyReleased() {
  if (big) {
    big = false
  }
}

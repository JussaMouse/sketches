palA = [
  [7, 13, 33],
  [34, 79, 95],
  [0, 109, 30],
  [228, 215, 140],
  [127, 179, 233],
  [105, 151, 195],
  [204, 125, 0],
  [116, 54, 75],
  [203, 58, 74],
  [111, 155, 135],
  [147, 173, 181],
  [105, 0, 1],
  [27, 132, 140],
  [135, 56, 0],
  [94, 88, 81],
  [10, 109, 144],
]

palB = [
  [121, 9, 73],
  [0, 65, 10],
  [38, 88, 132],
  [233, 194, 199],
  [178, 206, 178],
  [176, 234, 255],
  [130, 58, 28],
  [132, 107, 147],
  [245, 166, 118],
  [127, 152, 149],
  [34, 40, 31],
  [255, 123, 35],
  [130, 157, 191],
  [65, 42, 25],
  [123, 134, 153],
  [54, 110, 143],
]

// extra (gold) [204, 165, 76]

let randos = []
for (let i = 0; i < 100000; i++) {
  randos[i] = Math.random()
}
let randoIndex = 0
let r = 20
let a = 0
let tPressed = 0
let n = 0
let big = false
let dir = 'up'

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(255)
  colorMode(RGB)
}

function draw() {
  noStroke()

  if (mouseIsPressed) {
    getNewColor(n)
    fill(newColor)

    push()
    translate(mouseX, mouseY)

    beginShape()
    for (let i = 0; i < 3; i++) {
      a += randos[i + randoIndex] * 120
      let x = r * cos(a)
      let y = r * sin(a)
      vertex(x, y)
      randoIndex++
    }
    endShape(CLOSE)

    tPressed++
    pop()
  }
  fill(255)

  rect(0, 0, 30, 30)
  fill(10)
  text(`${n % 16}`, 10, 20)

  function getNewColor(n) {
    if (dir === 'up') {
      newColor = [
        map(mouseY, height, 0, palA[n][0], palB[n][0]),
        map(mouseY, height, 0, palA[n][1], palB[n][1]),
        map(mouseY, height, 0, palA[n][2], palB[n][2]),
      ]
    } else if (dir === 'down') {
      newColor = [
        map(mouseY, 0, height, palA[n][0], palB[n][0]),
        map(mouseY, 0, height, palA[n][1], palB[n][1]),
        map(mouseY, 0, height, palA[n][2], palB[n][2]),
      ]
    } else if (dir === 'right') {
      newColor = [
        map(mouseX, 0, width, palA[n][0], palB[n][0]),
        map(mouseX, 0, width, palA[n][1], palB[n][1]),
        map(mouseX, 0, width, palA[n][2], palB[n][2]),
      ]
    } else {
      newColor = [
        map(mouseX, width, 0, palA[n][0], palB[n][0]),
        map(mouseX, width, 0, palA[n][1], palB[n][1]),
        map(mouseX, width, 0, palA[n][2], palB[n][2]),
      ]
    }
    return newColor
  }
}

function mouseReleased() {
  a = 0
  if (randoIndex > 99999) randoIndex = 0
  tPressed = 0
}

function keyPressed() {
  if (keyCode === SHIFT) {
    r = 200
  }
  if (keyCode === UP_ARROW) {
    dir = 'up'
  }
  if (keyCode === DOWN_ARROW) {
    dir = 'down'
  }
  if (keyCode === LEFT_ARROW) {
    dir = 'left'
  }
  if (keyCode === RIGHT_ARROW) {
    dir = 'right'
  }
  if (keyCode === 32) {
    // 32 = space key
    n = (n + 1) % 16
  }
  // if (keyCode === 48) {
  //   n = 0
  // }
  // if (keyCode === 49) {
  //   n = 1
  // }
  // if (keyCode === 50) {
  //   n = 2
  // }
  // if (keyCode === 51) {
  //   n = 3
  // }
  // if (keyCode === 52) {
  //   n = 4
  // }
  // if (keyCode === 53) {
  //   n = 5
  // }
  // if (keyCode === 54) {
  //   n = 6
  // }
  // if (keyCode === 55) {
  //   n = 7
  // }
  // if (keyCode === 56) {
  //   n = 8
  // }
  // if (keyCode === 57) {
  //   n = 9
  // }
}

function keyReleased() {
  if (r === 200) {
    r = 20
  }
}

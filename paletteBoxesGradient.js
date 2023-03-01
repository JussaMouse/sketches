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

let up = true

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
  colorMode(RGB)
}

function draw() {
  noStroke()
  let u = width / palA.length
  for (let n = 0; n < height; n += 5) {
    for (let i = 0; i < palA.length; i++) {
      if (up) {
        newColor = [
          map(n, 0, height, palA[i][0], palB[i][0]),
          map(n, 0, height, palA[i][1], palB[i][1]),
          map(n, 0, height, palA[i][2], palB[i][2]),
        ]
      } else {
        newColor = [
          map(n, height, 0, palA[i][0], palB[i][0]),
          map(n, height, 0, palA[i][1], palB[i][1]),
          map(n, height, 0, palA[i][2], palB[i][2]),
        ]
      }
      fill(newColor)
      rect(i * u, n, u, 5)
      if (n === 25) {
        fill(255)
        text(`${i}`, i * u + 20, n)
      }
    }
  }
}
function mouseClicked() {
  up = !up
}

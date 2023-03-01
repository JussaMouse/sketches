const pal = [
  [22, 71, 130],
  [2, 137, 178],
  [254, 74, 117],
  [14, 70, 67],
  [18, 41, 47],
  [252, 15, 38],
  [103, 5, 6],
  [62, 4, 3],
  [13, 9, 7],
  [238, 204, 165],
  [65, 0, 10],
  [205, 46, 87],
  [117, 76, 65],
  [18, 49, 53],
  [21, 23, 22],
  [11, 222, 179],
  [31, 2, 44],
  [200, 129, 40],
  [76, 125, 166],
  [118, 0, 131],
  [4, 30, 30],
  [171, 240, 217],
  [3, 72, 48],
  [158, 82, 146],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(20)
}

function draw() {
  translate(0, height / 2)
  let u = width / pal.length
  for (let i = 0; i < pal.length; i++) {
    fill(pal[i])
    rect(i * u, 0, u, -100)
  }
}

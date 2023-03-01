let tick = 0

const palDusk = [
  [25, 27, 13],
  [47, 5, 0],
  [110, 52, 35],
  [124, 81, 70],
  [158, 84, 52],
  [194, 123, 3],
  [228, 188, 91],
  [166, 0, 4],
  [127, 184, 79],
  [118, 157, 158],
]

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  background(20)
  noiseSeed(0)
  // createLoop({duration:8, gif:true})
}

function draw() {
  shell(200, height / 2 - 100, 15 + noise(tick) * 3, [...palDusk[9], 30])
  shell(500, height / 2 + 200, 30 + noise(tick) * 3, [...palDusk[8], 10])
  tick += 0.1
}
function shell(x, y, size, color) {
  push()
  translate(x, y)
  if (tick < size) {
    for (let i = 0; i < 360; i++) {
      let x = tick * 10 * cos(i)
      let y = tick * 10 * sin(i)
      // x0, y0, length, angle, color
      mark(x, y, tick * sin(frameCount), (i * tick) / 1000, color)
    }
  }
  pop()
}

function mark(x0, y0, length, angle, color) {
  push()
  translate(x0, y0)
  let x1 = length * cos(angle)
  let y1 = -1 * length * sin(angle)
  stroke(color)
  line(0, 0, x1, y1)
  pop()
}

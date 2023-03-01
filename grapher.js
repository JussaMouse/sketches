let xMax = 500
let yMax = 500
let xTickSmall = 10
let yTickSmall = 10
let xTickBig = 100
let yTickBig = 100
let wid = xMax * 2 + 200
let hei = yMax * 2 + 200

function setup() {
  createCanvas(wid, hei)
  background(255)
  angleMode(DEGREES)

  // draw graph lines
  translate(wid / 2, hei / 2)
  stroke(225)
  strokeWeight(1)
  let numLines = xMax / xTickSmall
  for (let i = 1; i < numLines; i++) {
    line(i * xTickSmall, -yMax, i * xTickSmall, yMax)
    line(-i * xTickSmall, -yMax, -i * xTickSmall, yMax)
  }
  numLines = yMax / yTickSmall
  for (let i = 1; i < numLines; i++) {
    line(-xMax, i * yTickSmall, xMax, i * yTickSmall)
    line(-xMax, -i * yTickSmall, xMax, -i * yTickSmall)
  }

  // draw axes and graph border
  noFill()
  stroke(100)
  strokeWeight(2)
  rect(-xMax, -yMax, xMax * 2, yMax * 2)
  line(-xMax, 0, xMax, 0)
  line(0, -yMax, 0, yMax)

  // draw big ticks
  numLines = xMax / xTickBig
  for (let i = 1; i < numLines; i++) {
    line(i * xTickBig, -5, i * xTickBig, 5)
    line(-i * xTickBig, -5, -i * xTickBig, 5)
  }
  numLines = yMax / yTickBig
  for (let i = 1; i < numLines; i++) {
    line(-5, i * yTickBig, 5, i * yTickBig)
    line(-5, -i * yTickBig, 5, -i * yTickBig)
  }
}

function draw() {
  // function to plot: ////////////////////////////////////////
  function f(x) {
    return (sin(2 * x) + sin(x / 2)) * 100
  }

  push()
  translate(wid / 2, hei / 2)
  stroke(255, 0, 0)
  let yVals = []
  for (let x = -xMax; x < xMax; x++) {
    point(x, f(x))
    yVals[x + xMax] = f(x)
  }
  pop()

  fill(10)
  noStroke()
  text(
    `max: ${yVals.indexOf(Math.min(...yVals)) - xMax}, ${
      Math.min(...yVals).toFixed(1) * -1
    }`,
    200,
    50
  )
  text(
    `min: ${yVals.indexOf(Math.max(...yVals)) - xMax}, -${Math.max(
      ...yVals
    ).toFixed(1)}`,
    400,
    50
  )
  fill(255)
  rect(600, 20, 100, 40)
  fill(10)
  text(`mouse: ${mouseX - wid / 2}, ${(mouseY - hei / 2) * -1}`, 600, 50)
}

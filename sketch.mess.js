/* for dot waves */
// dotX = 200
// dotY = 300

function setup() {
  createCanvas(1000, 600)
  background(255, 250, 245)
  /* for curve waves */
  // x = []
  // y = []
  // pointCount = 6
  // for (i = 0; i < pointCount; i++) {
  //   x[i] = 200 * i + 200
  //   y[i] = sin(x[i]) * -100 + 300
  // }
  // stroke(20)
  // strokeWeight(3)
  // curve(x[0], y[0], x[0], y[0], x[1], y[1], x[2], y[2], x[3], y[3])
  // for (i = 0; i < x.length; i++) console.log(x[i], y[i])
}

function draw() {
  /* for dot waves */
  stroke(20)
  strokeWeight(random() * 5 + 5)
  if (dotX < 801) point(dotX, dotY)
  dotX += 1
  dotY = 100 * sin(dotX * 100) + 300

  /* for curve waves */
  strokeWeight(3)
  for (i = 0; i < pointCount; i++) {
    x[i] = 100 * i + 100
    y[i] = sin(x[i]) * -100 + 300
  }
  curve(x[0], y[0], x[1], y[1], x[2], y[2], x[3], y[3])
}

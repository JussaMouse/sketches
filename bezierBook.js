let t = 0
let cubicPts = [
  [110, 150],
  [25, 190],
  [210, 250],
  [210, 30],
]

// set a to 0, 1, or 2. those correspond to the x, y, and z component of the curve
// quadratic bezier //////////////////////////////////////////////////////
function bez2(t, a, pts) {
  let t2 = t * t
  let mt = 1 - t
  let mt2 = mt * mt
  return pts[0][a] * mt2 + pts[1][a] * pts2 * mt * t + pts[2][a] * t2
}

// cubic bezier //////////////////////////////////////////////////////////
function bez3(t, a, pts) {
  let t2 = t * t
  let t3 = t2 * t
  let mt = 1 - t
  let mt2 = mt * mt
  let mt3 = mt2 * mt
  return (
    pts[0][a] * mt3 +
    pts[1][a] * 3 * mt2 * t +
    pts[2][a] * 3 * mt * t2 +
    pts[3][a] * t3
  )
}
// plot bez3 (use in draw())
// for (let t = 0; t < 1; t += 0.005) {
//   let x = bez3(t, 0, cubicPts)
//   let y = bez3(t, 1, cubicPts)
//   ellipse(x, y, 3)
// }

// de casteljau's algorithm //////////////////////////////////////////////
// point a = pts[0] = [x, y], point b = pts[1]...
function deCasteljau(pts, t) {
  if (pts.length == 1) {
    ellipse(...pts[0], 5)
  } else {
    newPoints = []
    for (let i = 0; i < pts.length - 1; i++) {
      let x = (1 - t) * pts[i][0] + t * pts[i + 1][0]
      let y = (1 - t) * pts[i][1] + t * pts[i + 1][1]
      newPoints[i] = [x, y]
    }
    deCasteljau(newPoints, t)
  }
}
// plot de casteljau (use in draw())
// for (let t = 0; t < 1; t += 0.005) {
//   deCasteljau(cubicPts, t)
// }

// flatten a curve ///////////////////////////////////////////////////////
// (reduce to a series of line segments)
function flattenCurve(curve, segmentCount) {
  let step = 1 / segmentCount
  coordinates = [[curve(0, 0, cubicPts), curve(0, 1, cubicPts)]]
  for (let i = 1; i < segmentCount; i++) {
    t = i * step
    coordinates.push([curve(t, 0, cubicPts), curve(t, 1, cubicPts)])
  }
  return coordinates
}
// draw the line segments (use in draw())
// function drawFlattenedCurve(curve, segmentCount) {
//   let coordinates = flattenCurve(curve, segmentCount)
//   let coord = coordinates[0]
//   let coord2
//   for (i = 1; i < coordinates.length; i++) {
//     coord2 = coordinates[i]
//     line(...coord, ...coord2)
//     coord = coord2
//   }
// }
// drawFlattenedCurve(bez3, 25)

function setup() {
  createCanvas(500, 500)
  background(255)
}

function draw() {
  stroke(10)
  fill(10)
  for (let t = 0; t < 1; t += 0.125) {
    deCasteljau(cubicPts, t)
  }

  // lines between a,b,c,d points:
  // line(cubicPts[0][0], cubicPts[0][1], cubicPts[1][0], cubicPts[1][1])
  // line(cubicPts[1][0], cubicPts[1][1], cubicPts[2][0], cubicPts[2][1])
  // line(cubicPts[2][0], cubicPts[2][1], cubicPts[3][0], cubicPts[3][1])
  // circles over a, b, c, d points:
  // fill(255, 0, 0)
  // ellipse(cubicPts[0][0], cubicPts[0][1], 15)
  // fill(0, 255, 0)
  // ellipse(cubicPts[1][0], cubicPts[1][1], 15)
  // fill(0, 0, 255)
  // ellipse(cubicPts[2][0], cubicPts[2][1], 15)
  // fill(255, 255, 0)
  // ellipse(cubicPts[3][0], cubicPts[3][1], 15)
}

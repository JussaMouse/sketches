let t = 0
let points = {
  a: [-100, 100, 0],
  b: [200, -100, 100],
  c: [0, 100, -500],
  d: [-100, -100, 100],
}

function computeBezier(t, a, b, c, d) {
  return (
    a * (1 - t) ** 3 +
    3 * b * (1 - t) ** 2 * t +
    3 * c * (1 - t) * t ** 2 +
    d * t ** 3
  )
}

function computeBezierDerivative(t, a, b, c, d) {
  a = 3 * (b - a)
  b = 3 * (c - b)
  c = 3 * (d - c)
  return a * (1 - t) ** 2 + 2 * b * (1 - t) * t + c * t ** 2
}

function tangent(t) {
  let dx = computeBezier(t)
}

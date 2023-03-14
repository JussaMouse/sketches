function norm(value, min, max) {
  return (value - min) / (max - min)
}
function lerp(norm, min, max) {
  return (max - min) * norm + min
}
function remap(value, sourceMin, sourceMax, destMin, destMax) {
  var n = norm(value, sourceMin, sourceMax)
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
}

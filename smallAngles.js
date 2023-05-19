class Orient {
  constructor() {
    this.ui = createVector(1, 0, 0)
    this.uj = createVector(0, 1, 0)
    this.uk = createVector(0, 0, 1)
  }

  spin(phi) {
    this.ui = handleturn(this.ui, phi)
    this.uj = handleturn(this.uj, phi)
    this.uk = handleturn(this.uk, phi)
  }

  restore() {
    this.uk = this.ui.cross(this.uj)
    this.uj = this.uk.cross(this.ui)
    this.ui.normalize()
    this.uj.normalize()
    this.uk.normalize()
  }

  toOri(w) {
    const o = createVector()
    o.x = w.dot(this.ui)
    o.y = w.dot(this.uj)
    o.z = w.dot(this.uk)
    return o
  }

  toWorld(o) {
    w = createVector()
    w.x = this.ui.x * o.x + this.uj.x * o.y + this.uk.x * o.z
    w.y = this.ui.y * o.x + this.uj.y * o.y + this.uk.y * o.z
    w.z = this.ui.z * o.x + this.uj.z * o.y + this.uk.z * o.z
    return w
  }
}

function blendSwitch(bMode) {
  if (bMode == 0) {
    blendMode(BLEND)
  } else if (bMode == 1) {
    blendMode(ADD)
  } else if (bMode == 2) {
    blendMode(DARKEST)
  } else if (bMode == 3) {
    blendMode(LIGHTEST)
  } else if (bMode == 4) {
    blendMode(DIFFERENCE)
  } else if (bMode == 5) {
    blendMode(EXCLUSION)
  } else if (bMode == 6) {
    blendMode(MULTIPLY)
  } else if (bMode == 7) {
    blendMode(SCREEN)
  } else if (bMode == 8) {
    blendMode(BLEND)
  } else if (bMode == 9) {
    blendMode(REMOVE)
  } else if (bMode == 10) {
    blendMode(OVERLAY)
  } else if (bMode == 11) {
    blendMode(HARD_LIGHT)
  } else if (bMode == 12) {
    blendMode(SOFT_LIGHT)
  } else if (bMode == 13) {
    blendMode(DODGE)
  } else if (bMode == 14) {
    blendMode(BURN)
  } else {
    console.log("Invalid blend mode")
  }
}

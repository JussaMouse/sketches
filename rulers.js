/* rulers */
stroke(20)
line(0, 1, width, 1)
line(1, 0, 1, height)
tick = []
for (i = 0; i < width / 100; i++) {
  if (i === 0) tick[i] = 0
  else tick[i] = tick[i - 1] + 100
  line(tick[i], 0, tick[i], 10)
  line(0, tick[i], 10, tick[i])
}

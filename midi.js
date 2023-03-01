let myOutput

function setup() {
  createCanvas(400, 400)

  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err))
}

function onEnabled() {
  //WebMIDI Example Code:

  // Inputs
  WebMidi.inputs.forEach((input) => console.log(input.manufacturer, input.name))

  // Outputs
  WebMidi.outputs.forEach((output) =>
    console.log(output.manufacturer, output.name)
  )

  //But we can also grab the "first" input or output if we want

  console.log(WebMidi.outputs[0])
  console.log(WebMidi.inputs[0])

  //need to decalare this above as a global variable
  myOutput = WebMidi.outputs[0]
}

function draw() {
  background(220)
}

function mousePressed() {
  //Play a MIDI note
  //Give the note, and the MIDI channel
  //myOutput.playNote("C4", 1);

  //Note names also correspond to numbers
  //myOutput.playNote(60, 1);

  /*
  "C4" is the same as 60
  "C#4" is 61

    Take a look at the translations here:
    https://www.inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies
  */

  //You need to specify an 'off' as well as a 'on', like lifting up the piano key after pressing it
  //This can be pre-determined when we play the note, measured in milliseconds
  //This plays the piano sound in the example receive sketch
  //myOutput.playNote(61, 1, {duration: 100});

  //This changes the square color in the example receive sketch
  myOutput.playNote("D4", 1, { duration: 100 })

  //The above line is pressing the D4 key on a piano
  //On MIDI channel 1
  //For 100 milliseconds, and then releasing
}

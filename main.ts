input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 50; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
    generator1 = randint(0, 4)
    if (generator1 == 0) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (generator1 == 1) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (generator1 == 2) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (generator1 == 3) {
        strip1.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip1.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    generator1 = randint(0, 4)
    if (generator1 == 0) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (generator1 == 1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (generator1 == 2) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (generator1 == 3) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    generator2 = randint(0, 4)
    if (generator1 == 0) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (generator1 == 1) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (generator1 == 2) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (generator1 == 3) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip3.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    generator1 = randint(0, 4)
    if (generator1 == 0) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (generator1 == 1) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (generator1 == 2) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (generator1 == 3) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip4.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    generator1 = randint(0, 4)
    if (generator1 == 0) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (generator1 == 1) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (generator1 == 2) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (generator1 == 3) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip5.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
let generator2 = 0
let generator1 = 0
let strip5: neopixel.Strip = null
let strip4: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip1 = strip.range(0, 3)
strip2 = strip.range(3, 3)
strip3 = strip.range(6, 3)
strip4 = strip.range(9, 3)
strip5 = strip.range(12, 3)
strip1.showColor(neopixel.colors(NeoPixelColors.Red))
strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
strip3.showColor(neopixel.colors(NeoPixelColors.Green))
strip4.showColor(neopixel.colors(NeoPixelColors.Purple))
strip5.showColor(neopixel.colors(NeoPixelColors.Orange))

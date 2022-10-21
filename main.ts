let x = 0
let y = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (x < 4) {
            basic.clearScreen()
            led.plot(x, y - 1)
            basic.pause(500)
            x += 1
        }
        while (x > 0) {
            basic.clearScreen()
            led.plot(x, y - 1)
            basic.pause(500)
            x += -1
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        while (y < 4) {
            basic.clearScreen()
            led.plot(x - 1, y)
            basic.pause(500)
            y += 1
        }
        while (y > 0) {
            basic.clearScreen()
            led.plot(x - 1, y)
            basic.pause(500)
            y += -1
        }
    }
})

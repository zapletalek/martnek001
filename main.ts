let hlasitost = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    hlasitost = 50
})
input.onButtonPressed(Button.B, function () {
    hlasitost = 250
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . .
        . . # . .
        # # # . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        . . # . .
        # # # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # . # . .
        # . # . .
        # # # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        . # # # .
        . . . # .
        . . # # #
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.showString("MARTIN ZAPLETALEK")
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 E G C F - F - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A B C5 G C5 A G ", 120), music.PlaybackMode.UntilDone)
    music.setVolume(hlasitost)
})

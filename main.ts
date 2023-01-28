input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.EigthNote)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)
input.setSoundThreshold(SoundThreshold.Loud, 199)

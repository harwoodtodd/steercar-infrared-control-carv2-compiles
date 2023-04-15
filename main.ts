makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 0, 50)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 50, 50)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 100, 0)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 50, 50)
    basic.pause(200)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 100, 0)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 100, 0)
    basic.pause(300)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 100, 0)
    basic.pause(300)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Run, 0, 50)
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
makerbit.connectIrReceiver(DigitalPin.P8)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)

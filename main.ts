// Rock Paper Scissors
// 
// --> User picks one of the three. Use the A button to scroll, the B to select
// --> Computer picks a random option
// --> Compare. Say if you win, lose or tie.
// 
// A --> Add one to a counter. If counter is bigger than 3, counter goes back to one.
// If counter is one, show a rock
// If counter is two, show a paper
// If counter is three, show a scissors
// B --> Save the value in a variable
// Pick a random number from 1-3
// Display computer choice
// IF the computer and player are the same --> Tie
// Then say who wins or lose --> rock beats scissors, scissors beat paper, paper beats rock
input.onButtonPressed(Button.A, function () {
    User += 1
    if (User > 3) {
        User = 0
    }
    if (User == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (User == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Losses")
    basic.showString("" + (Loss))
    basic.showString("Ties")
    basic.showString("" + (Tie))
    basic.showString("Wins")
    basic.showString("" + (Win))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("-")
    Computer = randint(1, 3)
    if (Computer == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Computer == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (User == 1 && Computer == 1) {
        Tie += 1
        basic.showString("Tie")
    } else if (User == 1 && Computer == 2) {
        Loss += 1
        basic.showString("Lose")
    } else if (User == 1 && Computer == 3) {
        Win += 1
        basic.showString("Win")
    }
    if (User == 2 && Computer == 1) {
        Win += 1
        basic.showString("Win")
    } else if (User == 2 && Computer == 2) {
        Tie += 1
        basic.showString("Tie")
    } else if (User == 2 && Computer == 3) {
        Loss += 1
        basic.showString("Lose")
    }
    if (User == 3 && Computer == 1) {
        Loss += 1
        basic.showString("Lose")
    } else if (User == 3 && Computer == 2) {
        Win += 1
        basic.showString("Win")
    } else if (User == 3 && Computer == 3) {
        Tie += 1
        basic.showString("Tie")
    }
})
let Computer = 0
let User = 0
let Win = 0
let Tie = 0
let Loss = 0
basic.showString("A+B to end")
Loss = 0
Tie = 0
Win = 0
User = 1
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})

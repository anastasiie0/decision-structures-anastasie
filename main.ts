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
let User = 0
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

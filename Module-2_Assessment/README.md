# Star Wars Hangman

This is a hangman game with a Star Wars theme. The functions in the game are explained below.

## NewGame

This function resets the game when starting it up for the first time or after the previous game has ended. The function randomly selects a word from the 'word' array, and selects the corresponding photo from the images folder. Then it resets the relevant variables to their base states.

## refresh

This function refreshes the page after every action. To do this the function builds strings for how much of the word has been completed and how many letters have been guessed. Then it transmits that data along with the number of player wins and guesses remaining to the html file via the getElementById function.

## isdone

This function checks to see if the game is over by checking if either there are no guesses remaining, or if the player has correctly guessed all of the letters. If the game is over it sets the global variable 'done' to true.

## newGuess

This function takes in the pressed letter as a parameter, changes it to its capital form, and checks it against the guessed array to see if it has already been guessed. If it passes that test it is added to the guessed array and then checked to see if it is in the word. If so that location - and any other that also contain that letter - are changed from the underscore to the letter. If the letter is not in the array the numer of guesses goes down.

## onkeydown

This function is activated whenever a key is pressed. If the previous game had just ended it will reset the game, otherwise it will check to make sure the button pressed is a letter and if so it will pass it into the newGuess function and check if the game is over.
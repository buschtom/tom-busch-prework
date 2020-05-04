const words = ['VADER', 'LUKE', 'LEIA', 'HANSOLO', 'CHEWBACCA', 'ANAKIN', 'OBIWAN', 'DROID', 'STORMTROOPER', 'PADME'];
var ind;
var word;
var guesses;
var filepath;
var guessed_letters;
var guessed = [];
var word_arr = [];
var wins = 0;
var guessed_word;
var new_let;
var found_let;
var found;
var done = true;
var status;

function NewGame()
{
    //find new word
    ind = Math.floor(Math.random() * (words.length));
    word = words[ind];

    //set pic
    filepath = 'assets/images/' + word +'.jpg';
    $('.pic').html("<img src=" + filepath + " width='300'/>");

    //reset values
    guesses = 9;
    guessed = [];
    word_arr = [];
    done = false;



    //set blanks
    for (var i = 0; i < word.length; i++) {
        word_arr.push("_");
    }

    refresh();
}

function refresh()
{
    //build the word
    guessed_word = '';
    for (var i = 0; i < word.length; i++) {
        guessed_word = guessed_word+word_arr[i];
    }

    //build the guessed letters
    guessed_letters ='';
    for (var i = 0; i < guessed.length; i++) {
        guessed_letters = guessed_letters+guessed[i];
    }

    //refresh elements
    document.getElementById("h_wins").innerText = wins;
    document.getElementById("h_guessed_word").innerText = guessed_word;
    document.getElementById("h_guesses").innerText = guesses;
    document.getElementById("h_guessed_letters").innerText = guessed_letters;
}

var isdone = function()
{
    //done and the player lost
    if (guesses === 0)
    {
        done = true;
        return -1;
    }

    //not done
    for (var i = 0; i < word.length; i++)
    {
        if (word_arr[i]==='_')
        {
            done = false;
            return 0;
        }
    }

    //done and the player won
    done = true;
    wins++;
    return 1;
}

function newGuess(letter)
{
    new_let = letter.toUpperCase();
    //check if the letter has been guessed
    for (var j = 0; j< guessed.length; j++)
    {
        if(guessed[j] === new_let)
        {
            return;
        }
    }

    guessed.push(new_let);
    found = false;

    //check if the letter is in the word
    for (var i = 0; i < word.length; i++) {
        if (new_let === word[i])
        {
            word_arr[i] = new_let;
            found = true;
        }
    }

    //end if the letter was in the word, else subtract a guess
    if(found)
    {
        return;
    }
    else
    {
        guesses--;
    }
}

document.onkeydown = function(event) 
{   
    if(done) 
    {
        NewGame();
    } 
    else 
    {
        if(event.keyCode >= 65 && event.keyCode <= 90) 
        {
            newGuess(event.key);
            status = isdone();
            refresh();
        }
    }
}; 
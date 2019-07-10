let x=Math.random(100)+1;
let guess;
let guessnum;
console.log("Guess a number 1-100.");
//is this an output or input statement
while(x!=guess){
    guess = window.prompt("Enter your a guess: ");
    if(guess<x)
    {
        console.log('Your guess of '+guess+' is to low. Please try again :)');
    }
    else if(guess>x){
        console.log('Your guess of '+guess+' is to High. Please try again :)');
    }
    else{
        console.log('Good job!!! Your guess of '+guess+' is correct.');

    }
}

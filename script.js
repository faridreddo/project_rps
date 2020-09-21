/* trial script */

/*FOR ONE ROUND*/
        
let randomNumbers;
let computerChoice;
function computerGenerate(){
/*generate a number, numbers become choice*/
randomNumbers = Math.floor(Math.random() * 10);
/*to assign numbers generated to a string*/
if (randomNumbers <= 3){
    computerChoice = 'rock';
} else if (randomNumbers <= 6){
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}
}
computerGenerate();
console.log(randomNumbers);
console.log('bot\'s choice is: ' + computerChoice);

/*User Inputs (to be case insensitive)*/

let playerChoice;

function userAnswer(){
let userInput = prompt('rock paper or scissors?');
playerChoice = userInput.toLowerCase();
};

userAnswer();

console.log('your choice is: ' + playerChoice);

/*plays a single round,
take two parameters and returns strings that
declares the winner or loser*/
let win = 0;
let lose = 0;
    function playRound(a, b) {
        if(a == 'rock'){
            if (b == 'rock'){
                return 'issa draw!'
            }
            else if(b == 'scissors'){
                win++ ;
                return 'you win!'
            }
            else {
                lose++ ;
                return 'YOU LOSE!'
            }
        }
        else if(a == 'paper'){
            if (b == 'paper'){
                return 'issa draw!'
            }
            else if(b == 'rock'){
                win++ ;
                return 'you win!'
            }
            else {
                lose++ ;
                return 'YOU LOSE!'
            }
        }
        else if(a == 'scissors'){
            if (b == 'scissors'){
                return 'issa draw!'
            }
            else if(b == 'paper'){
                win++ ;
                return 'you win!'
            }
            else {
                lose++ ;
                return 'YOU LOSE!'
            }
        }
        else {
            return 'nope'
        }
    }
/* variable that stores playRound results */ 
let result = playRound(playerChoice, computerChoice);
console.log(result + "your wins: " + win + "your losses: " + lose);
    
    /* function to play 5 rounds, keep scores and reports the overall winner*/

    function game(){
        computerGenerate();
        userAnswer();
        playRound();

    }



        /* function to equate results to points */
        let score;
        function points(results){
            if (results == 'you win!'){
                score = 1;
            } else if (results == 'issa draw!'){
                score = 0;
            } else {
                score = -1;
            }

        }
        let totalPoints = points(result1);
        console.log('your score is: ' + totalPoints);
        /* if results == strings, ask user to input again*/ 

    function inputAgain(){
            if(typeof results == "string"){
                let results2 = prompt('rock paper or scissors?');
        let playerChoice2 = results2.toLowerCase();
            } else {
                alert('no more tries!')
            }
        }


    inputAgain();

            /* function to equate results to points */
        points(result2);
        totalPoints += result2;
        console.log('your score is: ' + score);

        let totalPoints = result1 + result2;
        console.log('your total now is: ' + totalPoints);
        
        /* win > 0 , lose < 0 */

        function endMessage(){
            if (totalPoints > 0){
                return 'YOU ARE THE RPS CHAMPION'
            } else if (totalPoints < 0){
                return 'BETTER LUCK NEXT TIME'
            } else {
                return 'wad is dis'
            }
        }
        
function getComputerChoice() {
    let number = Math.floor(Math.random()*3);

    switch (number) {
        case 0: 
            return 'Rock';
            break;
        case 1: 
            return 'Paper';
            break;
        case 2: 
            return 'Scissor';
            break;
        default:
            return
    }
}

// console.log(getComputerChoice());

const computerChoice = getComputerChoice();
console.log(computerChoice);

const gameArray = [
    {
        'P':'rock',
        'C':'rock',
        'result':'par'
    },
    {
        'P':'paper',
        'C':'paper',
        'result':'par'
    },
    {
        'P':'scissor',
        'C':'scissor',
        'result':'par'
    },
    {
        'P':'rock',
        'C':'scissor',
        'result':'win'
    },
    {
        'P':'paper',
        'C':'rock',
        'result':'win'
    },
    {
        'P':'scissor',
        'C':'paper',
        'result':'win'
    },
    {
        'P':'rock',
        'C':'paper',
        'result':'los'
    },
    {
        'P':'paper',
        'C':'scissor',
        'result':'los'
    },
    {
        'P':'scissor',
        'C':'rock',
        'result':'los'
    }
];


function outcome() {
    playerSelection = prompt('Rock, paper or scissor?','');

    let lowerComputerChoice = computerChoice.toLowerCase();
    let lowerPlayerSelection = playerSelection.toLowerCase();
    

    if (lowerPlayerSelection === lowerComputerChoice) {
        return `Pari! ${playerSelection} vs ${computerChoice}`;
    } else {
        for (let i=0; i < (gameArray.length); i++) {
            if (lowerPlayerSelection === gameArray[i].P && lowerComputerChoice === gameArray[i].C) {
                switch (gameArray[i].result) {
                    case 'win' :
                        return `You win! ${playerSelection} beats ${computerChoice}.`;
                        break;
                    case 'los' :
                        return `You lose! ${playerSelection} loses to ${computerChoice}.`;
                        break;
                };
            }
        }
    }
}

console.log(outcome()); 

const WINNING_MOVES = {
    "Rock": "Scissors",
    "Paper": "Rock",
    "Scissors": "Paper"
};

export default function getComputerMove() {
    const choices = Object.keys(WINNING_MOVES);
    return choices[Math.floor(Math.random() * choices.length)];
}

export const playMove = (playerMove) => {
    const computerMove = getComputerMove();
    const result = playerMove === computerMove ? "Tie" : 
                   WINNING_MOVES[playerMove] === computerMove ? "Win" : "Lose";
    return { result, computerMove, playerMove };
}

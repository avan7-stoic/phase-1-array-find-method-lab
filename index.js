// code your solution here
function superbowlWin(games){
    const winningYear = games.find(game=>game.result==="W");
    return winningYear ? winningYear.year : undefined;
}
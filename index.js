function calculateLevel(wins, losses) {
    let winBalance = wins - losses;
    let level = '';

    if (winBalance < 10) {
        level = 'Iron';
    } else if (winBalance >= 11 && winBalance <= 20) {
        level = 'Bronze';
    } else if (winBalance >= 21 && winBalance <= 50) {
        level = 'Silver';
    } else if (winBalance >= 51 && winBalance <= 80) {
        level = 'Gold';
    } else if (winBalance >= 81 && winBalance <= 90) {
        level = 'Diamond';
    } else if (winBalance >= 91 && winBalance <= 100) {
        level = 'Legendary';
    } else if (winBalance >= 101) {
        level = 'Immortal';
    }

    return `The Hero has a balance of ${winBalance} and is at the ${level} level`;
}

// Example of use:
console.log(calculateLevel(120, 10));

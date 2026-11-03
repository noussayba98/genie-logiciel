export function slotMachine(bet, result) {
    if (result[1] === result[2] && result[1] === result[0]) {
        if (result[0] === "$") {
            return bet * 20;
        }
        return bet * 5;
    }
    if (result[0] === result[1] || result[1] === result[2]) {
        return bet * 2;
    }
    return 0;
}
const dataString = 'Game 1: 4 red, 5 blue, 4 green; 7 red, 8 blue, 2 green; 9 blue, 6 red; 1 green, 3 red, 7 blue; 3 green, 7 red\n' +
    'Game 2: 20 blue, 12 green, 2 red; 1 red, 2 green, 20 blue; 1 red, 14 green, 17 blue; 7 green, 17 blue\n' +
    'Game 3: 3 green, 4 red; 10 red, 2 blue, 5 green; 9 red, 3 blue, 5 green\n' +
    'Game 4: 10 green, 1 blue, 3 red; 1 red, 12 green, 1 blue; 1 blue, 2 green; 4 green, 3 red\n' +
    'Game 5: 3 green, 8 red, 1 blue; 4 blue, 7 red, 3 green; 2 green, 2 blue, 13 red\n' +
    'Game 6: 1 green, 4 red, 2 blue; 9 blue, 1 red; 2 green, 4 blue; 4 red, 11 blue; 9 blue, 3 red\n' +
    'Game 7: 13 red, 18 green, 4 blue; 15 red, 5 blue, 14 green; 15 red, 11 green, 7 blue; 3 green, 3 red, 7 blue; 3 red, 5 blue, 9 green\n' +
    'Game 8: 1 red, 4 green, 4 blue; 15 red, 8 green; 6 green, 1 blue, 15 red; 6 blue, 15 green, 6 red; 2 red, 1 blue, 9 green\n' +
    'Game 9: 18 red, 8 green; 2 green, 18 red, 9 blue; 14 red, 2 blue, 10 green; 4 red, 2 green, 4 blue; 4 blue, 12 red, 9 green\n' +
    'Game 10: 4 green, 1 blue; 3 blue, 2 green, 12 red; 15 blue, 12 red, 2 green; 10 red, 8 green, 11 blue; 8 green, 10 blue, 10 red\n' +
    'Game 11: 5 blue, 7 red; 2 green, 1 blue, 12 red; 7 green, 8 red, 4 blue; 3 blue, 8 red; 6 green, 9 red, 3 blue; 11 green, 12 red\n' +
    'Game 12: 1 blue, 3 green; 3 red, 6 green; 2 green; 1 red, 6 green; 1 green, 3 red; 1 blue, 2 green, 2 red\n' +
    'Game 13: 3 blue, 12 red, 12 green; 5 green, 3 blue, 2 red; 3 green, 7 blue, 13 red; 4 green, 7 red; 3 green, 3 blue, 5 red\n' +
    'Game 14: 14 blue, 1 red, 6 green; 3 red, 9 blue; 5 green, 11 blue, 3 red\n' +
    'Game 15: 9 blue, 2 red, 5 green; 8 blue, 3 red, 6 green; 17 red, 2 green, 7 blue; 11 red, 2 green, 9 blue; 1 red, 4 green\n' +
    'Game 16: 2 green, 2 red; 3 red, 2 blue, 2 green; 5 red, 2 blue, 2 green; 2 red; 2 green, 7 blue, 4 red\n' +
    'Game 17: 8 blue, 6 green, 11 red; 5 red, 2 green, 2 blue; 4 green, 15 red, 10 blue; 6 blue, 2 red, 6 green\n' +
    'Game 18: 1 green, 11 blue, 1 red; 1 green, 1 blue, 4 red; 10 blue, 2 green; 3 green, 12 red; 4 green, 8 red, 5 blue; 13 blue, 4 red, 3 green\n' +
    'Game 19: 5 green, 3 blue, 5 red; 5 green, 15 blue, 10 red; 15 blue, 12 red, 1 green; 7 red, 5 green, 10 blue\n' +
    'Game 20: 4 red, 9 green, 9 blue; 5 red, 10 green, 10 blue; 3 blue, 11 green\n' +
    'Game 21: 13 blue, 9 green, 13 red; 1 blue, 11 green, 14 red; 14 blue, 8 red, 9 green\n' +
    'Game 22: 8 red, 12 blue, 6 green; 12 blue, 10 green, 4 red; 14 green, 16 blue, 3 red; 2 blue, 8 red, 5 green; 12 blue, 9 green, 9 red\n' +
    'Game 23: 9 red; 3 blue, 11 red; 2 red, 7 blue; 5 red, 4 blue, 1 green; 4 red; 7 blue, 12 red\n' +
    'Game 24: 5 green, 7 blue, 3 red; 5 green, 3 red, 13 blue; 11 red, 2 green, 4 blue; 11 blue, 1 green, 13 red; 3 green, 9 red, 5 blue; 1 green, 9 red, 17 blue\n' +
    'Game 25: 5 blue, 12 green, 4 red; 2 blue, 2 red, 9 green; 8 blue, 16 green, 4 red\n' +
    'Game 26: 7 blue, 2 green; 5 blue, 1 green; 1 red, 2 green; 8 blue, 1 green\n' +
    'Game 27: 1 blue, 4 red, 17 green; 3 red, 2 blue; 18 green, 1 blue; 3 red, 7 green; 1 green, 3 red, 3 blue\n' +
    'Game 28: 6 green, 1 blue, 7 red; 10 red, 9 green; 10 red, 9 green, 1 blue; 3 blue, 19 red; 12 red, 3 blue, 14 green\n' +
    'Game 29: 4 red, 7 green, 11 blue; 2 red, 3 green, 1 blue; 1 red, 5 blue, 18 green; 11 green, 4 red, 6 blue; 6 blue, 3 red, 11 green; 5 blue, 17 green, 2 red\n' +
    'Game 30: 1 red, 15 green, 1 blue; 2 blue, 1 red, 12 green; 6 red, 8 green, 1 blue; 2 blue, 4 red, 11 green; 2 blue, 5 green, 5 red\n' +
    'Game 31: 9 blue, 6 red, 7 green; 4 green, 2 red; 11 blue\n' +
    'Game 32: 15 green, 1 blue, 11 red; 1 blue, 7 red, 13 green; 2 blue, 9 green, 3 red; 2 blue, 13 red, 18 green\n' +
    'Game 33: 2 red, 2 green, 4 blue; 2 green, 7 blue, 4 red; 3 blue, 2 green\n' +
    'Game 34: 1 green, 3 red; 13 green; 2 red, 14 green; 2 blue, 14 green; 6 green, 3 red, 1 blue\n' +
    'Game 35: 2 blue; 8 blue, 3 green, 3 red; 15 blue, 2 red; 12 blue, 1 green; 3 blue, 2 green; 2 red, 8 blue\n' +
    'Game 36: 4 green, 1 red, 1 blue; 16 green, 3 red; 18 green, 4 red; 4 green\n' +
    'Game 37: 6 red, 1 blue, 3 green; 2 blue, 3 red, 2 green; 2 red, 1 blue, 9 green; 2 red, 8 green; 2 blue, 2 red; 1 red, 1 green, 1 blue\n' +
    'Game 38: 9 red, 1 green; 14 red, 1 green; 6 green, 3 red; 1 blue, 3 red, 5 green; 5 green, 12 red\n' +
    'Game 39: 13 blue, 2 red, 3 green; 5 green, 8 blue, 8 red; 11 blue, 7 green\n' +
    'Game 40: 1 green, 7 blue, 6 red; 4 green, 1 red, 5 blue; 7 blue, 2 red\n' +
    'Game 41: 12 red, 5 green, 6 blue; 12 blue, 7 red, 4 green; 7 green, 9 blue, 14 red; 1 green, 6 blue, 4 red; 1 blue, 6 red, 6 green\n' +
    'Game 42: 9 red, 2 blue, 11 green; 5 blue, 6 red, 7 green; 5 blue, 2 red, 3 green; 7 green, 7 blue, 1 red; 11 green, 12 blue, 4 red; 2 blue, 6 red, 10 green\n' +
    'Game 43: 8 green, 7 red, 7 blue; 7 red, 11 green, 2 blue; 17 red, 12 blue; 10 blue, 5 green, 3 red; 2 green, 4 red; 16 green, 10 red, 2 blue\n' +
    'Game 44: 6 blue, 16 green; 7 green, 4 blue, 6 red; 8 red, 5 blue, 7 green; 6 green, 6 red, 6 blue; 10 green, 1 red, 9 blue\n' +
    'Game 45: 10 blue, 4 green, 10 red; 5 green, 9 blue, 3 red; 8 blue, 9 green, 10 red; 7 green, 4 red, 3 blue; 2 blue, 5 green, 9 red\n' +
    'Game 46: 11 green, 1 blue, 3 red; 3 green, 4 blue, 5 red; 5 blue, 10 green, 3 red; 17 red, 4 blue, 5 green; 8 red, 1 blue, 6 green; 9 red, 9 green, 1 blue\n' +
    'Game 47: 2 blue, 16 green, 11 red; 1 blue, 7 green, 4 red; 1 green, 3 blue, 9 red; 2 blue, 8 green, 1 red; 14 red, 3 blue, 5 green\n' +
    'Game 48: 6 blue, 7 red; 2 green, 1 red, 1 blue; 2 green, 3 red, 2 blue; 5 blue, 8 red; 4 red, 5 green, 1 blue\n' +
    'Game 49: 7 green, 3 blue, 11 red; 5 green, 10 red, 8 blue; 6 green, 18 red; 7 green, 9 blue, 14 red; 5 green, 6 blue, 3 red\n' +
    'Game 50: 3 green, 1 red, 6 blue; 1 blue, 4 green, 13 red; 12 blue, 10 green, 3 red; 18 blue, 4 green, 14 red; 4 green, 6 blue, 7 red\n' +
    'Game 51: 2 green, 4 red; 1 green, 12 red; 1 blue, 12 red, 5 green; 1 blue, 9 red, 2 green\n' +
    'Game 52: 1 red, 2 green, 9 blue; 6 blue, 5 green, 3 red; 3 red, 8 blue, 4 green; 4 green, 1 blue, 4 red; 2 green, 5 blue; 2 red, 3 green, 6 blue\n' +
    'Game 53: 1 blue, 16 red; 8 red, 4 green; 2 green, 3 red; 2 green, 2 blue; 20 red, 4 green, 1 blue; 1 green, 15 red\n' +
    'Game 54: 1 red, 8 blue; 2 red, 1 green, 6 blue; 9 red, 9 blue\n' +
    'Game 55: 1 red, 6 green, 1 blue; 1 green, 1 red, 2 blue; 1 red, 5 blue; 1 green, 1 red; 2 green\n' +
    'Game 56: 8 blue, 8 green, 7 red; 3 red, 1 blue, 9 green; 4 green, 5 red, 12 blue\n' +
    'Game 57: 11 green, 16 blue, 5 red; 9 green, 13 blue; 16 blue, 4 red, 15 green; 17 green, 7 red, 15 blue; 1 red, 9 green, 5 blue; 18 blue\n' +
    'Game 58: 2 green, 2 blue, 1 red; 7 green, 3 red, 5 blue; 6 green, 1 blue, 2 red; 5 green, 4 blue; 2 blue, 6 green\n' +
    'Game 59: 8 green, 11 blue; 13 blue, 4 green, 3 red; 6 green, 19 blue, 14 red\n' +
    'Game 60: 6 red, 4 green, 4 blue; 12 green, 2 blue, 13 red; 2 green, 1 red; 3 green, 9 red; 1 red, 1 blue, 2 green\n' +
    'Game 61: 10 green, 1 blue, 1 red; 11 green, 7 blue; 2 red, 3 green, 6 blue\n' +
    'Game 62: 5 green, 7 blue, 3 red; 9 blue, 7 green, 3 red; 5 red, 2 green, 12 blue; 14 blue, 10 red, 7 green; 3 blue, 1 green, 10 red\n' +
    'Game 63: 1 red, 4 green, 6 blue; 2 blue, 14 red, 1 green; 1 red, 4 green, 3 blue; 1 red, 2 blue, 1 green; 4 blue, 11 red, 6 green; 3 green, 7 blue, 1 red\n' +
    'Game 64: 14 red, 4 green, 5 blue; 7 red, 5 green, 6 blue; 8 blue, 8 red, 1 green\n' +
    'Game 65: 3 blue, 6 green, 1 red; 2 blue, 10 green; 16 green, 1 blue, 1 red; 20 green\n' +
    'Game 66: 7 red, 4 blue; 4 blue, 8 red; 2 blue, 3 green, 7 red; 7 red, 1 green, 4 blue; 3 green, 5 red\n' +
    'Game 67: 2 green, 14 red, 5 blue; 20 red, 15 blue, 2 green; 15 blue, 15 red, 1 green\n' +
    'Game 68: 6 green, 9 red, 7 blue; 3 green, 9 red, 13 blue; 9 blue, 4 red; 2 red, 4 blue; 6 green, 9 red; 2 green, 6 blue\n' +
    'Game 69: 8 green, 1 blue, 11 red; 7 blue, 2 red, 11 green; 7 blue, 14 green; 2 red, 10 blue, 8 green; 14 red, 4 green, 5 blue; 16 red, 5 blue, 7 green\n' +
    'Game 70: 7 green, 11 red; 11 green, 2 blue; 11 green, 17 red, 8 blue; 4 green, 7 blue\n' +
    'Game 71: 4 blue, 4 red, 2 green; 2 green, 6 red, 5 blue; 1 green, 2 red; 2 green, 6 blue, 2 red; 2 green\n' +
    'Game 72: 1 green, 1 red, 1 blue; 1 green, 4 red, 1 blue; 2 green, 1 blue, 5 red; 3 red; 2 green, 1 blue, 1 red\n' +
    'Game 73: 10 blue, 2 green, 3 red; 13 blue, 13 green, 4 red; 2 red, 8 green; 11 green, 1 red, 1 blue; 14 green, 15 blue, 4 red\n' +
    'Game 74: 3 green, 1 blue, 7 red; 15 green, 4 red, 1 blue; 3 red, 6 green\n' +
    'Game 75: 15 red; 15 red, 4 blue; 14 red, 3 blue, 1 green; 8 red, 1 green, 2 blue; 1 green, 13 red, 1 blue\n' +
    'Game 76: 4 blue, 7 green, 1 red; 1 red, 1 green, 10 blue; 2 green, 3 blue; 9 green; 4 green, 11 blue; 6 blue, 3 green\n' +
    'Game 77: 2 red, 8 blue, 12 green; 10 green, 2 blue; 7 green, 1 blue, 4 red; 3 green, 2 red; 13 green, 4 blue, 3 red\n' +
    'Game 78: 8 blue, 2 green; 1 green, 5 blue, 2 red; 3 red, 3 green; 3 blue, 1 red, 5 green; 3 blue, 4 green, 3 red; 3 red\n' +
    'Game 79: 8 green, 5 red, 2 blue; 1 blue, 6 red; 9 green, 2 red; 1 blue, 8 green, 8 red; 6 green, 1 red; 2 red, 9 green\n' +
    'Game 80: 2 blue, 11 red, 15 green; 6 blue, 9 red, 19 green; 16 green, 3 red\n' +
    'Game 81: 15 blue, 18 red; 18 red, 2 green; 7 red, 2 green, 11 blue; 17 blue, 8 red; 8 green, 8 red; 2 red, 10 green\n' +
    'Game 82: 6 blue, 1 red; 2 red, 5 green, 8 blue; 3 blue, 5 green; 1 green, 2 red, 2 blue; 2 red, 4 green, 5 blue\n' +
    'Game 83: 1 red, 16 green, 7 blue; 1 blue, 4 red, 4 green; 4 blue, 5 red, 1 green; 1 red, 7 blue, 11 green; 6 red, 7 blue, 2 green\n' +
    'Game 84: 3 red, 4 green, 16 blue; 3 blue, 2 green, 2 red; 10 green, 15 blue, 3 red\n' +
    'Game 85: 7 red, 2 blue, 15 green; 1 red, 12 green, 6 blue; 5 red, 16 green, 1 blue; 8 blue, 10 green, 3 red; 3 blue, 2 red; 5 blue, 16 green, 4 red\n' +
    'Game 86: 10 red, 3 blue, 4 green; 1 red, 2 blue, 3 green; 15 red, 1 blue; 2 green, 2 red, 2 blue; 4 red, 4 green, 1 blue; 3 green, 2 red, 3 blue\n' +
    'Game 87: 19 blue, 2 green; 12 blue; 15 red, 2 green, 20 blue; 14 blue, 9 red; 6 blue, 3 green\n' +
    'Game 88: 19 green, 4 red; 2 green, 7 blue, 17 red; 7 blue, 9 green, 8 red; 9 blue, 5 red, 14 green; 11 red, 9 blue, 19 green\n' +
    'Game 89: 20 blue, 13 green; 4 green, 5 red, 14 blue; 3 blue; 4 green, 5 blue; 3 red, 6 blue, 7 green\n' +
    'Game 90: 1 blue, 12 red; 3 green, 9 blue, 8 red; 2 blue, 3 green, 10 red; 8 blue, 5 red, 1 green\n' +
    'Game 91: 4 blue, 2 red, 5 green; 5 blue, 5 green, 2 red; 3 blue, 14 green, 3 red; 8 green, 1 red, 8 blue; 8 green, 2 red, 3 blue; 19 green, 8 blue, 10 red\n' +
    'Game 92: 11 green, 8 red, 5 blue; 12 green, 14 blue, 11 red; 4 green, 16 red\n' +
    'Game 93: 13 blue, 3 red, 3 green; 2 green, 6 blue, 3 red; 2 red, 19 blue, 5 green\n' +
    'Game 94: 5 green, 7 red, 10 blue; 5 blue, 8 red, 8 green; 5 blue, 6 red, 4 green; 12 blue, 9 red, 4 green; 6 blue, 5 green, 5 red; 8 green, 10 red\n' +
    'Game 95: 1 red, 4 green, 10 blue; 7 blue, 5 green, 3 red; 13 blue, 2 red, 4 green\n' +
    'Game 96: 2 green, 1 red; 5 green, 10 blue; 3 blue, 5 green; 1 red; 2 blue, 6 green\n' +
    'Game 97: 6 green, 12 red, 8 blue; 4 green, 7 red, 7 blue; 1 green, 4 red, 9 blue; 7 red, 4 green; 6 blue, 10 red, 15 green\n' +
    'Game 98: 3 green, 5 red; 12 red, 11 green, 1 blue; 16 red, 4 green, 1 blue\n' +
    'Game 99: 8 blue, 7 green; 1 green, 5 red, 3 blue; 7 green, 1 red, 2 blue; 5 green, 3 red, 12 blue; 2 green, 7 blue, 3 red\n' +
    'Game 100: 4 blue, 1 green; 13 red, 2 blue; 16 red; 15 red, 2 blue; 9 red, 1 green, 1 blue; 7 red, 4 blue';

const dataSplitIntoLines = dataString.split('\n');

const maxForColors = {
    blue: 14,
    green: 13,
    red: 12,
}

let validGames = 0;
const maxes = [];
dataSplitIntoLines.forEach((gameString) => {
    if (gameString.length === 0) {
        return;
    }
    const [gameIdString, setsString] = gameString.split(':');
    const pulls = setsString.split(';');
    const maxForColorInGame = {
        blue: 1,
        green: 1,
        red: 1
    }
    try {
        pulls.forEach(pull => {
            const colorsFromPull = pull.split(',');
            colorsFromPull.forEach(colorFromPull => {
                const [countAsString, color] = colorFromPull.trim().split(' ');
                // if (maxForColors[color] < count) {
                //     throw Error('invalid game');
                // }
                const count = parseInt(countAsString);
                if(count > maxForColorInGame[color]) {
                    maxForColorInGame[color] = count;
                }
            });
        });
    } catch (Error) {
        return;
    }
    maxes.push(maxForColorInGame.blue * maxForColorInGame.green * maxForColorInGame.red);

    const id = gameIdString.split('Game ')[1];
    validGames += parseInt(id);
});

// console.log(validGames)
console.log(maxes.reduce((carry, current) => carry + current));

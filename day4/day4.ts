const fs = require('fs');

const input = fs.readFileSync('./day4/input.txt', 'utf8');

const numbOfCardsPerCard: { [key: string]: number } = {};

function solve(input: string) {
    const cards = input.split('\n');
    cards.pop();
    cards.forEach((card) => {
        getAllCardInstances(card, cards);
    });

    return Object.values(numbOfCardsPerCard).reduce((carry, curr) => carry + curr);
}

function getAllCardInstances(card: string, allCards: string[] = []) {
    const [cardId, numbers] = card.trim().split(':');
    if (cardId === '' || !numbers) {
        return;
    }

    if (Object.keys(numbOfCardsPerCard).includes(cardId)) {
        numbOfCardsPerCard[cardId] = numbOfCardsPerCard[cardId] + 1;
    } else {
        numbOfCardsPerCard[cardId] = 1;
    }

    const [winningNumbersAsString, scratchedNumbersAsString] = numbers.split(" | ");
    const [winningNumbers, scratchedNumbers] = [getNumberArrayFromNumbersString(winningNumbersAsString), getNumberArrayFromNumbersString(scratchedNumbersAsString)];

    let numberOfMatches = 0;
    scratchedNumbers.forEach(number => {
        if (winningNumbers.includes(number)) {
            numberOfMatches++;
        }
    });

    if (numberOfMatches === 0) {
        return;
    }
    const cardIndex = getIndexFromCardId(cardId);

    const copiedCards = getCopiesOfCards(numberOfMatches, cardIndex, allCards);

    copiedCards.forEach((card) => {
        getAllCardInstances(card, allCards);
    });
}

function getNumberArrayFromNumbersString(numbers: string) {
    const seperatedNumbers = numbers.trim().split(' ');
    return seperatedNumbers.map((numberAsString) => parseInt(numberAsString)).filter(number => !isNaN(number));
}

function getCopiesOfCards(matches: number, currentIndex: number, allCards: string[]) {
    const copies = [];
    for (let index = currentIndex + 1; index <= currentIndex + matches; index++) {
        if (index >= allCards.length) {
            break;
        }
        copies.push(allCards[index]);
    }

    return copies;
}

function getIndexFromCardId(cardId: string) {
    return parseInt(cardId.split('Card ')[1])-1;
}

console.log(solve(input));

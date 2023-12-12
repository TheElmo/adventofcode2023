const fs = require('fs');

const input = fs.readFileSync('./day7/input.txt', 'utf8');

type Play = {
    hand: string[];
    bid:number;
}

const cardMap = {
    'T': 10,
    'Q': 12,
    'K': 13,
    'A': 14,
    'J': 1
}

const handMultiplierMap = {
    '5K': 7,
    '4K': 6,
    'FH': 5,
    '3K': 4,
    '2P': 3,
    '1P': 2
}

function solve(input: string): number {
    const playLines = input.split('\n').slice(0,-1);

    const plays = playLines.map((playLine) => convertPlayStringIntoPlay(playLine));

    const handsByScore: {[score: number]: (string)[] } = {};
    const bidsByHand: {[hand: string]: number} = {};

    plays.forEach(({ hand, bid}) => {
        const handAsString = hand.reduce((handString, char) => `${handString}${char}`);
        bidsByHand[handAsString] = bid;

        const score = scoreHand(hand);
        if(handsByScore[score] === undefined) {
            handsByScore[score] = [handAsString];
            return;
        }

        handsByScore[score].push(handAsString);
    });

    const sortedHands = buildSortedHandList(handsByScore);

    return sortedHands.reduce((total, hand, currentIndex) => {
        const bidForHand = bidsByHand[hand];

        return total + (bidForHand*(currentIndex+1))
    }, 0);
}

function buildSortedHandList(handsByScore: {[score: string]: (string)[] }): string[] {
    const sortedHandsList: string[] = [];
    Object.keys(handsByScore).forEach(score => {
        const handsForScore = handsByScore[score].sort((a, b) => {
            const cardsForA = a.split('');
            const cardsForB = b.split('');

            for (let index=0;index<cardsForA.length;index++) {
                const cardA = cardsForA[index];
                const cardB = cardsForB[index];
                const numberForA = getNumberForCard(cardA);
                const numberForB = getNumberForCard(cardB);

                if(numberForA > numberForB) {
                    return 1;
                }
                if(numberForA < numberForB) {
                    return -1;
                }
            }

            return 0;
        });
        sortedHandsList.push(...handsForScore);
    });

    return sortedHandsList;
}

function convertPlayStringIntoPlay(playString: string): Play
{
    const [handAsString, bidAsString] = playString.split(' ');

    return {
        hand: handAsString.split(''),
        bid: parseInt(bidAsString),
    }
}

function scoreHand(hand: string[])
{
    let score = 0;
    score += getScoreForHand(hand);
    return score;
}

function getNumberForCard(card: string) {
    const cardAsNumber = parseInt(card);
    if(!isNaN(cardAsNumber)) {
        return cardAsNumber;
    }
    // @ts-ignore
    return cardMap[card];
}

function getScoreForHand(hand: string[]) {
    const occurrencesByCard: {[key: string]: number} = {};
    hand.forEach((card) => {
        if(occurrencesByCard[card] === undefined) {
            occurrencesByCard[card] = 0;
        }
        occurrencesByCard[card] = occurrencesByCard[card] +1;
    });

    const pairs = getPairs(occurrencesByCard) as string[];
    const threeOfKind = getOfKind(occurrencesByCard, 3, true) as string[];
    const fourOfKind = getOfKind(occurrencesByCard, 4, true) as string[];
    const fiveOfKind = getOfKind(occurrencesByCard, 5, true) as string[];
    const fullHouse = getFullHouse(occurrencesByCard) as string[];

    if(fiveOfKind.length >= 1) {
        return handMultiplierMap['5K']
    }
    if(fourOfKind.length >= 1) {
        return handMultiplierMap['4K'];
    }
    if(fullHouse.length >= 2) {
        return handMultiplierMap['FH'];
    }
    if(threeOfKind.length >= 1) {
        return handMultiplierMap['3K'];
    }
    if(pairs.length >= 2) {
        return handMultiplierMap['2P'];
    }
    if(pairs.length >= 1) {
        return handMultiplierMap['1P'];
    }

    return 1;
}

function getPairs(occurences: {[key: string]: number}) {
    return Object.keys(occurences).map(key => {
        const value = occurences[key];
        const valueForJokers = key === 'J' ? 0 : (occurences['J'] ?? 0);
        const valueWithJokers = value + valueForJokers;
        if(valueWithJokers !== 2 && value !== 2) {
            return null;
        }
        return key;
    }).filter(card => card !== null);
}

function getOfKind(occurences: {[key: string]: number}, kindCount: number, useJoker: boolean) {
    return Object.keys(occurences).map(key => {
        const value = occurences[key];
        const valueForJokers =  key === 'J' ? 0 : (occurences['J'] ?? 0);
        const valueWithJokers = value + valueForJokers;
        if(useJoker && valueWithJokers === kindCount) {
            return key;
        }
        if(!useJoker && value === kindCount) {
            return key;
        }
        return null;
    }).filter(card => card !== null);
}

function getFullHouse(occurences: {[key: string]: number}) {
    const threeOfKind = getOfKind(occurences, 3, false);
    const twoOfKind = getOfKind(occurences, 2, false);

    if(twoOfKind.length === 2 && occurences['J'] === 1) {
        return [ ...twoOfKind, 'J'];
    }

    if (threeOfKind.length === 3 && twoOfKind.length === 1) {
        return [...threeOfKind, ...twoOfKind];
    }

    return [];
}

function hasJoker(hand: string[]) {
    for(let card of hand) {
        if(card === 'J') {
            return true;
        }
    }

    return false;
}

console.log(solve(input));

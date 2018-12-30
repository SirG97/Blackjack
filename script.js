/*
    Creating our deck of cards
    This will be created with a nested loop inside a function
*/

let suits = ['Hearts', 'Club', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 
              'Ten', 'Nine', 'Eight', 'Seven', 'Six', 
              'Five', 'Four', 'Three', 'Two', 'One'];
function createDeck(){
    let deck = [];

    for(let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        //nest the loop to add the values
        for(valueIdx = 0; valueIdx < values.length; valueIdx++){
            //Use the card info to create a card object
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push(card);
        }
    }

    return deck;
}

let deck = createDeck();


/*

Extract card information from the object

*/

getCardInfo = (card) => {
    return `${card.value} of ${card.suit}`;
}

/*

CREate a new function to get the next card from the deck

*/
getNextCard = () => {
    return deck.shift();
}

let playerCard = [getNextCard(), getNextCard()];



// let b = document.querySelector('body');
// for(i = 0; i < deck.length; i++){
//     b.append(deck[i]);
// }
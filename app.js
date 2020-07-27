// GoFish PseudoCode

// Constant Variables:
// Deck of Cards, Your cards, Opponent's cards, remaining cards, number of points for user, number of points for opponent
// 

const numbersDeck = ["sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK", 
"dA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK", 
"hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
 "cA", "c01", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK"];

// use math random on indices
const myHand = [];
const otherHand = [];
const myPoints = 0;
const otherPoints = 0;

input_card = 0;



// This function gets the input, we need another one to compare it with the values in the array of the otherhand
// 
document.getElementById('submitButton').addEventListener('click', chooseCard);

// function inputValue(){
//     let input_card = document.getElementById('input').value;
//     console.log(input_card);
// }

// console.log(input_card);

function chooseCard(){
    let chosenCard = document.getElementById('cardList');
    let cardInput = cardList.options[cardList.selectedIndex].text;
    document.getElementById('input').value = cardInput
    
    console.log(chosenCard);
    let newCard = document.getElementById('deckHand')
    let myDiv = document.createElement('div');
    newCard.appendChild(myDiv);
    newCard.classList.add('card');
    newCard.classList.add(cardInput);
    console.log(newCard);
}



// This class will take a card from one array and move it to another array
class handCollection {
    constructor () {
        this.cards = [];
    }
    insert(incoming_card) {
        this.cards.push(incoming_card);
    }
    transfer(card, another_bunch){
       this.cards = remove_item_from_array(this.cards, card);
       another_bunch.insert(card);
        }
    }

function remove_item_from_array(arr, item){
    let filtered = arr.filter(function(el){
        return el != item;
})
};

// let deck = new handCollection();
// deck.insert("s09");
// console.log(deck);

// let my_hand = new handCollection();

// deck.transfer("s09", my_hand);
// let computer_hand = new handCollection();

// let my_class = deck.cards[0];
// document.getElementById('firstCard').addClass(my_class);




// App's State Variables:
// beginning of deck cards, random shuffling and distribution of deck cards to user and computer, hide the opponent's cards but display the users cards

// Initiate function that creates an array of all the deckcards 
// randomly assign 5 cards for the array myHand (i.e. randomly dealing 5 cards for player 1) by 
// randomly assign 5 cards for the array otherHand (i.e. randomly dealing 5 cards for player 2);
// display the array myHand in the Div and hide/dont display 



// function initiate(){alert ('The game has started!');
// };

// let aceofSpades = document.getElementById('').addClass('');

// 
// Cached element references:
// remaining deck cards, cards comparison
// 
// Event listeners: 
// input from user for card choice, 
// 
// Functions: 
// random shuffle and distribution of 6 cards to the user's cards and 6 cards to the opponents cards from the deck upon clicking the start button
// prompt user to begin by inputing their choice of a card
// compare card choice with opponents cards and with deck of cards
// if card choice is found in opponents cards, then move the chosen card from opponents cards to your cards
// if card choice is found in deck of cards (or if card choice is not found in opponents cards), then a random card from the deck variable (array) will be transferred to users cards
// after every turn, check if user and/or computer has any combination of 4 numbers (card numbers) in their cards, if yes then remove those 4 cards and add 1 point to the user's side, else continue the game
// once the entire deck is complete and both the user and their opponent have zero cards then the side with the most points win
// return a declaration of the winner based on score
// restart game
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

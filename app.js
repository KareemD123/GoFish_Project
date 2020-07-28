// GoFish PseudoCode

// Constant Variables:
// Deck of Cards, Your cards, Opponent's cards, remaining cards, number of points for user, number of points for opponent
// 

const numbersDeck = ["sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK",
    "dA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK",
    "hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
    "cA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK"];

const namesDeck = ["Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades",
    "Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
    "Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts",
    "Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs"];

// use math random on indices
let myHand = [];
let otherHand = [];
let myPoints = 0;
let otherPoints = 0;

input_card = 0;


// initiation function
for (i = 0; i < numbersDeck.length; i++) {
    let dropDownList = document.getElementById('cardList');
    let newOption = document.createElement('option');
    dropDownList.appendChild(newOption);
    let deckId = numbersDeck[i];
    newOption.classList.add(deckId);
    newOption.innerHTML = namesDeck[i];
}

let myBeginningHand = [];
for (let i = 0; i <= 7; i++) {
    let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    myHand.push(randomCardClass);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(randomCardClass);
    myFirstCards.addEventListener('click', compareChoices)
    // mychoice = myHand1.addEventListener('click', compareMyCards);
}

console.log(myHand);

let otherBeginningHand = [];
for (let i = 0; i <= 7; i++) {
    let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    otherHand.push(randomCardClass);
    let otherHand1 = document.getElementById('otherHand');
    let opponentsFirstCards = document.createElement('div');
    otherHand1.appendChild(opponentsFirstCards);
    opponentsFirstCards.classList.add('card');
    opponentsFirstCards.classList.add(randomCardClass);
    // opponentsFirstCards.classList.add('back');
    // opponentsFirstCards.addEventListener('click', compareChoices)
    // mychoice = otherHand1.addEventListener('click', compareOpponentsCards);
}

console.log(otherHand);



// This function gets the input, we need another one to compare it with the values in the array of the otherhand

document.getElementById('submitButton').addEventListener('click', compareChoices);

document.getElementById('pickUpButton').addEventListener('click', pickUpCard);

document.getElementById('opponentPickUpButton').addEventListener('click', opponentPickUpCard);

function pickUpCard() {
    let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    myHand.push(randomCardClass);
    let myChoiceId = randomCardClass;
    console.log(myChoiceId);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(randomCardClass);
    myFirstCards.addEventListener('click', compareChoices)
    console.log(myHand);
}

function getMyId(evt) {
    var myCardClass = evt.target.className;
    console.log(myCardClass);
};


function getOtherId() {
    console.log(otherCardClass);
};


function removeItemAll(arr, value) {
    var i = 0;
    while (i < otherHand.length) {
        if (otherHand[i] === secondArray) {
            otherHand.splice(i, 1);
        } else {
            ++i;
        }
    }}

    function compareChoices(evt) {
        var myCardClass = evt.target.className;
        var myNumberCardClass = myCardClass.split(' ').slice(1);
        var otherCardClass;
        console.log(myNumberCardClass)
        console.log(myCardClass);
        let newArray = otherHand.filter(function (value) {
            return value == myNumberCardClass
        });
        let secondArray = [];
        let thirdArray = newArray;
        secondArray[0] = newArray;
        myHand.push(thirdArray);
        var i;
        for (i = 0; i < otherHand.length; i++) {
            if (otherHand[i] === secondArray) {
                otherHand.splice(i, 1);
            } else {alert ("no cards match");}
        }
        console.log(newArray);
        console.log(myHand);
        console.log(otherHand);
        getMyId; getOtherId;
    };











    // function removeChild(){
    //     $('#otherHand').remove('')
    // }







    function opponentPickUpCard() {
        let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
        otherHand.push(randomCardClass);
        let otherHand1 = document.getElementById('otherHand');
        let opponentsFirstCards = document.createElement('div');
        otherHand1.appendChild(opponentsFirstCards);
        opponentsFirstCards.classList.add('card');
        opponentsFirstCards.classList.add(randomCardClass);
        // opponentsFirstCards.classList.add('back');
        // opponentsFirstCards.addEventListener('click', compareChoices)
        console.log(otherHand)
    }


    // compareChoices();

    // function transfer(array1, card, array2){
    //     let transaction = array1.remove(card)
    //     console.log(transaction)
    // }


    // The chooseCard function sets the class of a new created div element in the deckHand section 
    // to equal the input from the class list options chosen and displays it
    // function chooseCard(){
    //     let chosenCard = document.getElementById('cardList');
    //     let cardInput = cardList.options[cardList.selectedIndex].text;
    //     document.getElementById('input').value = cardInput
    //     document.getElementById('input').id = cardId
    //     console.log(cardId);
    //     let newCard = document.getElementById('deckHand')
    //     let myDiv = document.createElement('div');
    //     newCard.appendChild(myDiv);
    //     myDiv.classList.add('card');
    //     myDiv.classList.add(cardInput);
    //     console.log(newCard);
    // }



    class handCollection {
        constructor() {
            this.cards = [];
        }
        insert(incoming_card) {
            this.cards.push(incoming_card);
        }
        transfer(card, another_bunch) {
            this.cards = remove_item_from_array(this.cards, card);
            another_bunch.insert(card);
        }
    }

    function remove_item_from_array(arr, item) {
        let filtered = arr.filter(function (el) {
            return el != item;
        })
    };

    function chooseCardForMyHand() {
        let chosenCard = document.getElementById('cardList');
        // let cardInput = cardList.options[cardList.selectedIndex].text;
        // document.getElementById('input').value = cardInput
        let cardId = cardList.options[cardList.selectedIndex].className;
        console.log(cardList.options[cardList.selectedIndex].className);
        // document.getElementById('input').className = cardId
        console.log(cardId);
        console.log(chosenCard);
        let newCard = document.getElementById('myHand')
        let myDiv = document.createElement('div');
        newCard.appendChild(myDiv);
        myDiv.classList.add('card');
        myDiv.classList.add(cardId);
        console.log(cardId);
        console.log(newCard);
        myHand.push(cardId);
        console.log(myHand);
    }




// function chooseCardForOtherHand(){
//     let chosenCard = document.getElementById('cardList');
//     let cardInput = cardList.options[cardList.selectedIndex].text;
//     document.getElementById('input').value = cardInput
//     document.getElementById('input').id = cardId
//     console.log(cardId);
//     console.log(chosenCard);
//     let newCard = document.getElementById('otherHand')
//     let myDiv = document.createElement('div');
//     newCard.appendChild(myDiv);
//     myDiv.classList.add('card');
//     myDiv.classList.add(cardInput);
//     console.log(newCard);

// }



// This class will take a card from the deck and add it from the deck array to
//  to another array


// let otherHand = new handCollection();
// otherHand.insert(newCard);
// console.log(otherHand);

// myHand = new handCollection();
// myHand.insert(cardId);
// console.log(myHand);

// let myHand = new handCollection();
// .transfer("s09", my_hand);
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

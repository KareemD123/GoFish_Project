// GoFish PseudoCode

// Constant Variables:
// Deck of Cards, Your cards, Opponent's cards, remaining cards, number of points for user, number of points for opponent
// 

const numbersDeck = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13",
    "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13",
    "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13",
    "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13"];

// const numbersDeck = ["sA", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "sJ", "sQ", "sK",
//     "dA", "d02", "d03", "d04", "d05", "d06", "d07", "d08", "d09", "d10", "dJ", "dQ", "dK",
//     "hA", "h02", "h03", "h04", "h05", "h06", "h07", "h08", "h09", "h10", "hJ", "hQ", "hK",
//     "cA", "c02", "c03", "c04", "c05", "c06", "c07", "c08", "c09", "c10", "cJ", "cQ", "cK"];

const namesDeck = ["Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades",
    "Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
    "Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts",
    "Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs"];

let deck = Array.from(new Array(52), (x, i) => i);

function shuffle(numbersDeck) {
    let repeat = numbersDeck.length;
    while (repeat != 0) {
        numbersDeck.push(numbersDeck.splice(Math.floor(Math.random() * repeat), 1)[0]);
        repeat = repeat - 1;
    }
}

shuffle(numbersDeck);
console.log(numbersDeck);

// use math random on indices
let myHand = [];
let otherHand = [];
let myPoints = 0;
let otherPoints = 0;

input_card = 0;


// initiation function

// for (i = 0; i < numbersDeck.length; i++) {
//     let dropDownList = document.getElementById('cardList');
//     let newOption = document.createElement('option');
//     dropDownList.appendChild(newOption);
//     let deckId = numbersDeck[i];
//     newOption.classList.add(deckId);
//     newOption.innerHTML = namesDeck[i];
// }


let myBeginningHand = [];
for (let i = 0; i < 7; i++) {
    // function createCard(){
    //     let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    //     for (let i=0; i < myHand.length; i++){
    //         if myHand[i] 
    //     }
    // }
    // let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    let randomCardClass = myHand.push(numbersDeck.splice(0, 1)[0]);
    shuffle(numbersDeck);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(myHand[i]);
    myFirstCards.addEventListener('click', compareChoices)
    // mychoice = myHand1.addEventListener('click', compareMyCards);
}


console.log(myHand);

let otherBeginningHand = [];
for (let i = 0; i < 7; i++) {
    let randomCardClass = otherHand.push(numbersDeck.splice(0, 1)[0]);
    shuffle(numbersDeck);
    let otherHand1 = document.getElementById('otherHand');
    let opponentsFirstCards = document.createElement('div');
    otherHand1.appendChild(opponentsFirstCards);
    opponentsFirstCards.classList.add('card');
    opponentsFirstCards.classList.add(otherHand[i]);
    // opponentsFirstCards.classList.add('back');
    // opponentsFirstCards.addEventListener('click', compareChoices)
    // mychoice = otherHand1.addEventListener('click', compareOpponentsCards);
}

console.log(otherHand);
console.log(numbersDeck);


// This function gets the input, we need another one to compare it with the values in the array of the otherhand

// document.getElementById('submitButton').addEventListener('click', compareChoices);

document.getElementById('pickUpButton').addEventListener('click', pickUpCard);

// document.getElementById('opponentPickUpButton').addEventListener('click', opponentPickUpCard);

document.getElementById('restartButton').addEventListener('click', reload);

function reload() {
    location.reload();
    return false;
}




function pickUpCard() {
    // let randomCardClass = numbersDeck[Math.floor(Math.random() * numbersDeck.length)];
    // myHand.push(randomCardClass);
    let randomCard = numbersDeck.splice(0, 1)[0]
    myHand.push(randomCard);
    let myHand1 = document.getElementById('myHand');
    let myFirstCards = document.createElement('div');
    myHand1.appendChild(myFirstCards);
    myFirstCards.classList.add('card');
    myFirstCards.classList.add(randomCard);
    myFirstCards.addEventListener('click', compareChoices)
    console.log(randomCard)
    console.log(myHand)
}

function opponentPickUpCard() {
    let randomCard = numbersDeck.splice(0, 1)[0]
    otherHand.push(randomCard);
    let otherHand1 = document.getElementById('otherHand');
    let opponentsFirstCards = document.createElement('div');
    otherHand1.appendChild(opponentsFirstCards);
    opponentsFirstCards.classList.add('card');
    opponentsFirstCards.classList.add(randomCard);
    // opponentsFirstCards.classList.add('back');
    // opponentsFirstCards.addEventListener('click', compareChoices)
    console.log(randomCard)
    console.log(otherHand)
}


function removeItemAll(arr, value) {
    var i = 0;
    while (i < otherHand.length) {
        if (otherHand[i] === secondArray) {
            otherHand.splice(i, 1);
        } else {
            ++i;
        }
    }
}


function getAllIndices(arr, value) {
    var indices = [], i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] === value)
            indices.push(i);
    return indices;
}

function compareChoices(evt) {
    console.log(myHand);
    var myCardClass = evt.target.className;
    var myNumberAlone2 = myCardClass.match(/\d/g);
    var myNumberAlone3 = myNumberAlone2.join('');
    console.log(myNumberAlone3);
    console.log(myNumberAlone2);
    console.log(typeof (myNumberAlone3));


    // var myNumberCardClass = myCardClass.split(' ').slice(1);
    // var myNumberCardClass2 = myNumberCardClass.toString();
    // var myNumberAlone = myNumberCardClass2.split('').slice(1, 3);
    // var myNumber = myNumberAlone.shift();
    // var otherCardClass;
    // // console.log(myNumberCardClass)
    // console.log(myNumberAlone)
    // console.log(myCardClass);
    // let newArray = otherHand.filter(function (value) {
    //     return value == myNumberCardClass
    // });

    let resultOtherHand = [];
    for (let i = 0; i < otherHand.length; i++) {
        var otherNumberAlone2 = otherHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        // let newOtherHand = otherHand[i].split('')[otherHand[i].split('').length - 1];
        resultOtherHand.push(otherNumberAlone3);
    }
    console.log(resultOtherHand);
    // let matchNumber = resultOtherHand.filter(function (value) {});

    let matchArray = getAllIndices(resultOtherHand, myNumberAlone3)
    console.log(matchArray[0])

    // let secondArray = newArray.toString();
    // let thirdArray = secondArray.split('').slice(1, 2);
    // console.log(otherHand);

    // let emptyArray = [];
    // console.log(emptyArray[0]);

    if (matchArray[0] == undefined) {
        alert('GoFish!');
    }

    if (matchArray[0] != undefined) {
        myHand.push(otherHand[matchArray[0]]);
        var swap = otherHand[0];
        otherHand[0] = otherHand[matchArray[0]];
        otherHand[matchArray[0]] = swap;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[1] != undefined) {
        console.log('I am running!');
        myHand.push(otherHand[matchArray[1] - 1]);
        var swap1 = otherHand[0];
        otherHand[0] = otherHand[matchArray[1] - 1];
        otherHand[matchArray[1] - 1] = swap1;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[2] != undefined) {
        myHand.push(otherHand[matchArray[2] - 2]);
        var swap2 = otherHand[0];
        otherHand[0] = otherHand[matchArray[2] - 2];
        otherHand[matchArray[2] - 2] = swap2;

        let otherHand1 = document.querySelector(`.${otherHand[0]}`);
        otherHand1.remove();
        otherHand.shift();

        let myHand1 = document.getElementById('myHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(myHand[myHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    console.log(myHand);
    console.log(otherHand);

    // function checkForFullStack(myHand){
    // make a loop to filter element
    // let count1 = getAllIndices(resultOtherHand, '1');
    let count2 = getAllIndices(resultOtherHand, '2');
    let count4 = getAllIndices(resultOtherHand, '4');
    let count5 = getAllIndices(resultOtherHand, '5');
    let count6 = getAllIndices(resultOtherHand, '6');
    let count7 = getAllIndices(resultOtherHand, '7');
    let count8 = getAllIndices(resultOtherHand, '8');
    let count9 = getAllIndices(resultOtherHand, '9');
    let count10 = getAllIndices(resultOtherHand, '10');
    let count11 = getAllIndices(resultOtherHand, '11');
    let count12 = getAllIndices(resultOtherHand, '12');
    let count13 = getAllIndices(resultOtherHand, '13');

count1 = [1, 2, 4];
    if (count1.length == 3) { 
        for (let i = 0; i < 4; i++){
            alert('hello');
            count1.splice(count1[i], 1) };}
console.log(count1)

    if (count2.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count2[i], 1) };}
     };

     let count3 = getAllIndices(resultOtherHand, '3');

     if (count3.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count3[i], 1) };};

    // if (count3.length == 4) { 
    //     for (let i = 0; i < 4; i++){
    //         myHand.splice(count3[i], 1) } ;}

    if (count4.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count4[i], 1) } };

    if (count5.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count5[i], 1) } };

    if (count6.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count6[i], 1) } };

    if (count7.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count7[i], 1) } };

    if (count8.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count8[i], 1) } };

    if (count9.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count9[i], 1) } };

    if (count10.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count10[i], 1) } };

    if (count11.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count11[i], 1) } };

    if (count12.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count12[i], 1) } };

    if (count13.length == 4) { 
        for (let i = 0; i < 4; i++){
            myHand.splice(count13[i], 1) } };

    // }

setTimeout(computerTurn, 3500);



function computerTurn() {
    let computersChoice = (Math.floor(Math.random() * otherHand.length));
    var myCardClass = otherHand[computersChoice];
    var myNumberAlone2 = myCardClass.match(/\d/g);
    var myNumberAlone3 = myNumberAlone2.join('');
    console.log(myNumberAlone3);
    console.log(myNumberAlone2);
    console.log(typeof (myNumberAlone3));

    // var myNumberCardClass = myCardClass.split(' ').slice(1);
    // var myNumberCardClass2 = myNumberCardClass.toString();
    // var myNumberAlone = myNumberCardClass2.split('').slice(1, 3);
    // var myNumber = myNumberAlone.shift();
    // var otherCardClass;
    // // console.log(myNumberCardClass)
    // console.log(myNumberAlone)
    // console.log(myCardClass);
    // let newArray = otherHand.filter(function (value) {
    //     return value == myNumberCardClass
    // });

    let resultOtherHand = [];
    for (let i = 0; i < myHand.length; i++) {
        var otherNumberAlone2 = myHand[i].match(/\d/g);
        var otherNumberAlone3 = otherNumberAlone2.join('');
        // let newOtherHand = otherHand[i].split('')[otherHand[i].split('').length - 1];
        resultOtherHand.push(otherNumberAlone3);
    }
    console.log(resultOtherHand);
    // let matchNumber = resultOtherHand.filter(function (value) {});

    let matchArray = getAllIndices(resultOtherHand, myNumberAlone3)
    console.log(matchArray)

    // let secondArray = newArray.toString();
    // let thirdArray = secondArray.split('').slice(1, 2);
    // console.log(otherHand);

    if (matchArray[0] == undefined) {
        opponentPickUpCard();
        alert('Opponent has picked up a card!');
    }

    if (matchArray[0] != undefined) {
        otherHand.push(myHand[matchArray[0]]);
        var swap = myHand[0];
        myHand[0] = myHand[matchArray[0]];
        myHand[matchArray[0]] = swap;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[1] != undefined) {
        console.log('I am running!');
        otherHand.push(myHand[matchArray[1] - 1]);
        var swap1 = myHand[0];
        myHand[0] = myHand[matchArray[1] - 1];
        myHand[matchArray[1] - 1] = swap1;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    if (matchArray[2] != undefined) {
        otherHand.push(myHand[matchArray[2] - 2]);
        var swap2 = myHand[0];
        myHand[0] = myHand[matchArray[2] - 2];
        myHand[matchArray[2] - 2] = swap2;

        let otherHand1 = document.querySelector(`.${myHand[0]}`);
        otherHand1.remove();
        myHand.shift();

        let myHand1 = document.getElementById('otherHand');
        let myFirstCards = document.createElement('div');
        myHand1.appendChild(myFirstCards);
        myFirstCards.classList.add('card');
        myFirstCards.classList.add(otherHand[otherHand.length - 1]);
        myFirstCards.addEventListener('click', compareChoices)

    }

    console.log(myHand);
    console.log(otherHand);

};




// function fullDeck() {

//     let resultMyHand2 = [];
//     for (let i = 0; i < myHand.length; i++) {
//         let newOtherHand = myHand[i].split('')[myHand[i].split('').length - 1];
//         resultMyHand2.push(newOtherHand);
//     }

//     let keys = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
//     for (let i = 0; i < resultMyHand2.length; i++) {
//         let onlyNumbers = resultMyHand2.filter(x => x == keys[i]).length == 1;
//         if (resultMyHand2.filter(x => x == keys[i]).length == 4) { console.log('This ' + keys[i] + 'matches!') };
//         // remove the 4 elements from array
//         console.log(onlyNumbers);
//     }

//     // for other hand now

//     let resultOtherHand2 = [];
//     for (let i = 0; i < otherHand.length; i++) {
//         let newOtherHand = otherHand[i].split('')[otherHand[i].split('').length - 1];
//         resultOtherHand2.push(newOtherHand);
//     }

//     for (let i = 0; i < resultOtherHand2.length; i++) {
//         let keys = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
//         if (resultOtherHand2.filter(x => x === keys[i]).length == 4) {
//             // remove the 4 elements from array
//         };
//     }
// };
// fullDeck();


// let bigArray = [0,1,2,3,4,5];
// let mybigarray = [5];
// // bigArray.unshift((mybigarray.shift()));
// bigArray.push((mybigarray.pop()));
// console.log(bigArray);
// console.log(mybigarray);


// function removeChild(){
//     $('#otherHand').remove('')
// }


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









// class handCollection {
//     constructor() {
//         this.cards = [];
//     }
//     insert(incoming_card) {
//         this.cards.push(incoming_card);
//     }
//     transfer(card, another_bunch) {
//         this.cards = remove_item_from_array(this.cards, card);
//         another_bunch.insert(card);
//     }
// }

// function remove_item_from_array(arr, item) {
//     let filtered = arr.filter(function (el) {
//         return el != item;
//     })
// };

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

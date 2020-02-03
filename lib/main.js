let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

const suit = new Card(suits, values);
console.log(suit);

class Deck {
  constructor() {
    this.length = length;
    this.deck = [];
    this.shuffle = this.deck;
    this.playersDeck = [[], []];
    // this.draw = draw;
  } 
    createDeck(suits, values) {
     for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++ ) {
        this.deck.push({
          name: `${values[j]} of ${suits[i]}`,
          value: parseInt(j) + 2
        });
      }
    }
    return this.length = this.deck.length;
  }
  //good ref for shuffling deck/array
  shuffleMain() {
    for(let i = this.shuffle.length -1; i > 0; i--) {
      let ii = Math.floor(Math.random() * (i + 1));
      let temp = this.shuffle[i];
      this.shuffle[i] = this.shuffle[ii];
      this.shuffle[ii] = temp;
    }
    return this.shuffle;
    // let random = this.deck.length, temp, i;

    // while(random) {
    //   i = Math.floor(Math.random() * random --);
    //   temp = this.deck[random];
    //   this.deck[random] = this.deck[i];
    //   this.deck[i] = temp;
    // }
    // return this.deck;
  }
  splitCards() {
    for(let i = 0; i < this.deck.length; i++) {
      if(i % 2 === 0) {
        this.playersDeck[0].push(this.deck[i]);
      } else {
          this.playersDeck[1].push(this.deck[i]);
      }
    }
  }
}

const deck = new Deck();
deck.createDeck(suits, values);
console.log(deck);
deck.shuffleMain();
console.log(deck.shuffleMain());
deck.splitCards();
console.log(deck.playersDeck);

class Game {
  constructor() {
    this.run = true;
    this.gameover = false;
  }
  // attack() {
  //   if(!this.gameover) {
  //     let card1 = deck.playersDeck[0].shift();
  //     let card2 = deck.playersDeck[1].shift();
  //     let cardsInPlay = [card1, card2];
  //   }
  //   return card1, card2;
  // }
  checkForWinner() {
    let card1 = deck.playersDeck[0].shift();
    let card2 = deck.playersDeck[1].shift();
    let totalCards = [card1, card2];
    
    console.log(card1);
    console.log(card2);

    if(card1.value > card2.value) {
      console.log("Player 1 wins");
      deck.playersDeck[0] = deck.playersDeck[0].concat(totalCards);

    } else if(card1.value < card2.value) {
      console.log("Player 2 wins");
      deck.playersDeck[1] = deck.playersDeck[1].concat(totalCards);
    } else{
      console.log("Tie");
    }
    let score = [deck.playersDeck[0].length, deck.playersDeck[1].length];
    console.log(deck.playersDeck);
    console.log(score);
  }
  war(totalCards) {
    card1;
    card2;
    let pos = (totalCards.length/2);
    if(deck.playersDeck[0].length < 4 || deck.playersDeck[1].length < 4) {
      return;
    } else {
      for(let i = 0; i < 4; i++) {
        card1 = deck.playersDeck[0].shift();
        game.checkForWinner().totalCards(card1);
      }
      for(let i = 0; i < 4; i++) {
        card1 = deck.playersDeck[1].shift();
        game.checkForWinner().totalCards(card2);
      }
    }
    console.log(war(pos));
  }
}
let game = new Game();
// game.attack();
// console.log(deck.playersDeck[0].shift());
game.checkForWinner();
// console.log(game.checkForWinner());

















var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
    this['src'] = (cards[0,1,2,3].cardImage);
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
    alert("Sorry, try again.");
    console.log(cardsInPlay);
    cardsInPlay[0].setAttribute('src', 'images/back.png');
    cardsInPlay[1].setAttribute('src', 'images/back.png');
  }
};

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[0]);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
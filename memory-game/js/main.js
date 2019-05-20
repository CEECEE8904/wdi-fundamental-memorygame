var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
/*16 & 17 here*/
cardsInPlay.push('queen');
console.log("User flipped queen");

/*Card two flip*/
var cardTwo = cards[2];
cardsInPlay.push('king');
console.log("User flipped king");
 if (cardsInPlay.length === 2) {
 if (cardsInPlay[0] === cardsInPlay[1]) alert("You found a match!"); 
 else alert("Sorry, try again"); }

 function flipCard (cardId){
 var cardOne = cards[0];
 var cardTwo = cards[2];
 }
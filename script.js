// now to active the buttons
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');

// let apiQuotes=[];

//loading
// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden = true ; 

// }

// // hide loading 
// function complete(){
//     quoteContainer.hidden = false ; 
//     loader.hidden = true;

// }

//function of new quote()
function newQuote() {
  //math function willbe used to pick random number from arryay of api
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //if author field is blacnk and replaced with unknown
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }

  // check quote length to determin styling

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList = quote.text;
  }

  quoteText.textContent = quote.text;
}

// get quote from api
// asyncronus function can be run anytime and it wont stop browser to loading of a page

//  async function getQuotes(){
//     const apiUrl ='https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try{
//         const response = await fetch(apiUrl);
//         //this const wont be populated until it has some data fetch from api
// //  if we did not do it will set the response value before it can be fetch so error will pop up
// // until we have to use async and await
//         apiQuotes = await response.json();
//         // console.log(apiQuotes[12]);
//         newQuote();
//     } catch (error){
//         //catch error here

//     }
// }
// //on load
// getQuotes();
 
// tweet quote

// function tweetQuote(){
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
//     window.open(twitterUrl, '_blank');

// }

// //event listenrs
// newQuoteBtn.addEventListener('click', newQuote);
// twitterBtn.addEventListener('click', tweetQuote);





newQuote();

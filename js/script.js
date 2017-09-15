// Declaring global variables
var message;
var displayQuote;

//This function creates a variable called "newQuote" that contains and returns a random quote from the "quotes" array
  
function getRandomQuote (){
  var newQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  return(newQuote);
}

//This function creates a string from the properties of the random quote and prints them into the "quote-box" ID

function printQuote(){
  displayQuote = getRandomQuote();
  message = '<p class="quote">' + displayQuote.quote + '</p>';
  message += '<p class="source">' + displayQuote.source + '</p>';
  message += '<span class="citation">' + displayQuote.citation + '</span>';
  message += '<span class="year">' + displayQuote.year + '</span>';
  document.getElementById('quote-box').innerHTML = message;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

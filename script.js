const newQuoteBtn = document.getElementById("newQuote");
const displayContainer = document.getElementById("quoteDisplay");
const addQuoteBtn = document.getElementById("addQuote");

const quotes = [
    { text: "The journey of a thousand miles begins with a single step.", category: "Motivation" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Success" }
  ];

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("randomQuote");
    
    displayContainer.textContent = `"${randomQuote.text}" - Category: ${randomQuote.category}`;
  }

newQuoteBtn.addEventListener("click", showRandomQuote);
console.log(showRandomQuote());
  
// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText === "" || newQuoteCategory === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  // Add the new quote to the array
  quotes.push({ text: newQuoteText, category: newQuoteCategory });

  // Clear input fields
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  alert("Quote added successfully!");
}

addQuoteBtn.addEventListener("click", addQuote);





// function elManipulation () {
// const displayContainer = document.getElementById("quoteDisplay");
// document.createElement("<div>
//     <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
//     <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
//     <button id="addQuote">Add Quote</button>
//   </div>").setAttribute("class", "form");

// console.log(displayContainer);
// }

// console.log(elManipulation());

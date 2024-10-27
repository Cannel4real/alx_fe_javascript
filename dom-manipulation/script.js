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
    
  displayContainer.innerHTML= `"${randomQuote.text}" - Category: ${randomQuote.category}`;
  }

newQuoteBtn.addEventListener("click", showRandomQuote);
console.log(showRandomQuote());
  

function addQuote() {
// Step 1: Create a container div for the form elements
const formContainer = document.createElement('div');

// Step 2: Create the input for the quote text
const newQuoteText = document.createElement('input');
newQuoteText.setAttribute('id', 'newQuoteText');
newQuoteText.setAttribute('type', 'text');
newQuoteText.setAttribute('placeholder', 'Enter a new quote');

// Step 3: Create the input for the quote category
const quoteCategoryInput = document.createElement('input');
quoteCategoryInput.setAttribute('id', 'newQuoteCategory');
quoteCategoryInput.setAttribute('type', 'text');
quoteCategoryInput.setAttribute('placeholder', 'Enter quote category');

// Step 4: Create the button to add the quote
const addQuoteButton = document.createElement('button');
addQuoteButton.innerText = 'Add Quote';
addQuoteButton.addEventListener('click', addQuote); // Attach the addQuote function as an event listener

// Step 5: Append the inputs and button to the form container
formContainer.appendChild(newQuoteText);
formContainer.appendChild(quoteCategoryInput);
formContainer.appendChild(addQuoteButton);

const text = document.getElementById('newQuoteText').value;
const category = document.getElementById('newQuoteCategory').value;


if (text && category) {
  quotes.push({ text, category });
  document.getElementById('newQuoteText').value = '';
  document.getElementById('newQuoteCategory').value = '';
  alert("Quote added successfully!");
} else {
  alert("Please enter both text and category.");
}

}
console.log(addQuote());


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

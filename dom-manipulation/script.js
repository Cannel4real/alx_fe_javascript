const newQuoteBtn = document.getElementById("newQuote");
const displayContainer = document.getElementById("quoteDisplay");
const addQuoteBtn = document.getElementById("addQuote");

const quotes = JSON.parse(localStorage.getItem('quotes')) || [
  { text: "The journey of a thousand miles begins with one step.", category: "Motivation" },
  { text: "Life is what happens when you’re busy making other plans.", category: "Life" },
];

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteDisplay = document.getElementById("randomQuote");
    
  displayContainer.innerHTML= `"${randomQuote.text}" - Category: ${randomQuote.category}`;
  }

newQuoteBtn.addEventListener("click", showRandomQuote);

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}
  

function addQuote() {

  function createAddQuoteForm() {
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
  } 
  createAddQuoteForm();


const text = document.getElementById('newQuoteText').value;
const category = document.getElementById('newQuoteCategory').value;


if (text && category) {
  quotes.push({ text, category });
  saveQuotes(); // Save updated quotes array to local storage
  document.getElementById('newQuoteText').value = '';
  document.getElementById('newQuoteCategory').value = '';
  alert("Quote added successfully!");
} else {
  alert("Please enter both text and category.");
}
}

addQuoteBtn.addEventListener("click", addQuote);

function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Create a temporary link to trigger download
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "quotes.json";
  downloadLink.click();

  URL.revokeObjectURL(url); // Free up memory after download
}

// Create the export button and append it to the page
const exportButton = document.createElement('button');
exportButton.innerText = "Export Quotes to JSON";
exportButton.addEventListener('click', exportToJsonFile);
document.body.appendChild(exportButton);

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    try {
      const importedQuotes = JSON.parse(event.target.result);

      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        saveQuotes();
        alert('Quotes imported successfully!');
      } else {
        alert('Invalid JSON format. Please upload a valid file.');
      }
    } catch (error) {
      alert('Error reading file: ' + error.message);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}



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

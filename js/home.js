// Auto-rotating travel quotes in the hero section
const quotes = [
  "\"The world is a book, and those who do not travel read only one page.\" – Saint Augustine",
  "\"Travel far enough, you meet yourself.\" – David Mitchell",
  "\"Not all those who wander are lost.\" – J.R.R. Tolkien",
  "\"Take only memories, leave only footprints.\"– Chief Seattle",
  "\"Wherever you go becomes a part of you somehow.\"– Anita Desai",
  "\"Adventure is worthwhile in itself.\" – Amelia Earhart"
];


let quoteIndex = 0;

const quoteElement = document.querySelector("#quote");


// Cycle to the next quote every 3 seconds
function rotateQuote() {
  quoteElement.textContent = quotes[quoteIndex];

  quoteIndex = (quoteIndex + 1) % quotes.length;
}

rotateQuote();

setInterval(rotateQuote, 3000);


// Destination of the Day (based on today's date)
const today = new Date().getDate();

const selected =
  destinations[today % destinations.length];

document.querySelector("#dayDestination").textContent =
  `${selected.name}, ${selected.country}`;

document.querySelector("#dayDescription").textContent =
  selected.description;
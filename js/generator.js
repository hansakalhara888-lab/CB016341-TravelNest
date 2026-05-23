// Elements
const generateBtn = document.querySelector("#generateBtn");
const result = document.querySelector("#tripResult");

let selectedTrip = null;


// Wishlist helpers
function getWishlist() {
  return JSON.parse(localStorage.getItem("travelnest_wishlist")) || [];
}

function saveWishlistData(wishlist) {
  localStorage.setItem("travelnest_wishlist", JSON.stringify(wishlist));
}


// Generate trip
generateBtn.addEventListener("click", generateTrip);

function generateTrip(animateAgain = false) {
  const type = document.querySelector("#travelType").value;
  const budget = document.querySelector("#budgetRange").value;

  // Filter destinations
  let matches = destinations.filter(destination => {
    return destination.type === type && destination.budget === budget;
  });

  if (matches.length === 0) {
    matches = destinations.filter(destination => {
      return destination.type === type;
    });
  }

  // Pick random trip
  selectedTrip = matches[Math.floor(Math.random() * matches.length)];

  // Display result
  result.innerHTML = `
    <h2>${selectedTrip.name}, ${selectedTrip.country}</h2>

    <img
      src="${selectedTrip.image}"
      alt="${selectedTrip.name}"
      onerror="this.src='https://via.placeholder.com/600x350?text=Image+Not+Available'"
    >

    <p>${selectedTrip.description}</p>

    <button id="againBtn" class="btn">
      Surprise Me Again
    </button>

    <button id="wishlistBtn" class="btn">
      Save to Wishlist
    </button>

    <p id="wishMsg" class="message"></p>
  `;

  const againBtn = document.querySelector("#againBtn");

  // Add bounce animation after button appears
  if (animateAgain) {
    setTimeout(() => {
      againBtn.classList.add("btn-bounce");
    }, 10);
  }

  // Remove bounce class after animation
  againBtn.addEventListener("animationend", () => {
    againBtn.classList.remove("btn-bounce");
  });

  // Generate another random trip
  againBtn.addEventListener("click", () => {
    generateTrip(true);
  });

  document.querySelector("#wishlistBtn").addEventListener("click", saveWishlist);
}


// Save to wishlist
function saveWishlist() {
  const wishlist = getWishlist();

  const alreadyExists = wishlist.some(item => {
    return (
      item.name === selectedTrip.name &&
      item.country === selectedTrip.country
    );
  });

  if (alreadyExists) {
    document.querySelector("#wishMsg").textContent = "Already in wishlist.";
    return;
  }

  wishlist.push(selectedTrip);

  saveWishlistData(wishlist);

  document.querySelector("#wishMsg").textContent = "Saved!";

  displayWishlist();
}


// Display wishlist
function displayWishlist() {
  const wishlist = getWishlist();
  const wishlistList = document.querySelector("#wishlistList");
  const emptyWishlistMsg = document.querySelector("#emptyWishlistMsg");

  wishlistList.innerHTML = "";

  if (wishlist.length === 0) {
    emptyWishlistMsg.style.display = "block";
    return;
  }

  emptyWishlistMsg.style.display = "none";

  wishlist.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>
        <strong>${item.name}</strong>, ${item.country}
        <span class="tag">${item.budget}</span>
      </span>

      <button class="btn delete-btn" onclick="removeWishlistItem(${index})">
        Remove
      </button>
    `;

    wishlistList.appendChild(li);
  });
}


// Remove item
function removeWishlistItem(index) {
  const wishlist = getWishlist();

  wishlist.splice(index, 1);

  saveWishlistData(wishlist);

  displayWishlist();
}


// Load wishlist on page start
displayWishlist();
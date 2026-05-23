// Ambient sound toggle buttons
const soundButtons = document.querySelectorAll(".sound-btn");
const audioPlayer = document.querySelector("#audioPlayer");

const sounds = {
  beach: "sounds/beach.mp3",
  forest: "sounds/forest.mp3",
  city: "sounds/city.mp3"
};

let currentSound = "";


// Capitalise the first letter of a sound name
function formatSoundName(sound) {
  return sound.charAt(0).toUpperCase() + sound.slice(1);
}


// Play or pause ambient sound
soundButtons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.dataset.sound;

    // Reset all button labels
    soundButtons.forEach(btn => {
      btn.textContent = `${formatSoundName(btn.dataset.sound)} Sound`;
    });

    // Toggle play/pause
    if (currentSound === sound && !audioPlayer.paused) {
      audioPlayer.pause();

      button.textContent =
        `${formatSoundName(sound)} Sound`;
    } else {
      currentSound = sound;

      audioPlayer.src = sounds[sound];
      audioPlayer.play();

      button.textContent =
        `Pause ${formatSoundName(sound)} Sound`;
    }
  });
});


// Destination tracker (visited / planned)
const trackBtn = document.querySelector("#trackBtn");
const trackList = document.querySelector("#trackList");


// Save a new destination entry
trackBtn.addEventListener("click", () => {
  const destination = document
    .querySelector("#trackDestination")
    .value
    .trim();

  const status = document.querySelector("#trackStatus").value;

  if (destination === "") return;

  const items = getFromLocalStorage("travelnest_tracker");

  // Check if already exists (case-insensitive)
  const alreadyExists = items.some(item => {
    return item.destination.toLowerCase() === destination.toLowerCase();
  });

  if (alreadyExists) {
    document.querySelector("#trackMsg").textContent =
      "This destination is already in your tracker!";
    return;
  }

  items.push({
    destination,
    status
  });

  saveToLocalStorage("travelnest_tracker", items);

  document.querySelector("#trackMsg").textContent = "";
  document.querySelector("#trackDestination").value = "";

  displayTracker();
});


// Render all tracker entries
function displayTracker() {
  const items = getFromLocalStorage("travelnest_tracker");

  trackList.innerHTML = "";

  items.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>
        ${item.destination} - ${item.status}
      </span>

      <button
        class="btn delete-btn"
        onclick="deleteTrackerItem(${index})"
      >
        Remove
      </button>
    `;

    trackList.appendChild(li);
  });
}


// Remove tracker entry
function deleteTrackerItem(index) {
  const items = getFromLocalStorage("travelnest_tracker");

  items.splice(index, 1);

  saveToLocalStorage("travelnest_tracker", items);

  displayTracker();
}


// Load tracker on page start
displayTracker();
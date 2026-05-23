// Destination Explorer: filter, cards, and modal
const grid = document.querySelector("#destinationGrid");
const searchInput = document.querySelector("#searchInput");
const continentFilter = document.querySelector("#continentFilter");

const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const closeModal = document.querySelector("#closeModal");


// Render destination cards from a given list
function displayDestinations(list) {
  grid.innerHTML = "";

  list.forEach(destination => {
    const card = document.createElement("div");

    card.className = "card destination-card";

    card.innerHTML = `
      <img
        src="${destination.image}"
        alt="${destination.name}"
        onerror="this.src='https://via.placeholder.com/600x350?text=Image+Not+Available'"
      >

      <h3>${destination.name}</h3>

      <p>
        ${destination.country} - ${destination.continent}
      </p>
    `;

    card.addEventListener("click", () => {
      openModal(destination);
    });

    grid.appendChild(card);
  });
}


// Filter destinations by search text and continent dropdown
function filterDestinations() {
  const search = searchInput.value.toLowerCase();
  const continent = continentFilter.value;

  const filtered = destinations.filter(item => {
    return (
      item.name.toLowerCase().includes(search) &&
      (continent === "all" || item.continent === continent)
    );
  });

  displayDestinations(filtered);
}


// Open the modal and populate it with destination details
function openModal(destination) {
  modalBody.innerHTML = `
    <h2>${destination.name}</h2>

    <p>${destination.description}</p>

    <h3>Popular Attractions</h3>
    <ul>
      ${destination.attractions.map(a => `<li>${a}</li>`).join("")}
    </ul>

    <h3>Travel Cost Comparison</h3>
    <table>
      <tr>
        <th>Budget Type</th>
        <th>Daily Cost</th>
      </tr>

      <tr>
        <td>Low</td>
        <td>$${destination.cost.low}</td>
      </tr>

      <tr>
        <td>Medium</td>
        <td>$${destination.cost.medium}</td>
      </tr>

      <tr>
        <td>High</td>
        <td>$${destination.cost.high}</td>
      </tr>
    </table>
  `;

  modal.style.display = "flex";
}


//  Close modal on button click
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


// Event listeners for filtering
searchInput.addEventListener("input", filterDestinations);
continentFilter.addEventListener("change", filterDestinations);


// Initial render of all destinations
displayDestinations(destinations);
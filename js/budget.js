// Trip Budget Planner
const budgetForm = document.querySelector("#budgetForm");
const totalCost = document.querySelector("#totalCost");
const budgetStatus = document.querySelector("#budgetStatus");
const progressBar = document.querySelector("#progressBar");
const saveBudget = document.querySelector("#saveBudget");

let currentBudget = null;

// Calculate total cost and determine budget tier on form submit
budgetForm.addEventListener("submit", e => {
  e.preventDefault();

  const destination = document.querySelector("#destination").value;
  const days = Number(document.querySelector("#days").value);
  const dailyBudget = Number(document.querySelector("#dailyBudget").value);
  const total = days * dailyBudget;

  // Classify budget tier based on daily spend
  let status = "Low";
  let progress = 35;

  if (dailyBudget >= 100 && dailyBudget < 200) {
    status = "Moderate";
    progress = 65;
  } else if (dailyBudget >= 200) {
    status = "Luxury";
    progress = 100;
  }

  totalCost.textContent = `Total Cost: $${total}`;
  budgetStatus.textContent = `Status: ${status}`;
  progressBar.style.width = `${progress}%`;

  currentBudget = {
    destination,
    days,
    dailyBudget,
    total,
    status
  };

  document.querySelector("#budgetMsg").textContent = "";
});

// Save current budget entry to localStorage
saveBudget.addEventListener("click", () => {
  if (!currentBudget) {
    document.querySelector("#budgetMsg").textContent =
      "Please calculate a budget first.";
    return;
  }

  const saved = getFromLocalStorage("travelnest_budgets");

  saved.push(currentBudget);

  saveToLocalStorage("travelnest_budgets", saved);

  document.querySelector("#budgetMsg").textContent =
    "Budget saved successfully!";

  currentBudget = null;

  displayBudgets();
});

// Render all saved budgets
function displayBudgets() {
  const saved = getFromLocalStorage("travelnest_budgets");
  const list = document.querySelector("#savedBudgetList");
  const emptyMsg = document.querySelector("#emptyBudgetMsg");

  list.innerHTML = "";

  if (saved.length === 0) {
    emptyMsg.style.display = "block";
    return;
  }

  emptyMsg.style.display = "none";

  saved.forEach((item, index) => {
    const li = document.createElement("li");

    li.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      margin-bottom: 10px;
      background: #f4f6f8;
      border-left: 5px solid var(--primary);
      border-radius: 10px;
    `;

    li.innerHTML = `
      <span>
        <strong>${item.destination} destinations</strong> —
        ${item.days} days @ $${item.dailyBudget} per day =
        <strong>Total cost: $${item.total}</strong>
        <span style="margin-left:8px; color: var(--muted);">
          (${item.status})
        </span>
      </span>

      <button class="btn delete-btn" onclick="removeBudget(${index})">
        Remove
      </button>
    `;

    list.appendChild(li);
  });
}

// Remove a saved budget by index
function removeBudget(index) {
  const saved = getFromLocalStorage("travelnest_budgets");

  saved.splice(index, 1);

  saveToLocalStorage("travelnest_budgets", saved);

  displayBudgets();
}

// Load saved budgets on page start
displayBudgets();

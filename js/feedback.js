// Feedback form validation and localStorage submission
const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Validate name length
  if (name.length < 2) {
    document.querySelector("#formMsg").textContent =
      "Please enter a valid name.";
    return;
  }

  // Basic email format check
  if (!email.includes("@")) {
    document.querySelector("#formMsg").textContent =
      "Please enter a valid email.";
    return;
  }

  // Validate message length
  if (message.length < 10) {
    document.querySelector("#formMsg").textContent =
      "Message must be at least 10 characters.";
    return;
  }

  // Save feedback entry to localStorage
  const feedback = getFromLocalStorage("travelnest_feedback");

  feedback.push({
    name,
    email,
    message
  });

  saveToLocalStorage("travelnest_feedback", feedback);

  document.querySelector("#formMsg").textContent =
    "Thank you! Your feedback was submitted.";

  feedbackForm.reset();
});


// FAQ accordion: toggle answer visibility on question click
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("open");
  });
});
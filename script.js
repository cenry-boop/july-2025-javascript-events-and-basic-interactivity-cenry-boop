// Part 1: Event Handling
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2: Interactive Elements (Counter)
let count = 0;
const counter = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// Part 3: Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form refresh

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const messages = [];

  // Name validation
  if (name === "") messages.push("Name is required.");

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) messages.push("Enter a valid email.");

  // Password validation
  if (password.length < 6) messages.push("Password must be at least 6 characters.");
  if (password !== confirmPassword) messages.push("Passwords do not match.");

  const formMessages = document.getElementById("form-messages");
  formMessages.innerHTML = "";

  if (messages.length > 0) {
    formMessages.style.color = "red";
    formMessages.innerHTML = messages.join("<br>");
  } else {
    formMessages.style.color = "green";
    formMessages.innerHTML = "Form submitted successfully!";
  }
});

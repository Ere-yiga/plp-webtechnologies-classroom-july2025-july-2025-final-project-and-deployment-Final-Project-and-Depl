document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {

    const errors = form.querySelectorAll(".error-message");
    errors.forEach((err) => err.remove());

    let valid = true;

    const nameInput = form.querySelector('input[type="text"]');
    if (!nameInput.value.trim()) {
      showError(nameInput, "Name is required");
      valid = false;
    }

    const emailInput = form.querySelector('input[type="email"]');
    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Enter a valid email address");
      valid = false;
    }

    const messageInput = form.querySelector("textarea");
    if (!messageInput.value.trim()) {
      showError(messageInput, "Message cannot be empty");
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.style.color = "red";
    error.style.fontSize = "0.95rem";
    error.style.marginTop = "6px";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }

  function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }
});

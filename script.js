// Countdown Timer Script
const countdownDate = new Date("Dec 5, 2024 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML =
    `Launching in: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

  if (distance < 0) {
    document.getElementById("countdown-timer").innerHTML = "Product Launched!";
  }
}

setInterval(updateCountdown, 1000);

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

$(document).ready(function () {
  let timerValue = $("#timer-value");

  let timeLeft = 1800;

  function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerValue.text(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timerValue.text("Время вышло!");
    }
  }

  let timerInterval = setInterval(updateTimer, 1000);
});

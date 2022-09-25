window.onload = () => {
  document.getElementById("vhs-button").addEventListener("click", () => {
    alert();
  });
  document.getElementById("play-button").addEventListener("click", () => {
    $(".buttons").hide();
    startTimer();
  });
};
function startTimer() {
  var seconds = 60;
  setInterval(function () {
    $(".timer").text(seconds);
    seconds = seconds - 1;
  }, 1000);
}
var questions = [
  {
    question: "what season do we meet the anointed one?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    corredtAnswerIndex: 1,
  },
  {
    question: "what season do we meet the anointed one?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    corredtAnswerIndex: 1,
  },
  {
    question: "what season do we meet the anointed one?",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    corredtAnswerIndex: 1,
  },
];

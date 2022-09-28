window.onload = () => {
  document.getElementById("vhs-button").addEventListener("click", () => {
    alert();
  });
  document.getElementById("play-button").addEventListener("click", () => {
    $(".buttons").hide();
    $(".timer").show();
    $(".questions").removeClass("hide");
    startTimer();
    askQuestion(currentIndex);
  });
};
function startTimer() {
  var seconds = 100;
  setInterval(function () {
    $(".timer").text(seconds);
    seconds = seconds - 1;
  }, 1000);
}
var currentIndex = 0;
function askQuestion(index) {
  $("#question").html(questions[index].question);
  $("#answer-a").html(questions[index].answers[0]);
  $("#answer-b").html(questions[index].answers[1]);
  $("#answer-c").html(questions[index].answers[2]);
  $("#answer-d").html(questions[index].answers[3]);
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

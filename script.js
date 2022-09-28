var seconds;
var currentIndex = 0;
var timer;
var answersCorrect;
window.onload = () => {
  document.getElementById("vhs-button").addEventListener("click", () => {
    $(".vhs").removeClass("hide");
    $(".buttons").hide();
    var scores = localStorage.scores ? JSON.parse(localStorage.scores) : [];
    var highScores = scores.map(function (score) {
      return (
        "<p>" +
        score.initials +
        " - " +
        score.score +
        "/" +
        questions.length +
        "</p>"
      );
    });
    $("#scores").html(highScores.join(""));
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
  seconds = 100;
  answersCorrect = 0;
  timer = setInterval(function () {
    if (seconds < 0) {
      clearInterval(timer);
    } else {
      $(".timer").text(seconds);
      seconds = seconds - 1;
    }
  }, 1000);
}
function answerQuestion(index) {
  if (index === questions[currentIndex].correctAnswerIndex) {
    alert("5 by 5!");
    answersCorrect = answersCorrect + 1;
  } else {
    alert("Incorrect");
    seconds = seconds - 10;
  }
  if (currentIndex < questions.length - 1) {
    currentIndex = currentIndex + 1;
    askQuestion(currentIndex);
  } else {
    clearInterval(timer);
    $(".timer").addClass("hide");
    $(".ehs").removeClass("hide");
    $(".questions").addClass("hide");
    alert(`You Scored ${answersCorrect}/${questions.length}`);
  }
}
function saveScore() {
  var initials = $("#initials").val();
  var scores = localStorage.scores ? JSON.parse(localStorage.scores) : [];
  if (!!initials) {
    scores.push({
      score: answersCorrect,
      initials,
    });
    localStorage.setItem("scores", JSON.stringify(scores));
  }
}

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
    answers: ["season 4", "season 3", "season 2", "season 1"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "who said the line “that’s me favorite shirt, that’s me only shirt!”",
    answers: ["spike", "ripper", "kendra", "jenny"],
    correctAnswerIndex: 2,
  },
  {
    question: "what monster babe did xander NOT date?",
    answers: [
      "she-mantis",
      "1000 year old vengeance demon",
      "uber-vamp",
      "inca mummy girl",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "what is the acronym for joyce's anti monster group?",
    answers: ["MOO", "MOB", "MOM", "MOPE"],
    correctAnswerIndex: 0,
  },
];

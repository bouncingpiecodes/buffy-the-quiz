var seconds;
var currentIndex = 0;
var timer;
var answersCorrect;

function showVhs() {
  $(".ehs").addClass("hide");
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
}
function playGame() {
  $(".buttons").hide();
  $(".timer").removeClass("hide");
  $(".questions").removeClass("hide");
  $(".vhs").addClass("hide");
  $(".out-of-time").addClass("hide");
  currentIndex = 0;
  startTimer();
  askQuestion(currentIndex);
}
function startTimer() {
  seconds = 120;
  answersCorrect = 0;
  $(".seconds").text(seconds);
  seconds = seconds - 1;
  timer = setInterval(function () {
    if (seconds < 0) {
      clearInterval(timer);
      gotStaked();
    } else {
      $(".seconds").text(seconds);
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
    if (seconds < 0) {
      gotStaked();
    }
  }
  if (currentIndex < questions.length - 1) {
    currentIndex = currentIndex + 1;
    askQuestion(currentIndex);
  } else {
    clearInterval(timer);
    $(".questions").addClass("hide");
    $(".timer").addClass("hide");
    if (answersCorrect === 0) {
      return gotStaked();
    }
    $(".ehs").removeClass("hide");
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
    var topScores = _.orderBy(scores, ["score"], ["desc"]);
    localStorage.setItem("scores", JSON.stringify(topScores));
    showVhs();
  }
}
function unique(array) {
  return $.grep(array, function (el, index) {
    return index == $.inArray(el, array);
  });
}
function gotStaked() {
  $(".timer").addClass("hide");
  $(".questions").addClass("hide");
  $(".out-of-time").removeClass("hide");
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
    question: "What season do we meet 'The Anointed One?'",
    answers: ["season 4", "season 3", "season 2", "season 1"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Who said the line “that’s me favorite shirt, that’s me only shirt!”",
    answers: ["Spike", "Ripper", "Kendra", "Jenny"],
    correctAnswerIndex: 2,
  },
  {
    question: "What monster babe did Xander NOT date?",
    answers: [
      "she-mantis",
      "1000 year old vengeance demon",
      "uber-vamp",
      "inca mummy girl",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the acronym for Joyce's anti monster group?",
    answers: ["MOO", "MOB", "MOM", "MOPE"],
    correctAnswerIndex: 0,
  },
  {
    question: "How long was Faith in a coma for?",
    answers: ["3 months", "8 months", "1 year", "2 years"],
    correctAnswerIndex: 1,
  },
  {
    question: "In season 4, why does Spike return to Sunnydale??",
    answers: [
      "to kill the slayer once and for all",
      "to get revenge on drusilla",
      "to get his soul back",
      "to get the gem of amarra",
    ],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Speaking of season 4, who appears in all of the scoobies dreams THE MOST?",
    answers: [
      "Principal Snyder",
      "The Master",
      "The Cheese Man",
      "The First Slayer",
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      "In the episode 'Halloween' what ritual did Ethan Rayne perform to cause chaos by forcing everyone to literally become whatever costume they were wearing?",
    answers: [
      "ritual of janus",
      "ritual of chaos",
      "ritual of neverborn",
      "ritual on manon",
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "What baby animal did Clem the demon stop eating?",
    answers: ["puppies", "birds", "bunnies", "kittens"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "What instrument does Jonathan play at the bronze in the episode 'Superstar'?",
    answers: ["trumpet", "guitar", "trombone", "keyboard"],
    correctAnswerIndex: 0,
  },
  {
    question: "Why did Buffy get expelled from her previous school?",
    answers: [
      "Smacking a teacher",
      "Starting a food fight",
      "Setting the gym on fire",
      "Staking the prinipal",
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Who listed below was NOT one of the big bads?",
    answers: ["Mr. Trick", "The Mayor", "Angelus", "Glory"],
    correctAnswerIndex: 0,
  },
  {
    question: "Which famous celeb DIDNT make a guest appearance?",
    answers: ["John Ritter", "Amy Adams", "Ashanti", "Hanson"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "What cute little creature trinkets does Harmony love to collect? ",
    answers: ["butterflies", "unicorns", "puppies", "horses"],
    correctAnswerIndex: 1,
  },
  {
    question:
      "AND finally, is Xander the absolute WORST character? Like even more so than Riley?",
    answers: [
      "Yes",
      "Absolutely",
      "Does the word DUH mean anything to you?",
      "All Of The Above",
    ],
    correctAnswerIndex: 3,
  },
];

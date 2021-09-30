var readlineSync = require("readline-sync")

var score = 0;

// input >> processing >> output
var userName = readlineSync.question("What's your name?\n");

console.log("\nWelcome  " + userName + "  to Do You Know Ambareesh?");


// data of high score
var highScores = [
  {
    name: "Ambareesh",
    score: 10,
  },

  {
    name: "Sandeep",
    score: 9,
  },

  {
    name: "Mani",
    score: 9,
  },
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { // branching
    console.log("\nYay, you got it right!");
    score = score + 2;

  } else {
    console.log("\nOops, you got it wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------\n")
}

// array of objects
var questions = [
  {
    question: "\nWhere do I live?\n",
    answer: "Bangalore"
  },
  {
    question: "\nIn which year I was born?\n",
    answer: "1998"
  },
  {
    question: "\nWhich is my favourite Sport?\n",
    answer: "Kabbadi"
  },
  {
    question: "\nWhich is my favourite TV series?\n",
    answer: "Money Heist"
  },
  {
    question: "\nWhich is my favourite dish?\n",
    answer: "Biriyani"
  }
];

// loop
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("Woohooo! You SCORED: ", score);

console.log("--------\nCheck out the top scores and send me a screenshot if you've beaten them!\n")

console.log("Name\t\tScore")
for(var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + "\t\t" + highScores[i].score);
}

console.log("\nThank you for taking the quiz!")
console.log("security_questions.js loaded");

var securityQuestions = [{
  question: "What is your favorite movie?",
  expectedAnswer: "into the wild"
},
{
  question: "What was your favorite food as a child?",
  expectedAnswer: "pizza"
}];


for (var i = 0; i < securityQuestions.length; i++) {
  var answer = prompt(securityQuestions[i].question);
   if (answer != securityQuestions[i].expectedAnswer){
      alert("Stop asking questions!");
     break;
   }
}

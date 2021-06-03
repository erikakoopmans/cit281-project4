const {data} = require("./p4-data.js");

function getQuestions() {
    let questionArray = [];
    for(i=0; i<data.length; i++) {
        questionArray.push(data[i].question);
    }
    return questionArray;
};

function getAnswers() {
    let answerArray = [];
    for(i=0; i<data.length; i++) {
        answerArray.push(data[i].answer);
    }
    return answerArray;
};

function getQuestionsAnswers() {
    let newData = [...data];
    return newData;
}

function getQuestion(number = "") {
    let certainQuestion = {
        question: '',
        number: '',
        error: ''
      };
    //if the question > 3
    if(number > 3){
      certainQuestion.error = 'Question number must be less than the number of questions (3)';
    } else if (number < 1 && typeof(number) == "number") {
    //if the question < 1
      certainQuestion.error = 'Question number must be >= 1';
    } else if (number === "") {
    //if the question isn't asigned
      certainQuestion.error = 'Question number must be an integer';
    } else {
      certainQuestion.question = data[number-1].question;
      certainQuestion.number = parseInt(number);
    }
      return certainQuestion;
}

function getAnswer(number = "") {
    let certainAnswer = {
        answer: '',
        number: '',
        error: ''
      };
    //if the answer > 3
    if(number > 3){
      certainAnswer.error = 'Answer number must be less than the number of questions (3)';
    } else if (number < 1 && typeof(number) == "number") {
    //if the answer < 1
      certainAnswer.error = 'Answer number must be >= 1';
    } else if (number === "") {
    //if the answer isn't asigned
      certainAnswer.error = 'Answer number must be an integer';
    } else {
      certainAnswer.answer = data[number-1].answer;
      certainAnswer.number = parseInt(number);
    }
      return certainAnswer;
}

function getQuestionAnswer(number = "") {
    let certainQuestionAnswer = {
        question: '',
        answer: '',
        number: '',
        error: ''
      };
    //if the question and answer > 3
    if(number > 3){
      certainQuestionAnswer.error = 'Question number must be less than the number of questions (3)';
    } else if (number < 1 && typeof(number) == "number") {
    //if the question and answer < 1
      certainQuestionAnswer.error = 'Question number must be >= 1';
    } else if (number === "") {
    //if the question and answer isn't asigned
      certainQuestionAnswer.error = 'Question number must be an integer';
    } else {
      certainQuestionAnswer.question = data[number-1].question;
      certainQuestionAnswer.answer = data[number-1].answer;
      certainQuestionAnswer.number = parseInt(number);
    }
      return certainQuestionAnswer;
}


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false; 
  const testGetA = false; 
  const testGetQA = false; 
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions, getAnswers, getQuestionsAnswers, 
    getQuestion, getAnswer, getQuestionAnswer
  };
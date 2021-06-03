const fastify = require("fastify")();
const {getQuestions, getAnswers, getQuestionsAnswers, 
    getQuestion, getAnswer, getQuestionAnswer} = require("./p4-module.js")
;

fastify.get("/cit/question", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: '', statusCode: 200, questions: getQuestions()});
});

fastify.get("/cit/answer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: '', statusCode: 200, answers: getAnswers()});
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: '', statusCode: 200, questions_answers: getQuestionsAnswers()});
});

    fastify.get("/cit/question/:number", (request, reply) => {
    let {number} = request.params;
    let quest = getQuestion(number);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: quest.error, statusCode: 200, question: quest.question, number: number});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    let {number} = request.params;
    let ans = getAnswer(number);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: ans.error, statusCode: 200, answer: ans.answer, number: number});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let {number} = request.params;
    let quest = getQuestionAnswer(number);
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: quest.error, statusCode: 200, question: quest.question, answer: quest.answer, number: number});
});

fastify.get("*", (request, reply) => {
    reply
        .code(404)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: "Route not found",
        statusCode: 404});
});

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
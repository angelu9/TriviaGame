var trivia = [
    {
        question: "What year were the New England Patriots founded?",
        answers: ["1940", "1950", "1960", "1970",],
        rightAnswer: "1960",

    },
    {
        question: "What was the New England Patriots original name?",
        answers: ["The New England Patriots", "The Boston Patriots", "The Bay State Patriots", "The Eastern Patriots,"],
        rightAnswer: "The Boston Patriots",
    },
    {
        question: "What quarterback did Tom Brady replace in 2001, eventually leading the New England Patriots to a Super Bowl championship?",
        answers: ["Drew Bledsoe", "Jim Plunkett", "Doug Flutie", "Tony Eason",],
        rightAnswer: "Drew Bledsoe",
    },
    {
        question: "What is the name of the stadium that the New England Patriots call home?",
        answers: ["Heinz Field", "AT&T Stadium", "Gillete Stadium", "Lambeau Field",],
        rightAnswer: "Gillete Stadium",
    },
    {
        question: "What season did the Patriots make their first Super Bowl appearance",
        answers: ["1971", "1995", "2001", "1985",],
        rightAnswer: "1985",
    },
    {
        question: "How many Super Bowl championships have the New England Patriots won?",
        answers: ["1", "6", "3", "5",],
        rightAnswer: "6",
    },
    {
        question: "Where did Tom Brady went to college?",
        answers: ["Michigan", "Alabama", "UCLA", "UCF",],
        rightAnswer: "Michigan",
    },
    {
        question: "Who is the greatest quarterback of all time?",
        answers: ["Tom Brady", "Tom Brady", "Tom Brady", "Tom Brady",],
        rightAnswer: "Tom Brady",
    },

];

var card = $("#game");

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {

            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time Left: <span id='counter-number'>120</span> Seconds</h2>"
        );

        $(".btn").remove();

        for (var i = 0; i < trivia.length; i++) {
            card.append("<h2>" + trivia[i].question + "</h2>");
            for (var j = 0; j < trivia[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + trivia[i].answers[j] + "''>" + trivia[i].answers[j]);
            }
        }

        
});



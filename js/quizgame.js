//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questões funcionam para que nossa função getQuestion mais tarde possa obter o valor correto do array

let questions = [{
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/capitamarvel.jpg",
    choiceA: "Mulher Maravilha",
    choiceB: "Capitã Marvel",
    choiceC: "Viúva Negra",
    choiceD: "Gamora",
    correctAnswer: "B"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/capitaoamerica.jpg",
    choiceA: "Homem de Ferro",
    choiceB: "Homem Aranha",
    choiceC: "Capitão America",
    choiceD: "Visão",
    correctAnswer: "C"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/drdestino.jpg",
    choiceA: "Ronan",
    choiceB: "Loki",
    choiceC: "Dr. Destino",
    choiceD: "Wolverine",
    correctAnswer: "C"
},{
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/drstrange.jpg",
    choiceA: "Dr. Estranho",
    choiceB: "Thor",
    choiceC: "Professor Xavier",
    choiceD: "Luke Cage",
    correctAnswer: "A"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/galactus.jpg",
    choiceA: "Galactus",
    choiceB: "Magneto",
    choiceC: "Ultron",
    choiceD: "Ghost",
    correctAnswer: "A"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/groot.jpg",
    choiceA: "Rocket",
    choiceB: "Homem Árvore",
    choiceC: "Weasel",
    choiceD: "Groot",
    correctAnswer: "D"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/ironman.jpg",
    choiceA: "Falcão Negro",
    choiceB: "Homem Formiga",
    choiceC: "Weasel",
    choiceD: "Homem de Ferro",
    correctAnswer: "D"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/loki.jpg",
    choiceA: "Venom",
    choiceB: "Doutor Destino",
    choiceC: "Loki",
    choiceD: "Corvus Glave",
    correctAnswer: "C"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/mercenario.jpg",
    choiceA: "Magneto",
    choiceB: "Mercenário",
    choiceC: "Fauce de Ébano",
    choiceD: "Supergigante",
    correctAnswer: "B"
}, {
     question: "Quem é esse personagem?",
    imgSrc: "img/marvel/mistica.jpg",
    choiceA: "Jean Gray",
    choiceB: "Viúva Negra",
    choiceC: "Feiticeira Escarlate",
    choiceD: "Mística",
    correctAnswer: "D"
}, {
     question: "Quem é esse personagem?",
    imgSrc: "img/marvel/mulherhulk.jpg",
    choiceA: "Capitã Marvel",
    choiceB: "Mulher Lanterna Verde",
    choiceC: "Aquawoman",
    choiceD: "Mulher Hulk",
    correctAnswer: "D"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/panteranegra.jpg",
    choiceA: "Falcão Negro",
    choiceB: "Corvus Glaive",
    choiceC: "Venom",
    choiceD: "Pantera Negra",
    correctAnswer: "D"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/soldadoinvernal.jpg",
    choiceA: "Soldado Invernal",
    choiceB: "Pantera Negra",
    choiceC: "Ciborg",
    choiceD: "Galactus",
    correctAnswer: "A"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/thanos.jpg",
    choiceA: "Estrela Negra",
    choiceB: "Thanos",
    choiceC: "Cisne Negro",
    choiceD: "Ronan",
    correctAnswer: "B"
}, {
    question: "Quem é esse personagem?",
    imgSrc: "img/marvel/wolverine.jpg",
    choiceA: "Galactus",
    choiceB: "Corvus Glaive",
    choiceC: "Venom",
    choiceD: "Wolverine",
    correctAnswer: "D"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// Visualizar score

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> Você marcou " + score + " de 15!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Ops!!!<p> Muito Ruim!<p> Você precisa se atualizar no Mundo Marvel.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Muito Bom!<p> Mas você pode melhorar ainda mais.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Parabéns!!!<p> Ótimo trabalho!<p> Você realmente conhece todos os Personagens do Mundo Marvel!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function que checa se a resposta está correta

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorreto!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
const quizData = [
    {
        question: 'How old is Iman?',
        a: '30',
        b: '19',
        c: '22',
        d: '70',
        correct: 'c',
    }, {
        question: 'What is the best programming language?',
        a: 'Python',
        b: 'JavaScript',
        c: 'Java',
        d: 'C#',
        correct: 'a',
    }, {
        question: 'Who is the President of the US in 2023?',
        a: 'Mario',
        b: 'Harry Potter',
        c: 'Joe Biden',
        d: 'Torotoro',
        correct: 'c',
    }, {
        question: 'Aureolin is a shade of what color?',
        a: 'Blue',
        b: 'Green',
        c: 'Red',
        d: 'Yellow',
        correct: 'd',
    }, {
        question: 'Which planet has the most moons?',
        a: 'Earth',
        b: 'Saturn',
        c: 'Uranus',
        d: 'Pluto',
        correct: 'b',
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;


loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuestion++;

    loadQuiz();
})
const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'In which year JavaScript was launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'NOT',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'NOT',
        'correct': 'b'
    },
];

let index = 0;
let total = questions.length;
let correct = 0;
let incorrect = 0;
const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que}`;
    // When id is class is assigned to input
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // optionInputs[0].innerText = data.a;
    // optionInputs[1].innerText = data.b;
    // optionInputs[2].innerText = data.c;
    // optionInputs[3].innerText = data.d
}

const submitQuiz = () => {
    console.log('submitted')
    const data = questions[index];
    const ans = getAnswer();
    if ( ans === data.correct) {
        correct++;
    }
    else {
        incorrect++; 
    }

    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let anwer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                console.log('Yes')
                answer = input.value;
            } else {
                console.log('No')
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <div style="text-align:center;">
            <h1>You have submitted the quizz</h1>
            <h2> ${correct} / ${total} are correct. </h2>
        </div>
    `
}

// initial call
loadQuestion( )
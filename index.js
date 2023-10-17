
import questions from "./questions/questions.js";
import MyButton from "./components/UI/MyButton.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/main.js";
import PrograssLine from "./components/PrograssLine.js"

let NUMBER_OF_QUESTIONS = 5;
const THEMES = {};
let TOPICAL_QUESTIONS = [];
let RESULT = [];
let CURRENT_QUESTION = [];


const body = document.body;
const root = document.querySelector('.root');
const App = document.createElement('div');
App.className = 'App'

App.append(Header());
App.append(PrograssLine())
App.append(Main());
App.append(Footer());
root.append(App);

// функции селектора
const actionForSelector = {
    radio: (num, event) => {
        const optionsCont = event.target.closest('.custom-select__options-contaner');
        const selectorHeader = optionsCont.parentElement.previousElementSibling
        const optionsChildren = optionsCont.children;

        for (const el of optionsChildren) {
            el.classList.remove('aclive')
        }
        const options = event.target.closest('.custom-select__options');
        options.classList.add('aclive');

        selectorHeader.innerHTML = num;
        NUMBER_OF_QUESTIONS = num
    },
    checkbox: (num, event) => {
        (THEMES[num]) ? THEMES[num] = !THEMES[num] : THEMES[num] = true
        const options = event.target.closest('.custom-select__options');
        options.classList.toggle('aclive');
    }
}

// создает колекцию выбранных в селекторе вопросов
const createСollectionOfSelectedQuestions = (allQuestions, SelectedQuestions) => {

    if (SelectedQuestions.length === 0) return;
    const keysOfSelectedQuestions = Object.keys(SelectedQuestions);
    let result = []
    for (const el of keysOfSelectedQuestions) {
        if (SelectedQuestions[el] === true) {
            result = [...result, ...allQuestions[el].list]
        }
    }
    return result;
}

// преобразует коллекцию с учетом количества вопросов и рандомной выборки
const getRandomQuestion = (arr, numOrAll) => {

    const num = (numOrAll === 'All') ? arr.length : numOrAll;
    if (arr.length === 0) { return }
    const newArr = [...arr];
    let result = [];
    const numOfQuestions = Number(num);
    for (let i = 0; i < numOfQuestions; i++) {
        const aisle = newArr.length;
        const randomIndex = Math.floor(Math.random() * aisle);
        const randoQuestion = newArr.splice(randomIndex, 1);
        result.push(...randoQuestion);
    }

    TOPICAL_QUESTIONS = [...result];

}

// обновление main
const uploadMain = () => {
    const main = document.querySelector('.main__content');
    main.innerText = `${TOPICAL_QUESTIONS[0].question}`
}

const uploadCarent = () => {

    if (TOPICAL_QUESTIONS.length === 0) {
        createAndDisplayTestResults(RESULT)

        const btnOk = document.querySelector('.my-batton__ok');
        const btnSkip = document.querySelector('.my-batton__skip');
        const myInput = document.querySelector('.my-input');
        btnOk.setAttribute("disabled", "disabled");
        btnSkip.setAttribute("disabled", "disabled");
        myInput.setAttribute("disabled", "disabled");

        const header = document.querySelector('.header');
        header.append(MyButton('Повторить', 'repeat'));


        return;
    }
    uploadMain();
    const topicalQuestion = TOPICAL_QUESTIONS.splice(0, 1)
    CURRENT_QUESTION = [...topicalQuestion]


}

const skipQuestion = () => {
    if (CURRENT_QUESTION.length === 0) {
        console.log('Отменить пропуск')
        return;
    }
    TOPICAL_QUESTIONS.push(...CURRENT_QUESTION)
    CURRENT_QUESTION.splice(0, 1)
    uploadCarent()
}


const compareAnswerAndValue = (answer, userResponse) => {
    let counter = 0;
    const str1 = answer.toLowerCase().trim();
    const str2 = userResponse.toLowerCase().trim();

    for (let i = 0; i < str1.length; i++) {

        if (str1[i] !== str2[i]) {
            counter++;
        }
    }
    return counter <= 2 ? true : false;
}

// создает обект с ответом пользователя и статусом вернно/неверно

const countTheAnswer = ([currentQuestion], userResponse) => {

    const { question, answer } = currentQuestion
    currentQuestion.userResponse = userResponse

    if (compareAnswerAndValue(answer, userResponse)) {
        currentQuestion.status = true;
    } else {
        currentQuestion.status = false;
    }
    RESULT.push(currentQuestion)

}

const createAndDisplayTestResults = (resultArr) => {

    let correctAnswer = 0;
    let wrongAnswer = 0;

    const main = document.querySelector('.main__content');
    main.innerHTML = '';
    for (const el of resultArr) {

        const resultItem = document.createElement('div')

        let color = '';
        if (el.status) {
            correctAnswer += 1;
            color = 'rgb(232 255 225)'
        }
        else {
            wrongAnswer += 1;
            color = 'rgb(255 225 225)'
        }

        resultItem.innerHTML =
            `<p> Вопрос: ${el.question}<p/>
        <p> Правильный ответ: ${el.answer}<p/>
        <p> Ваш ответ: ${el.userResponse}<p/>`

        resultItem.style.backgroundColor = color
        resultItem.className = 'main__content__result'
        main.append(resultItem)
    }

    const testResults = document.createElement('div')
    testResults.className = 'testResults'
    testResults.innerText =
        `Правильных ответов: ${correctAnswer}; Неправильных ответов: ${wrongAnswer}`;
    main.prepend(testResults
    )
}

const clearInput = () => {
    const input = document.querySelector(`.my-input`)
    input.value = ''

}

// блок прогресса

const createProgresLine = (TOPICAL_QUESTIONS) => {
    const length = TOPICAL_QUESTIONS.length;
    const prograssLine = document.querySelector('.prograss-line')

    for (let i = 0; i <= length; i++) {
        const div = document.createElement('div');
        div.className = 'prograss-line-sector';
        div.classList.add('grey-line');
        prograssLine.append(div);
    }
    setTimeout(() => {

        prograssLine.firstChild.classList.add('red-line');
        prograssLine.firstChild.classList.remove('grey-line');
    }, 200)

}

const addRedLine = () => {
    const greyLine = document.querySelector('.grey-line')

    greyLine.classList.add('red-line');
    greyLine.classList.remove('grey-line');
}

// Обработчик событий
document.addEventListener('click', (event) => {

    if (event.target.closest('.custom-select__options')) {

        const options = event.target.closest('.custom-select__options');
        let type = options.dataset.type;

        if (!type) { return };

        actionForSelector[type](options.dataset.value, event);


        if (type === 'checkbox') {
            const btnStart = document.querySelector('.my-batton__start');
            btnStart.removeAttribute('disabled');
        }

    }

    if (event.target.closest('.custom-select__header')) {
        const selectorHeader = event.target.closest('.custom-select__header');

        const selectorBody = selectorHeader.nextElementSibling;
        selectorBody.hidden = !selectorBody.hidden;
    }

    if (!event.target.closest('.custom-select')) {
        const selectorBody = document.querySelectorAll('.custom-select__body');

        for (const el of selectorBody) { el.hidden = true };
    }

    if (event.target.closest('.my-batton__start')) {

        const newArr = getRandomQuestion(
            createСollectionOfSelectedQuestions(questions, THEMES), NUMBER_OF_QUESTIONS
        )

        uploadCarent()


        const btnStart = event.target.closest('.my-batton__start')
        btnStart.setAttribute('disabled', 'disabled')

        createProgresLine(TOPICAL_QUESTIONS)

        // ------------------------Поменять
        const selectHeaders = document.querySelectorAll('.custom-select__header');

        for (const el of selectHeaders) {
            el.classList.remove('custom-select__header')
            el.classList.add('custom-select__header_disabled')

        }
        // ------------------------Поменять
        const myInput = document.querySelector('.my-input');
        const btnOk = document.querySelector('.my-batton__ok');
        const btnSkip = document.querySelector('.my-batton__skip');
        btnOk.removeAttribute('disabled')
        btnSkip.removeAttribute('disabled')
        myInput.removeAttribute('disabled')

    }

    if (event.target.closest('.my-batton__ok')) {
        const input = document.querySelector(`.my-input`)
        const inputValue = input.value

        if (inputValue === '') {
            input.style.backgroundColor = '#fbb3b3';
            setTimeout(() => {
                input.style = '';
            }, 300)

            return
        }

        countTheAnswer(CURRENT_QUESTION, inputValue)
        uploadCarent()
        clearInput()
        addRedLine()
    }

    if (event.target.closest('.my-batton__skip')) {
        skipQuestion()
        clearInput()

    }

    if (event.target.closest('.my-batton__repeat')) {
        location.reload()
    }

})


document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        const input = document.querySelector(`.my-input`)
        const inputValue = input.value

        if (inputValue === '') { return }

        countTheAnswer(CURRENT_QUESTION, inputValue)
        uploadCarent()
        clearInput()
        addRedLine()
    }
})

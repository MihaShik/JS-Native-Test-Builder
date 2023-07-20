
import questions from "./questions/questions.js";
import MySelect from "./components/MySelect1.js"
import MyButton from "./components/UI/MyButton.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/main.js";




let NUMBER_OF_QUESTIONS = 5;
const THEMES = {};
let TOPICAL_QUESTIONS = [];
let RESULT = [];
let CURRENT_QUESTION = [];


const body = document.body
const root = document.querySelector('.root');
const App = document.createElement('div');
App.className = 'App'

App.append(Header());
App.append(Main());
App.append(Footer());
root.append(App)

// функции селектора
const actionForSelector = {
    radio: (num, event) => {
        const optionsCont =  event.target.closest('.custom-select__options-contaner');
        const optionsChildren =  optionsCont.children;
        for (const el of optionsChildren){
            el.classList.remove('aclive')
        }
        const options =  event.target.closest('.custom-select__options');
        options.classList.add('aclive');
        NUMBER_OF_QUESTIONS = num
    },
    checkbox: (num, event) => {
        (THEMES[num])? THEMES[num] = !THEMES[num]: THEMES[num] = true
        const options =  event.target.closest('.custom-select__options');
        options.classList.toggle('aclive');
    }
}

// создает колекцию выбранных в селекторе вопросов
const createСollectionOfSelectedQuestions = (allQuestions, SelectedQuestions) => {
    
    if (SelectedQuestions.length === 0) return;

    const keysOfSelectedQuestions = Object.keys(SelectedQuestions);
    
    let result = []

    for (const el of keysOfSelectedQuestions){
        if (SelectedQuestions[el] === true){
            result  = [...result, ...allQuestions[el].list]
        }
    }
    return result;
}

// преобразует коллекцию с учетом количества вопросов и рандомной выборки
const getRandomQuestion = (arr, num) => {

    if (arr.length === 0){ return }

    const newArr = [...arr];
    let result = [];
    const numOfQuestions = Number(num);
    

    for (let i = 0; i < numOfQuestions; i++) {

        const aisle = newArr.length;
        const randomIndex = Math.floor(Math.random() * aisle);
        const randoQuestion =  newArr.splice(randomIndex, 1);
        result.push(...randoQuestion) ;
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
        console.log('Вопросы кончились')
        return;
    }
    uploadMain();
    const topicalQuestion = TOPICAL_QUESTIONS.splice(0, 1)
    CURRENT_QUESTION = [...topicalQuestion]
        
    console.log(TOPICAL_QUESTIONS)
}

const skipQuestion = () => {
    if (CURRENT_QUESTION.length === 0) {
        console.log('Отменить пропуск')
        return;
    }
    TOPICAL_QUESTIONS.push(...CURRENT_QUESTION)
    CURRENT_QUESTION.splice(0, 1)
    uploadCarent()

    console.log(TOPICAL_QUESTIONS)
 }

// создает обект с ответом пользователя и статусом вернно/неверно

 const countTheAnswer = ([currentQuestion], userResponse) => {
    const {question, answer} = currentQuestion
    currentQuestion.userResponse = userResponse
 if (answer.toLowerCase().trim() === userResponse.toLowerCase().trim()){
    currentQuestion.status = true;
 } else {currentQuestion.status = false;}
    RESULT.push(currentQuestion)
    console.log(RESULT)
 }

const createAndDisplayTestResults = (resultArr) => {

    let correctAnswer = 0;
    let wrongAnswer = 0;

    const main = document.querySelector('.main__content');
    main.innerHTML = '';
    for (const el of resultArr) {
        
        const resultItem = document.createElement('div')

        let color ='';
        if(el.status) {
            correctAnswer += 1;
            color = '#a6ff8b'
        }
        else { 
            wrongAnswer += 1;
            color ='#ff8b8b'
        }
        
        resultItem.innerHTML =
        `<p> Вопрос: ${el.question}<p/>
        <p> Правильный ответ: ${el.answer}<p/>
        <p> Ваш ответ: ${el.userResponse}<p/>`

        resultItem.style.backgroundColor = color
        resultItem.className = 'main__content__result'
        main.append(resultItem)
    }

    main.prepend(
    `Правильных ответов: ${correctAnswer}
    Неправильных ответов: ${wrongAnswer}`
    )
}

const clearInput = () => {
    const input = document.querySelector(`.my-input`)
    input.value = ''
   
}


 document.addEventListener('click', (event) => {
  
    if(event.target.closest('.custom-select__options')){
        
        const options =  event.target.closest('.custom-select__options');
        let type = options.dataset.type;
        if (!type){return}
            actionForSelector[type](options.dataset.value, event)
            
            const btnStart = document.querySelector('.my-batton__start');
            btnStart.removeAttribute('disabled')

           
    }

    if(event.target.closest('.custom-select__header')){
       const selectorHeader =  event.target.closest('.custom-select__header');
       console.log(selectorHeader)
       const selectorBody = selectorHeader.nextElementSibling
       selectorBody.hidden = !selectorBody.hidden
    }

    if(!event.target.closest('.custom-select')){
      const selectorBody = document.querySelectorAll('.custom-select__body')
      console.log(selectorBody)
      for(const el of selectorBody){ el.hidden = true}
    }

    if (event.target.closest('.my-batton__start')) {
        
        const newArr = getRandomQuestion(
            createСollectionOfSelectedQuestions(questions, THEMES), NUMBER_OF_QUESTIONS
            )

        uploadCarent()


        const btnStart = event.target.closest('.my-batton__start')
        btnStart.setAttribute('disabled', 'disabled')

// ------------------------Поменять
        const selectHeaders = document.querySelectorAll('.custom-select'); 
        console.log(selectHeaders)
        for (const el of selectHeaders){
            el.setAttribute('disabled', 'disabled')
        }
// ------------------------Поменять     

        const btnOk = document.querySelector('.my-batton__ok'); 
        const btnSkip = document.querySelector('.my-batton__skip');
        btnOk.removeAttribute('disabled')
        btnSkip.removeAttribute('disabled')
        

    }

    if (event.target.closest('.my-batton__ok')){
        const input = document.querySelector(`.my-input`)
        const inputValue = input.value

        if(inputValue === ''){return}

        countTheAnswer(CURRENT_QUESTION, inputValue)
        uploadCarent()
        clearInput()
    }
    if (event.target.closest('.my-batton__skip')){
        skipQuestion()
        clearInput()
        
    }
    

})


document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter'){
        const input = document.querySelector(`.my-input`)
        const inputValue = input.value

        if(inputValue === ''){return}

        console.log(inputValue)
        countTheAnswer(CURRENT_QUESTION, inputValue)
        uploadCarent()
        clearInput()
    }
})

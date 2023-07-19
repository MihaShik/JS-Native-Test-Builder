
import questions from "./questions/questions.js";
import MySelect from "./components/MySelect1.js"
import MyButton from "./components/UI/MyButton.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/main.js";

let NUMBER_OF_QUESTIONS = 15;
const THEMES = {};

const body = document.body
const root = document.querySelector('.root');
const App = document.createElement('div');
App.className = 'App'

// body.append(MySelect('Выбирите список вопросов', 'checkbox' , questions, 'qwestions'));
// body.append(MyButton('Начать', 'start'));



App.append(Header());
App.append(Main());
App.append(Footer());
root.append(App)

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



document.addEventListener('click', (event) => {
    
    if(event.target.closest('.custom-select__options')){
        
        const options =  event.target.closest('.custom-select__options')
        let type = options.dataset.type
        if (!type){return}
            actionForSelector[type](event.target.dataset.value, event)
            console.log(NUMBER_OF_QUESTIONS)
    }

    if(event.target.closest('.custom-select__header')){
       const selectorHeader =  event.target.closest('.custom-select__header');
       console.log(selectorHeader)
       const selectorBody = selectorHeader.nextElementSibling
       selectorBody.hidden = !selectorBody.hidden
       console.log(NUMBER_OF_QUESTIONS)
    }

    if(!event.target.closest('.custom-select')){
      const selectorBody = document.querySelectorAll('.custom-select__body')
      console.log(selectorBody)
      for(const el of selectorBody){ el.hidden = true}
    }
})


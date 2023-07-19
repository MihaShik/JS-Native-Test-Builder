import MyButton from "./UI/MyButton.js";
import MySelect from "./MySelect1.js"
import questions from "../questions/questions.js";
import Numbers from "../date/nums.js"



export default function Header (styleModifier){
    const header =  document.createElement('div')
    header.className = `header`
    if (styleModifier) footer.className.add(`header_${styleModifier}`)

    header.append(MyButton('Начать','start'));
    header.append(MySelect('Выберите тему', 'checkbox', questions));
    header.append(MySelect('число', 'radio', Numbers, 'smoll-size'));
    return header;
 }
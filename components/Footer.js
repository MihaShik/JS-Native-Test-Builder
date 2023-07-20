import MyButton from "./UI/MyButton.js";
import MyInput from "./UI/MyInput.js"
export default function Footer (styleModifier){
    const footer =  document.createElement('div');
    footer.className = `footer`;
    const footerContaner =  document.createElement('div');
    footerContaner.className = `footer__contaner`;
    const footerButtonContaner =  document.createElement('div');
    footerButtonContaner.className = `footer__button-contaner`;
   


    footerButtonContaner.append(MyButton('Ответить','ok'));
    footerButtonContaner.append(MyButton('Пропустить','skip'));
    footerContaner.append(MyInput("Ваш ответ"));
    footerContaner.append(footerButtonContaner);
    
    footer.append(footerContaner);

    if (styleModifier) footer.className.add(`footer__${styleModifier}`)
    return footer;
 }
import MyButton from "./UI/MyButton.js";
import MyInput from "./UI/MyInput.js"
export default function Footer (styleModifier){
    const footer =  document.createElement('div');
    footer.className = `footer`;
    const footerContaner =  document.createElement('div');
    footerContaner.className = `footer__contaner`;
    const footerButtonContaner =  document.createElement('div');
    footerButtonContaner.className = `footer__button-contaner`;
   


    footerButtonContaner.append(MyButton('Ответить','ok','disabled'));
    footerButtonContaner.append(MyButton('Пропустить','skip','disabled'));
    footerContaner.append(MyInput("Ваш ответ",'disabled'));
    footerContaner.append(footerButtonContaner);
    
    footer.append(footerContaner);

    if (styleModifier) footer.className.add(`footer__${styleModifier}`)
    return footer;
 }
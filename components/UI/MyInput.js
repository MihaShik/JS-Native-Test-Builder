
export default function MyInput (title, styleModifier){
    const input =  document.createElement('input')
    input.className = `my-input`
    input.setAttribute('placeholder', title)
    input.setAttribute('value', '')
    if (styleModifier) footer.className.add(`footer__${styleModifier}`)
     return input;
 }
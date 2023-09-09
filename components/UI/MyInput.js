
export default function MyInput (title,  disabled, styleModifier){
    const input =  document.createElement('input')
    input.className = `my-input`
    input.setAttribute('placeholder', title)
    input.setAttribute('value', '')
    if(disabled){input.setAttribute('disabled', 'disabled')}
    if (styleModifier) footer.className.add(`footer__${styleModifier}`)
     return input;
 }
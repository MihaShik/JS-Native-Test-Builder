export default function MyButton (title, styleModifier, disabled){
   const btn =  document.createElement('button')
   btn.className = `my-batton my-batton__${styleModifier}`
   btn.innerText = title
   if(disabled){btn.setAttribute('disabled', 'disabled')}
   
    return btn;
}
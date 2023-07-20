export default function MyButton (title, styleModifier){
   const btn =  document.createElement('button')
   btn.className = `my-batton my-batton__${styleModifier}`
   btn.innerText = title
   btn.setAttribute('disabled', 'disabled')
    return btn;
}
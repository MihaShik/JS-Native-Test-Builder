export default function Main (title, styleModifier){
    const main =  document.createElement('div');
    main.className = `main`;
    main.innerHTML = '<div class = "main__content">Здесь будут вопросы</div>'
    if (styleModifier) footer.className.add(`main_${styleModifier}`)
    return main;
 }
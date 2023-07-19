
export default function creatCastomSelect(selected, typeOfSelect, obj, styleModifier){
    
    const OptionKeys = Object.keys(obj);
    const id = OptionKeys.map((e)=>e[0]).join('')

    const newSelectFrame = (function createSelectFrame (selected){
        const customSelectContaner = document.createElement('div');
        customSelectContaner.className = `custom-select`;
        customSelectContaner.id = id;
        customSelectContaner.innerHTML = (
            `<div class = 'custom-select__header'>
                <div class = 'custom-select__title'>${selected}</div>
                <div class = 'custom-select__icon'>'\/'</div>
            </div>

            <div class = 'custom-select__body'>
                <form class = 'custom-select__options-contaner'>
                </form>
            </div>`
            )
        return customSelectContaner;
    })(selected);



    (function addOptionItems (obj, typeOfSelect){

    const selectOptinsContaner =  newSelectFrame.lastElementChild.children[0];
    
    OptionKeys.forEach(element => {

        const optionsItem = document.createElement('div');
        optionsItem.className = `custom-select__options`; 
        optionsItem.innerHTML =
            `<input type=${typeOfSelect} 
            id='${obj[element].id}'
            value = '${obj[element].id}'>
            <label for=${obj[element].id}
            data-toggle-id = ${obj[element].id}
            > ${obj[element].title}</label>`;

            if (typeOfSelect === 'radio'){
                optionsItem.firstElementChild.setAttribute('name',`${id}_radio`); 
            };

        selectOptinsContaner.append(optionsItem);
    });
})(obj, typeOfSelect)



    function getCssModifir(newSelectFrame, styleModifier){
        
      const blockClass = newSelectFrame.classList[0];
      newSelectFrame.classList.add(`${blockClass}_${styleModifier}`);
      const children =  newSelectFrame.children;

      for ( const el of children){
        if (el.children){ getCssModifir(el, styleModifier)}
        else {
            const childrenBlockClass = el.newSelectFrame.classList[0]
            el.clssList.add(`${childrenBlockClass}_${styleModifier}`)
        }
      }
    }

    styleModifier && getCssModifir(newSelectFrame, styleModifier);

    return newSelectFrame;
}


 export default function creatCastomSelect(selected, typeOfSelect, obj, styleModifier, type){
    
  
    
    const OptionKeys = Object.keys(obj)
   
    //<div class = 'custom-select__icon'>'\/'</div>

    const id = OptionKeys.map((e)=>e[0]).join('')

    const newSelectFrame = (function createSelectFrame (selected){
        const customSelectContaner = document.createElement('div');
        customSelectContaner.className = `custom-select`;
        customSelectContaner.id = id;
        customSelectContaner.innerHTML = (
            `<div class = 'custom-select__header'>
                <p class = 'custom-select__title'>${selected}</p>
                <div class = 'custom-select__iconxgfnxgf'></div>
            </div>

            <div class = 'custom-select__body' hidden>
                <form class = 'custom-select__options-contaner'></form>
            </div>`
            )
        return customSelectContaner;
    })(selected);



    (function addOptionItems (obj, typeOfSelect){

    const selectOptinsContaner =  newSelectFrame.lastElementChild.children[0];
    
    OptionKeys.forEach(element => {

        const optionsItem = document.createElement('div');
        optionsItem.className = `custom-select__options`; 
        optionsItem.dataset.type = `${typeOfSelect}`;
        optionsItem.innerHTML =
            `<span class = "custom-select__options-current"
            data-type = '${typeOfSelect}'
            data-value ='${obj[element].id}'
            name ='${id}'
            id='${obj[element].id}'>
                ${obj[element].title}
            </span>`;

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
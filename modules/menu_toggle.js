export const toogleElement = (element,elements=[{element,classs:[],callback}]) => {
    const $menuIcon = document.querySelector(element);
    const $elements = elements.map(el=>{
        return {
            element: document.querySelector(el.element),
            class: el.classs,
            callback: el.callback
        }
    });
    $menuIcon.addEventListener('click',()=>{
        $elements.forEach(el=>{
            if(el.element && el.class){
                el.class.forEach(clas=>{
                    el.element.classList.toggle(clas);
                });
            }
            if(el.callback) el.callback();
        });
    });
};
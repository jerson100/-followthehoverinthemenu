export const moveToHover = (element, mediaScreen="(min-width: 900px)") => {

    const $element = document.querySelector(element),
          $parentElement = $element.parentElement,
          $firstElement = $parentElement.firstElementChild.firstElementChild,
          match = matchMedia(mediaScreen);
    
    const restore = () => {
        $element.style.left = `${$firstElement.offsetLeft}px`;
        $element.style.width = `${$firstElement.getBoundingClientRect().width}px`;
    };

    const addListener = () => {
        
        $parentElement.addEventListener('mouseover',e=>{

            if(e.target != $element){
                
                let element = e.target,
                    hoverActive  = true;
        
                if(element.tagName === 'LI'){
                    element = element.firstElementChild;
                }else if(element.tagName === 'A'){
                    element = e.target;
                }else{
                    hoverActive = false;
                }
        
                if(hoverActive){
                    const width = element.getBoundingClientRect().width;
                    const left = element.offsetLeft;
                    $element.style.left = `${left}px`;
                    $element.style.width = `${width}px`;
                }/*else{
                    restore();
                }*/
            }

        });
        
        $parentElement.addEventListener('mouseout',restore);

        window.addEventListener('resize',()=>{

            if(match.matches){

                restore();

            }

        });

    };

    const init = () => {
        
        restore();

        addListener();

    };

    init();
    
};
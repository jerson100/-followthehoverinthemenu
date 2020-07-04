import { toogleElement } from "././modules/menu_toggle.js";
import { moveToHover } from "././modules/moveElementHover.js";
import { slider } from "././modules/slider.js";

((window,document,undefined)=>{
    
    document.addEventListener('DOMContentLoaded',e=>{

        toogleElement('.header__icon',[
            {
                element: '.nav',
                classs: [
                    'nav--open'
                ]
            },
            {
                element: '.header__icon',
                classs: [
                    'fa-bars',
                    'fa-times',
                    'header__icon--animate-scale'
                ]
            }
        ]);

        moveToHover('.nav__item--slide','(min-width: 1024px)');

        slider('.my-info__slider .slider__inner',3,2000);

    });

})(window,document);
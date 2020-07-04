export const slider = (container, count, time) => {
    const $container = document.querySelector(container);
    let initial = 0;
    let increment = -1;

    const init = () => {

        setInterval(()=>{

            $container.style.transform = `translateX(${(initial += increment) * 100}%)`;

            if(Math.abs(initial) === count){
                increment = 1;
            }else if(initial === 0){
                increment = -1
            }

        },time);

    };

    init();

};
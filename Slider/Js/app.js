(function(){
    const sliders           = [...document.querySelectorAll('.slider_body')];
    const arrowAdelante     = document.querySelector('#adelante');
    const arrowAtras        = document.querySelector('#atras');
    let value;
 
    arrowAdelante.addEventListener('click', ()=>changePosition(1));
 
    arrowAtras.addEventListener('click', ()=>changePosition(-1));
 
    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body_show').dataset.id);

        value = currentElement;
        value+= change;
 
        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length: 1;
        }
 
        sliders[currentElement-1].classList.toggle('slider_body_show');
        sliders[value-1].classList.toggle('slider_body_show');
    }
})()
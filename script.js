const narco1 = document.querySelector('.narco1');
const adag = document.querySelector('.adag');
const adag1 = document.querySelector('.adag1');
const test = document.querySelector('.test');
const sas = document.querySelector('.sas');
const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');
const nuvem3 = document.querySelector('.nuvem3');


const jump =() => {
    narco1.classList.add('jump');

    setTimeout(() => {
        narco1.classList.remove('jump'); 
    }, 700);
}


const loop = setInterval(() => {
    const adagPosition = adag.offsetLeft;
    const adag1Position = adag1.offsetLeft;
    const narco1Position = +window.getComputedStyle(narco1).bottom.replace ('px' , '');

    if (adagPosition <= 30 && adagPosition >0 && narco1Position <15){
        adag.style.animation ='none';
        adag.style.visibility ='hidden';
        adag.style.left = `${adagPosition}px`;

        adag1.style.visibility ='hidden';

        narco1.style.animation ='none';
        narco1.style.bottom = `${narco1Position}px`;
        narco1.src ='imagem/ninja1.gif';
        narco1.style.width = '250px';
        narco1.style.height = '165px';
        narco1.style.marginLeft = '45px' ;
        narco1.style.bottom = '-4px';

        test.style.visibility ='visible';

        sas.style.visibility ='visible';

        nuvem1.style.visibility ='hidden';
        nuvem2.style.visibility ='hidden';
        nuvem3.style.visibility ='hidden';

    
        
    




        clearInterval(loop);
    }

    if (adag1Position <= 30 && adag1Position >0 && narco1Position <15){
        adag1.style.animation ='none';
        adag1.style.visibility ='hidden';
        adag1.style.left = `${adag1Position}px`;
        adag.style.visibility ='hidden';

        narco1.style.animation ='none';
        narco1.style.bottom = `${narco1Position}px`;

        narco1.src ='imagem/ninja1.gif';
        narco1.style.width = '250px';
        narco1.style.height = '165px';
        narco1.style.marginLeft = '45px' ;
        narco1.style.bottom = '-4px';

        test.style.visibility ='visible';
        sas.style.visibility ='visible';
       
        nuvem1.style.visibility ='hidden';
        nuvem2.style.visibility ='hidden';
        nuvem3.style.visibility ='hidden';



        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);
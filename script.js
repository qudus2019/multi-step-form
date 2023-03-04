let step1 = document.querySelector('.step-1');
let step2 = document.querySelector('.step-2');
let step3 = document.querySelector('.step-3');
let step4 = document.querySelector('.step-4');
let step5 = document.querySelector('.step-5');

let nextBtn1 = document.querySelector('#next-btn-1');
let nextBtn2 = document.querySelector('#next-btn-2');
let nextBtn3 = document.querySelector('#next-btn-3');
let nextBtn4 = document.querySelector('#next-btn-4');
let prevBtn2 = document.querySelector('#prev-btn-1');
let prevBtn3 = document.querySelector('#prev-btn-2');
let prevBtn4 = document.querySelector('#prev-btn-3');
let prevBtn5 = document.querySelector('#prev-btn-4');

let toggle = document.querySelector('.toggle');
let bullet = document.querySelectorAll('.bullet');

toggle.addEventListener('click', e => {
    let toggleInner = toggle.querySelector('div');

    if (toggle.classList.contains('yearly')){
        toggle.classList.remove('yearly');
        document.querySelector('.mo').style.color = 'hsl(213, 96%, 18%)';
        document.querySelector('.yr').style.color = 'silver';
    }
    else{
        toggle.classList.add('yearly');
        document.querySelector('.yr').style.color = 'hsl(213, 96%, 18%)';
        document.querySelector('.mo').style.color = 'silver';
    }
}) 

nextBtn1.addEventListener('click' , e=> {
    step1.classList.add('slideOff');
    step2.classList.add('slideIn');
    bullet[1].classList.add('current');
})
nextBtn2.addEventListener('click' , e=> {
    step2.classList.add('slideOff');
    step2.classList.remove('slideIn');
    step3.classList.add('slideIn');
    bullet[2].classList.add('current');
})

nextBtn3.addEventListener('click' , e => {
    step3.classList.add('slideOff');
    step3.classList.remove('slideIn');
    step4.classList.add('slideIn');
    bullet[3].classList.add('current');
})

nextBtn4.addEventListener('click' , e => {
    step4.classList.add('slideOff');
    step4.classList.remove('slideIn');
    step5.classList.add('slideIn');
})

prevBtn2.addEventListener('click' , e=> {
    step1.classList.remove('slideOff');
    step2.classList.remove('slideIn');
    bullet[1].classList.remove('current');
})
prevBtn3.addEventListener('click' , e=> {
    step2.classList.add('slideIn');
    step3.classList.remove('slideIn');
    bullet[2].classList.remove('current');
})
prevBtn4.addEventListener('click' , e=> {
    step3.classList.add('slideIn');
    step4.classList.remove('slideIn');
    bullet[3].classList.remove('current');
})
prevBtn5.addEventListener('click' , e=> {
    step4.classList.add('slideIn');
    step5.classList.remove('slideIn');
})

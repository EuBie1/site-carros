let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let active = 0;
let lastPosition = items.length - 1;




function setSlide() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }
    
    let dotsOld = indicator.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    
    setTimeout(() => {
        items[active].classList.add('active');
        dots[active].classList.add('active');
        indicator.querySelector('.number').innerHTML = (active + 1).toString().padStart(2, '0');
    }, 10); 
}

nextButton.onclick = () => {
    container.style.setProperty('--calculation', 1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlide();
};

prevButton.onclick = () => {
    container.style.setProperty('--calculation', -1);
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlide();
};

// Chamada inicial para garantir que a classe active seja definida no primeiro slide
setSlide();
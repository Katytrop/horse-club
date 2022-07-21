// scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};


// button up
const btnUp = document.querySelector('.pageup');

function trackScroll() {
	const scrolled = window.pageYOffset;
	const coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
	  btnUp.classList.add('pageup_show');
	}
	if (scrolled < coords) {
	  btnUp.classList.remove('pageup_show');
	}
}
function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 0);
	}
}
window.addEventListener ('scroll', trackScroll);
btnUp.addEventListener ('click', backToTop);

// burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.promo__menu');
const span =  document.querySelectorAll('.burger span');

const showMenu = () => {
    menu.classList.toggle('active');
	span.forEach(item => {
		item.classList.toggle('active');
	});
};
burger.addEventListener('click', showMenu);

// gallery slider

const prev = document.querySelector('.gallery_prev');
const next = document.querySelector('.gallery_next');
const slider = document.querySelector('.gallery__slider');
const dots = document.querySelectorAll('.gallery_controls span');
let offset = 0;
let index = 0;



next.addEventListener('click', function () {
    offset = offset + 20;
    if (offset > 60) {
        offset = 0;
    }
    slider.style.left = -offset + '%';
    if(index == dots.length -1) { // если слайд последний
		index = 0;
	} else {
		index++;
	}
    for(let dot of dots) {
		dot.classList.remove('active');
        dots[index].classList.add('active');
	}
});

prev.addEventListener('click', function () {
    offset = offset - 20;
    if (offset < 0) {
        offset = 60;
    }
    slider.style.left = -offset + '%';
    if(index == 0) { // если слайд последний
		index = dots.length -1;
	} else {
		index--;
	}
    for(let dot of dots) {
		dot.classList.remove('active');
        dots[index].classList.add('active');
	}
});


const seal = document.querySelector('.cont__seal');
const floor = document.querySelector('.cont__floor');
const content = document.querySelector('.content');

seal.addEventListener('click', sealFall);
seal.addEventListener('click', contentVis);
seal.addEventListener('click', open);

function sealFall(event) {
	event.preventDefault();
	seal.classList.add('cont__seal--active');
}

function contentVis(event) {
	event.preventDefault();

	const content = document.querySelector('.content');

	if (!content.classList.contains('content--vis')) {
		content.style.maxHeight = content.scrollHeight + 'px'; // раскрытие по реальному размеру
		content.classList.add('content--vis');
	} else {
		// content.style.maxHeight = '0px'; // закрытие
		// content.classList.remove('content--vis');
	}
}

function open(event) {
	event.preventDefault();
	floor.classList.add('cont__floor-open');
}


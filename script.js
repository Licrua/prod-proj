

document.addEventListener('DOMContentLoaded', () => {
    // Переменные для слайдов
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const cardPopcorn = document.querySelector('.card--popcorn');
    const cardIcecream = document.querySelector('.card--icecream');
    
    // Переменные для формы
    const formOverlay = document.querySelector('.card-form-overlay');
    const form = document.getElementById('cardForm');
    const nameInput = document.getElementById('name');
    const consentCheckbox = document.getElementById('consent');
    const submitButton = document.querySelector('.card-form__submit-button');
    const closeButton = document.querySelector('.card-form__close');
    const cardContainer = document.querySelector('.card__container');

// видео переменные
	const playButton = document.querySelector('.banner__button');
	const videoPlayer = document.querySelector('.banner__video');

    function updateCards() {
        if (slide1.checked) {
            cardPopcorn.classList.add('center');
            cardPopcorn.classList.remove('offset');
            cardIcecream.classList.add('offset');
            cardIcecream.classList.remove('center');
        } else if (slide2.checked) {
            cardIcecream.classList.add('center');
            cardIcecream.classList.remove('offset');
            cardPopcorn.classList.add('offset');
            cardPopcorn.classList.remove('center');
        }
    }

    slide1.addEventListener('change', updateCards);
    slide2.addEventListener('change', updateCards);
    updateCards(); 

    function showForm() {
        formOverlay.style.display = 'flex';
    }

    function hideForm() {
        formOverlay.style.display = 'none';
    }

    cardContainer.addEventListener('click', (event) => {
        if (event.target.matches('.card__button')) {
            showForm();
        }
    });

    submitButton.disabled = true;

    consentCheckbox.addEventListener('change', function () {
        submitButton.disabled = !this.checked;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
            alert('Форма отправлена!');
            form.reset();
            submitButton.disabled = true;
            hideForm();
        }
    });

    closeButton.addEventListener('click', hideForm);
	
	// видео фрейм
	

		playButton.addEventListener('click', () => {
			playButton.style.display = 'none'; 
			videoPlayer.style.display = 'flex'; 
			videoPlayer.play(); 
		});
	});
	

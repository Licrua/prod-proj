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
  const phoneInput = document.getElementById('phone');

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
  //  форма

  function showForm() {
    formOverlay.style.display = 'flex';
  }

  function hideForm() {
    formOverlay.style.display = 'none';
  }

  const input = document.getElementById('phone');
  if (input) {
    const mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask(input);
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

  //   form.addEventListener('submit', function (e) {
  //     e.preventDefault();

  //     let isValid = true;

  //     // Проверка имени
  //     if (nameInput.value.trim().length < 2) {
  //       nameInput.classList.add('error');
  //       isValid = false;
  //     } else {
  //       nameInput.classList.remove('error');
  //     }

  //     const phoneValue = phoneInput.value.trim();
  //     const phoneDigits = phoneValue.replace(/\D/g, '');

  //     if (phoneDigits.length !== 11) {
  //       phoneInput.classList.add('error');
  //       isValid = false;
  //     } else {
  //       phoneInput.classList.remove('error');
  //     }

  //     if (isValid) {
  //       alert('Форма отправлена!');
  //       form.reset();
  //       submitButton.disabled = true;
  //       hideForm();
  //     }
  //   });

  const validate = new window.JustValidate('#form');

  validate
    .addField('#name', [
      { rule: 'required', errorMessage: 'Введите имя' },
      { rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
    ])
    .addField('#phone', [
      {
        validator: (value) => {
          const unmasked = value.replace(/\D/g, ''); // Удаляем все нецифровые символы
          return unmasked.length === 11; // Проверяем, что длина номера без маски 11 символов
        },
        errorMessage: 'Введите корректный номер',
      },
    ])
    .onSuccess((event) => {
      alert('Форма отправлена!');
      event.target.reset(); // Очищаем форму после успешной отправки
    });

  closeButton.addEventListener('click', hideForm);

  // видео фрейм

  playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    videoPlayer.style.display = 'flex';
    videoPlayer.play();
  });
});

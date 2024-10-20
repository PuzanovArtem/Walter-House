import validator from 'validator'

export const contactFormValidator = () => {
	// Получаем элементы формы
	const form = document.querySelector('.contact-form');
	const inputName = form.querySelector('input[name="name"]');
	const inputPhone = form.querySelector('input[name="phone"]');
	const nameErrorElement = form.querySelectorAll('.validation-text-denger')[0];
	const phoneErrorElement = form.querySelectorAll('.validation-text-denger')[1];
	
	// Кнопка для отправки формы
	const submitButton = form.querySelector('.form-btn');
	
	// Обработчик клика по кнопке отправки
	submitButton.addEventListener('click', function (e) {
	  e.preventDefault(); // Остановка стандартного поведения кнопки
	  let isValid = true;
  
	  // Валидация имени
	  const nameValue = inputName.value.trim();
	  if (validator.isEmpty(nameValue)) {
		nameErrorElement.textContent = 'Имя не может быть пустым.';
		isValid = false;
	  } else if (!validator.isLength(nameValue, { min: 2, max: 50 })) {
		nameErrorElement.textContent = 'Имя должно содержать от 2 до 50 символов.';
		isValid = false;
	  } else {
		nameErrorElement.textContent = '';
	  }
  
	  // Валидация номера телефона
	  const phoneValue = inputPhone.value.trim();
	  if (validator.isEmpty(phoneValue)) {
		phoneErrorElement.textContent = 'Номер телефона не может быть пустым.';
		isValid = false;
	  } else if (!validator.isMobilePhone(phoneValue, 'any', { strictMode: false })) {
		phoneErrorElement.textContent = 'Неверный формат номера телефона.';
		isValid = false;
	  } else {
		phoneErrorElement.textContent = '';
	  }
  
	  // Если валидация пройдена
	  if (isValid) {
		alert('Форма отправлена успешно!');
		
		// Очистка полей формы
		inputName.value = '';
		inputPhone.value = '';
	  }
	});
  }
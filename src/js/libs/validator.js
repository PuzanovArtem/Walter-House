import validator from 'validator'

export const orderCallValidator = () => {
  const form = document.querySelector('.contact-form')
  const inputName = form.querySelector('input[name="name"]')
  const inputPhone = form.querySelector('input[name="phone"]')
  const nameErrorElement = form.querySelectorAll('.validation-text-danger')[0]
  const phoneErrorElement = form.querySelectorAll('.validation-text-danger')[1]

  const submitButton = form.querySelector('.form-btn')

  submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    let isValid = true

    const nameValue = inputName.value.trim()
    if (validator.isEmpty(nameValue)) {
      nameErrorElement.textContent = 'Имя не может быть пустым.'
      isValid = false
    } else if (!validator.isLength(nameValue, { min: 2, max: 50 })) {
      nameErrorElement.textContent = 'Имя должно содержать от 2 до 50 символов.'
      isValid = false
    } else {
      nameErrorElement.textContent = ''
    }

    const phoneValue = inputPhone.value.trim()
    if (validator.isEmpty(phoneValue)) {
      phoneErrorElement.textContent = 'Номер телефона не может быть пустым.'
      isValid = false
    } else if (!validator.isMobilePhone(phoneValue, 'any', { strictMode: false })) {
      phoneErrorElement.textContent = 'Неверный формат номера телефона.'
      isValid = false
    } else {
      phoneErrorElement.textContent = ''
    }

    if (isValid) {
      alert('Форма отправлена успешно!')

      inputName.value = ''
      inputPhone.value = ''
    }
  })
}

export const contactFormValidator = () => {
  const form = document.querySelector('.contact-form--discuss')
  const inputName = form.querySelector('input[name="name"]')
  const inputPhone = form.querySelector('input[name="phone"]')
  const nameErrorElement = form.querySelectorAll('.validation-text-danger')[0]
  const phoneErrorElement = form.querySelectorAll('.validation-text-danger')[1]

  const submitButton = form.querySelector('.form-btn')

  submitButton.addEventListener('click', e => {
    e.preventDefault()
    let isValid = true

    if (inputName.value.trim() === '') {
      nameErrorElement.textContent = 'Введите имя'
      isValid = false
    } else {
      nameErrorElement.textContent = ''
    }

    if (inputPhone.value.trim() === '') {
      phoneErrorElement.textContent = 'Введите номер телефона'
      isValid = false
    } else {
      phoneErrorElement.textContent = ''
    }

    if (isValid) {
      console.log('Форма успешно отправлена')
      inputName.value = ''
      inputPhone.value = ''
    }
  })
}

let firstName = document.getElementById('first_name')
let lastName = document.getElementById('last_name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let errorFirstName = document.getElementById('error_first_name')
let errorLastName = document.getElementById('error_last_name')
let errorEmail = document.getElementById('error_email')
let errorPassword = document.getElementById('error_password')
let labelFirstName = document.getElementById('label_first_name')
let labelLastName = document.getElementById('label_last_name')
let labelEmail = document.getElementById('label_email')
let labelPassword = document.getElementById('label_password')
let confirmed = 0
let emailValidation = /\S+@\S+\.\S+/;

firstName.addEventListener('input', () => {
    if (firstName.value == '') {
        errorFirstName.classList.remove('hide')
        labelFirstName.classList.remove('hide')
        labelFirstName.innerHTML = 'First Name cannot be empty'
        firstName.style.border = '2px solid var(--red)'
    } else {
        errorFirstName.classList.add('hide')
        labelFirstName.classList.add('hide')
        firstName.style.border = '1px solid var(--dark_blue)'
    }
})

lastName.addEventListener('input', () => {
    if (lastName.value == '') {
        errorLastName.classList.remove('hide')
        labelLastName.classList.remove('hide')
        labelLastName.innerHTML = 'Last Name cannot be empty'
        lastName.style.border = '2px solid var(--red)'
    } else {
        errorLastName.classList.add('hide')
        labelLastName.classList.add('hide')
        lastName.style.border = '1px solid var(--dark_blue)'
    }
})

email.addEventListener('input', () => {
    if (email.value == '') {
        errorEmail.classList.remove('hide')
        labelEmail.classList.remove('hide')
        labelEmail.innerHTML = 'Email cannot be empty'
        email.style.border = '2px solid var(--red)'
    } else {
        errorEmail.classList.add('hide')
        labelEmail.classList.add('hide')
        email.style.border = '1px solid var(--dark_blue)'
    }
})

password.addEventListener('input', () => {
    if (password.value == '') {
        errorPassword.classList.remove('hide')
        labelPassword.classList.remove('hide')
        labelPassword.innerHTML = 'Password cannot be empty'
        password.style.border = '2px solid var(--red)'
    } else {
        errorPassword.classList.add('hide')
        labelPassword.classList.add('hide')
        password.style.border = '1px solid var(--dark_blue)'
    }
})

function verification() {
    if (firstName.value == '' || lastName.value == '' || email.value == '' || password.value == '') {
        errorFirstName.classList.remove('hide')
        labelFirstName.classList.remove('hide')
        labelFirstName.innerHTML = 'Fields cannot be empty'
        firstName.style.border = '2px solid var(--red)'

        errorLastName.classList.remove('hide')
        labelLastName.classList.remove('hide')
        labelLastName.innerHTML = 'Fields cannot be empty'
        lastName.style.border = '2px solid var(--red)'

        errorEmail.classList.remove('hide')
        labelEmail.classList.remove('hide')
        labelEmail.innerHTML = 'Fields cannot be empty'
        email.style.border = '2px solid var(--red)'

        errorPassword.classList.remove('hide')
        labelPassword.classList.remove('hide')
        labelPassword.innerHTML = 'Fields cannot be empty'
        password.style.border = '2px solid var(--red)'

    } else {
        if (firstName.value.length <= 3) {
            errorFirstName.classList.remove('hide')
            labelFirstName.classList.remove('hide')
            labelFirstName.innerHTML = 'First Name cannot be less than 3 characters'
            firstName.style.border = '2px solid var(--red)'
        } else {
            errorFirstName.classList.add('hide')
            labelFirstName.classList.add('hide')
            firstName.style.border = '1px solid var(--dark_blue)'
            confirmed += 1
        }

        if (lastName.value.length <= 3) {
            errorLastName.classList.remove('hide')
            labelLastName.classList.remove('hide')
            labelLastName.innerHTML = 'Last Name cannot be less than 3 characters'
            lastName.style.border = '2px solid var(--red)'
        } else {
            errorLastName.classList.add('hide')
            labelLastName.classList.add('hide')
            lastName.style.border = '1px solid var(--dark_blue)'
            confirmed += 1
        }

        if (emailValidation.test(email.value) == false) {
            errorEmail.classList.remove('hide')
            labelEmail.classList.remove('hide')
            labelEmail.innerHTML = 'Looks like this is not an email'
            email.style.border = '2px solid var(--red)'
        } else {
            errorEmail.classList.add('hide')
            labelEmail.classList.add('hide')
            email.style.border = '1px solid var(--dark_blue)'
            confirmed += 1
        }

        if (password.value.length <= 7) {
            errorPassword.classList.remove('hide')
            labelPassword.classList.remove('hide')
            labelPassword.innerHTML = 'Password cannot be less than 7 characters'
            password.style.border = '2px solid var(--red)'
        } else {
            errorPassword.classList.add('hide')
            labelPassword.classList.add('hide')
            password.style.border = '1px solid var(--dark_blue)'
            confirmed += 1
        }

        if (confirmed == 4) {
            firstName.value = ''
            lastName.value = ''
            email.value = ''
            password.value = ''
        }
    }
}
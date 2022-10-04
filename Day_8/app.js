const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm_password')
console.log(confirmPassword)
const form = document.querySelector('form')

function showError(input, message) {
    const parent = input.parentElement
    const small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    const parent = input.parentElement
    const small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyField(input) {
    let isEmptyError = false

    
    input.value = input.value.trim()

    if (!input.value) {
        showError(input, 'You must fill this field!')
        isEmptyError = true
    } else {
        showSuccess(input)
    }

    return isEmptyError
}



function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min || input.value.length > max) {
        showError(input, `The lengh of this field must be between ${min} and ${max} characters`)
        return true
    } else {
        showSuccess(input)
    }
    return false
}

function checkEmpty(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        isEmptyError = checkEmptyField(input)
        if (isEmptyError)
            isEmptyError = true
    });

    return isEmptyError
}

function checkUsernameError(input, min, max) {
    if (!checkEmptyField(input)) {
        checkLengthError(input, min, max)
    }
}

function checkEmailError(input, min, max) {
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    input.value = input.value.trim()
    let isEmailError = !emailFormat.test(input.value)

    if (!checkEmptyField(email)) {  
        if (emailFormat.test(input.value)) {
            checkLengthError(email, min, max)
        } else {
            showError(input, "Email is Invalid")
        }
    }
    return isEmailError
}

function checkPasswordError(input, min, max) {
    let result = true
    if (!checkEmptyField(input)) {
        if (!checkLengthError(input, min, max))
            result = false
    }
    return result
}

//TQuat
function checkFieldError(input, min, max) {
    let result = true
    if (!checkEmptyField(input)) {
        if (!checkLengthError(input, min, max))
            result = false
    }
    return result
}

function checkConfirmPasswordMatched(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Confirmed Password not matched")
    } else {
        showSuccess(input2)
    }
}

function validate() {
    checkFieldError(username, 6, 100)
    checkEmailError(email, 6, 100)
    checkFieldError(password, 6, 100)
    if (!checkFieldError(confirmPassword, 6, 100))
        checkConfirmPasswordMatched(password, confirmPassword)
}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    //validate form
    validate()
    
    //Do sth after validate
})

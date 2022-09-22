let keyElement = document.querySelector('.card.key p:last-child')
let locationElement = document.querySelector('.card.location p:last-child')
let whichElement = document.querySelector('.card.which p:last-child')
let codeElement = document.querySelector('.card.code p:last-child')
let alertElement = document.querySelector('.alert')
let box = document.querySelector('.box')
let resultElement = document.querySelector('.result')
let returnButton = document.querySelector('.return button')

document.addEventListener('keydown', function(event) {
    alertElement.classList.add('hide')
    box.classList.remove('hide')
    locationElement.innerText = event.location
    keyElement.innerText = event.key
    codeElement.innerText = event.code
    whichElement.innerText = event.which
    resultElement.innerText = event.which
})

returnButton.addEventListener('click', function() {
    box.classList.add('hide')
    alertElement.classList.remove('hide')
})

let openButton = document.querySelector('.open--modal--btn')
let modal = document.querySelector('.modal')
let closeButton = document.querySelector('.modal__footer button')
let closeIcon = document.querySelector('.modal__header i')

function toggleModal() {
    modal.classList.toggle('hide')
}

openButton.addEventListener('click', toggleModal)
closeIcon.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

//option
modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
        toggleModal()
    }
})

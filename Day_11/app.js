let successBtn = document.querySelector('.control .success')
let warningBtn = document.querySelector('.control .warning')
let errorBtn = document.querySelector('.control .error')

const timeout = 3000
const timeDelete = 6000

successBtn.addEventListener('click', function () {
    createToast('success', timeout, timeDelete)
})

warningBtn.addEventListener('click', function () {
    createToast('warning', timeout, timeDelete)
})

errorBtn.addEventListener('click', function () {
    createToast('error', timeout, timeDelete)
})

{/* <div class="toast success">
    <i class="fa-solid fa-circle-check"></i>
    <span class="message">This is a Success message!</span>
    <span class="timeline"></span>
</div>

<div class="toast warning">
    <i class="fa-solid fa-circle-exclamation"></i>
    <span class="message">This is a Warning message!</span>
    <span class="timeline"></span>
</div>

<div class="toast error">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <span class="message">This is a Error message!</span>
    <span class="timeline"></span>
</div> */}

function createToast(status, timeout, timeDelete) {
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)

    if (status === 'success') {
        toast.innerHTML =  `<i class="fa-solid fa-circle-check"></i>
                        <span class="message">This is a Success message!</span>
                        <span class="timeline"></span>`
    } else if (status === 'warning') {
        toast.innerHTML =  `<i class="fa-solid fa-circle-exclamation"></i>
                        <span class="message">This is a Warning message!</span>
                        <span class="timeline"></span>`
    } else if (status === 'error') {
        toast.innerHTML =  `<i class="fa-solid fa-triangle-exclamation"></i>
                        <span class="message">This is an Error message!</span>
                        <span class="timeline"></span>`
    }
    
    let toastList = document.querySelector('.toast-wrapper')
    toastList.appendChild(toast)

    setTimeout(function () {
        toast.style.animation = `slide_hide 2s ease forwards`
    }, timeout)

    setTimeout(function () {
        toast.remove()
    }, timeDelete)

}

toastCreated = 'success'

createToast(toastCreated)
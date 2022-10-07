const time = 600
let listElements = document.querySelectorAll('.counter')

function countUp(element, time) {
    let numberElement = element.querySelector('.number')
    let numberUp = parseInt(numberElement.innerText)
    let count = 0
    let step = numberUp / time;

    let counting = setInterval(() => {
        count += step
        if (count > numberUp) {
            clearInterval(counting)
            numberElement.innerText = numberUp
        } else {
            numberElement.innerText = Math.round(count)
        }
    }, 1)
}

listElements.forEach((item) => {
    countUp(item, time)
})

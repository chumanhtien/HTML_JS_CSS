let range = document.querySelector('.range')
let process = document.querySelector('.process')
let value = document.querySelector('.process span')
let body = document.querySelector('body')
let input = document.querySelector('.slider')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.background = `rgba(0, 0, 0, ${percent * 0.9 / 100})`
}

input.addEventListener('input', function () {
    body.style.background = `rgba(235, 45, 11, ${input.value * 0.9 / 100})`
})

range.addEventListener('mousemove', function (event) {
    let processWidtgh = event.pageX - this.offsetLeft
    let percent = Math.round(processWidtgh / this.offsetWidth * 100)
    updateProcess(percent)
})

updateProcess(30)
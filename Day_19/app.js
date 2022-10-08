let color = document.querySelector('#color')
let eraser = document.querySelector('#eraser')
let size = document.querySelector('#size')
let decrease = document.querySelector('#decrease')
let increase = document.querySelector('#increase')
let save = document.querySelector('#save')
let clear = document.querySelector('#clear')

let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d')

//init
let colorPaint = '#000000'
let isDrawing = false
let isErasering = false

let sizeToDraw = 5
size.innerText = sizeToDraw
let prevSize = sizeToDraw
let prevColor = colorPaint

let prevPos = {
    x: 0,
    y: 0
}
let currentPos = {
    x: 0,
    y: 0
}

document.addEventListener('mousedown', function (event) {
    prevPos = {
        x: event.offsetX,
        y: event.offsetY
    }
    if (checkIsOnCanvas(event)) {
        isDrawing = true
    }
})

document.addEventListener('mousemove', function (event) {
    if (isDrawing) {
        currentPos = {
            x: event.offsetX,
            y: event.offsetY
        }
        context.beginPath()
        context.arc(prevPos.x, prevPos.y, sizeToDraw/4, 0, 2 * Math.PI)
        context.fillStyle = colorPaint
        context.fill()

        context.beginPath()
        context.moveTo(prevPos.x, prevPos.y)
        context.lineTo(currentPos.x, currentPos.y)
        context.strokeStyle = colorPaint
        context.lineWidth = sizeToDraw/4 * 2
        context.stroke()

        prevPos.x = currentPos.x
        prevPos.y = currentPos.y
    }
})

document.addEventListener('mouseup', function (event) {
    isDrawing = false
})

color.addEventListener('change', function (event) {
    colorPaint = event.target.value
    prevColor = colorPaint
})

eraser.addEventListener('click', function (event) {
    if (!isErasering) {
        colorPaint = '#ffffff'
        sizeToDraw = 30
    }
    else {
        colorPaint = '#000000'
        sizeToDraw = prevSize
        colorPaint = prevColor
        color.value = colorPaint
    }
    eraser.classList.toggle('chosen')
    isErasering = !isErasering
    size.innerText = sizeToDraw
})

decrease.addEventListener('click', function (event) {
    sizeToDraw -= 1
    sizeToDraw = sizeToDraw > 1 ? sizeToDraw : 1
    size.innerText = sizeToDraw
    prevSize = sizeToDraw
})

increase.addEventListener('click', function (event) {
    sizeToDraw += 1
    sizeToDraw = sizeToDraw < 30 ? sizeToDraw : 30
    size.innerText = sizeToDraw
    prevSize = sizeToDraw
})

clear.addEventListener('click', function (event) {
    let canvasRect = canvas.getClientRects()[0]
    context.clearRect(0, 0, canvasRect.width, canvasRect.height)
})

save.addEventListener('click', function (event) {
    let output = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream")
    save.setAttribute('href', output)
})

function checkIsOnCanvas(event) {
    return event.pageX > canvas.offsetLeft
        && event.pageX < canvas.offsetLeft + canvas.offsetWidth
        && event.pageY > canvas.offsetTop 
        && event.pageY < canvas.offsetTop + canvas.offsetHeight
}
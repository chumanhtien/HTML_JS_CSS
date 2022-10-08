let boxes = document.querySelectorAll('.box')
let targetList = document.querySelectorAll('.target')
let currentTarget = null

targetList.forEach((target) => {
    target.addEventListener('dragstart', (event) => {
        target.classList.add('dragging')
        currentTarget = target
    })

    target.addEventListener('dragend', (event) => {
        target.classList.remove('dragging')
    })
})



boxes.forEach((box) => {
    //dragover
    box.addEventListener('dragover', (event) => {
        event.preventDefault()

        if (!box.querySelector('.target')) {
            box.appendChild(currentTarget)
        }
    })

    //drop
    box.addEventListener('drop', (event) => {
        if (!box.querySelector('.target')) {
            box.appendChild(currentTarget)
        }
    })
})

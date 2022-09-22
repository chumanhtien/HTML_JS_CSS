let content = document.querySelector('.content')
let input = document.querySelector('.content input')
let removeAllBtn = document.querySelector('.remove-all')

let tags = ['Chinese', 'Japanese']

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        content.innerHTML += `<li>
            ${tags[i]}
            <i class="fas fa-times" onClick="removeTag(${i})"></i>
        </li>`
    }

    content.appendChild(input)
    input.focus()
}

render()

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log(event.target.value)
        if (!tags.includes(input.value.trim()))
            tags.push(input.value.trim())
        else 
            alert('This tag is already EXIST')
        input.value = ''
        render()
        // addTag(event.target.value)
    }
})

function removeTag(index) {
    console.log("You've already deleted Tag with index = ", index)
    tags.splice(index, 1)
    render()
}

removeAllBtn.addEventListener('click', function () {
    if (tags.length > 0) {
        console.log('Delete All tags')
        tags = []
        render()
    } else {
        alert('NO CONTENT to REMOVE')
        input.focus()
    }
})
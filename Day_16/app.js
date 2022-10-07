let animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElementOnScreen(element) {
    let rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight

    //check rect is on the screen
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start')
    } else {
        element.classList.remove('start')   
    }
}

function checkAnimation() {
    animationElements.forEach((element) => {
        toggleAnimationElementOnScreen(element)
    })
}

window.onscroll = checkAnimation
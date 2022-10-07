let imgFeature = document.querySelector('.img-feature')
let listImages = document.querySelectorAll('.list-image img')
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')

let currentIndex = 0

function updateFeatureImageByIndex(index) {

    //remove active 
    listImages.forEach((item) => {
        item.parentElement.classList.remove('active')
    })

    currentIndex = index
    listImages[index].parentElement.classList.add('active')
    imgFeature.src = listImages[index].getAttribute('src')

}

listImages.forEach((imageItem, index) => {
    imageItem.addEventListener('click', (event) => {
        imgFeature.style.opacity = '0'
        setTimeout(() => {
            updateFeatureImageByIndex(index)
            imgFeature.style.opacity = '1'
        }, 300)
    })
})

prevBtn.addEventListener('click', (event) => {
    if (currentIndex > 0)
        currentIndex--
    else 
        currentIndex = listImages.length - 1
    imgFeature.style.animation = ''

    setTimeout(() => {
        updateFeatureImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideRight 0.5s ease-in-out forwards'
    }, 50)
})

nextBtn.addEventListener('click', (event) => {
    if (currentIndex < listImages.length - 1)
        currentIndex++
    else 
        currentIndex = 0
    
    imgFeature.style.animation = ''
    setTimeout(() => {
        updateFeatureImageByIndex(currentIndex)
        imgFeature.style.animation = 'slideLeft 0.5s ease-in-out forwards'
    }, 50)
})

updateFeatureImageByIndex(currentIndex)


let images = document.querySelectorAll('.image img')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let closeBtn = document.querySelector('.gallery__close')
let galleryImg = document.querySelector('.gallery__inner img')
let gallery = document.querySelector('.gallery')

let currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) 
      prev.classList.add('disabled')
    else 
      prev.classList.remove('disabled')
    if (currentIndex == images.length - 1)
      next.classList.add('disabled')
    else 
      next.classList.remove('disabled')


    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})

closeBtn.addEventListener('click', function() {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function() {
    if (currentIndex) {
        currentIndex--
        showGallery()
    } else {
        // prev.classList.add('hide')
    }
})

next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    } else {
        // next.classList.add('hide')
    }
})
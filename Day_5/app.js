let searchButton = document.querySelector('.search-box__button')
let searchBox = document.querySelector('.search-box')


// Cach 1
// let showSearchBoxFlag = false
// searchButton.addEventListener('click', function() {
//     if (!showSearchBoxFlag) {
//         searchBox.classList.add('open')
//     } else {
//         searchBox.classList.remove('open')        
//     }
//     showSearchBoxFlag = !showSearchBoxFlag
// })

// Cach 2
searchButton.addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})
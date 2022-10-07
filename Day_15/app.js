let mockData = fetch('http://fakestoreapi.com/products')
.then((res) => {
    return res.json()    
})
.then((data) => {
    console.log(data);
    //init
    let products = document.querySelector('.products')
    products.innerHTML = ''
    data.forEach((item) => {
        let newProduct = document.createElement('div')
        newProduct.classList.add('product')
        newProduct.innerHTML = `<img src=${item.image} alt=${item.title}>
                                <div class="info">
                                    <div class="name">${item.title}</div>
                                    <div class="price">$${item.price}</div>
                                </div>`
        products.appendChild(newProduct)
    })
})


let searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function (event) {
    let textSearch = event.target.value.trim().toLowerCase()
    let listProductsDOM = document.querySelectorAll('.product')
    listProductsDOM.forEach((productItem) => {
        if (productItem.innerText.toLowerCase().includes(textSearch)) {
            productItem.classList.remove('hide')
        } else {
            productItem.classList.add('hide')
        }
    })
})
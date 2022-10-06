let search = document.querySelector('.search')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let value = document.querySelector('.value')
let shortDescription = document.querySelector('.short-description')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let humidity = document.querySelector('.sun span')
let time = document.querySelector('.time')
let content = document.querySelector('.content')
let body = document.querySelector('body')

console.log('body: ', body)


async function showWeatherUI(cityLocation) {

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=1967d71bab8bef24b3c3a7e300e0b0b5`
    let data = await fetch(apiURL).then(res => res.json()) 
    
    if (data.cod === 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ' (m)'
        wind.innerText = data.wind.speed + ' (m/s)'
        humidity.innerText = data.main.humidity + ' (%)'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerHTML = temp + ' <sup>o</sup>C'
        shortDescription.innerText = data.weather[0] ? data.weather[0].main : 'null'
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'hot') 

        if (temp < 16) {
            body.setAttribute('class', 'cold')
        } else if (temp < 28) {
            body.setAttribute('class', 'cool')
        } else if (temp < 36) {
            body.setAttribute('class', 'warm')
        } else {
            body.setAttribute('class', 'hot')
        }

        console.log("data: ", data)
    } else {
        console.log('Not found')
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function (event) {
    if (event.code === 'Enter') {
        let cityLocation = search.value.trim()
        showWeatherUI(cityLocation)
    }
})

showWeatherUI('Hanoi')
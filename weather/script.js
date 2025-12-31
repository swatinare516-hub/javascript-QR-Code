var city = document.querySelector('#city')
var btnAction = document.querySelector('#btn-action')
var desc = document.querySelector('#desc')
var temp = document.querySelector('#temp')
var humid = document.querySelector('#humid')
var pressure = document.querySelector('#pressure')

btnAction.addEventListener('click', async () => {

    if (city.value.trim() === "") {
        alert("Please Enter the city name here!")
        return
    }

    const apikey = "YOUR_API_KEY_HERE"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric`

    try {
        const res = await fetch(url)
        const data = await res.json()

        if (data.cod !== 200) {
            alert(data.message)
            return
        }

        temp.innerText = data.main.temp + " °C"
        desc.innerText = data.weather[0].description
        humid.innerText = data.main.humidity
        pressure.innerText = data.main.pressure + " hPa"

    } catch (error) {
        alert("Network Error or API issue")
    }
})
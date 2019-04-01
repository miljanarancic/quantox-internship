const weatherData = {
  tempUnit: "C",
  windSpeedUnit: "m/s",
  days: [
    { 
      day: "Mon",
      temp: 22,
      windDirection: "north-east",
      windSpeed: 10 ,
      type:"sun"
    },
    {
      day: "Tue",
      temp: 14,
      windDirection: "north-west",
      windSpeed: 14,
      type: "cloud-rain"
    },
    { 
      day: "Wed",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "cloud"
    },
    { 
      day: "Thu",
      temp: 23,
      windDirection: "north-east",
      windSpeed: 15,
      type: "cloud-rain"
    },
    { 
      day: "Fri",
      temp: 21,
      windDirection: "north-west",
      windSpeed: 18,
      type: "sun"
    },
    { 
      day: "Sat",
      temp: 19,
      windDirection: "south-west",
      windSpeed: 21,
      type: "cloud"
    },
    { 
      day: "Sun",
      temp: 18,
      windDirection: "north-east",
      windSpeed: 14,
      type: "cloud-rain"
    }
  ]
}
let unit = "C"
let weeklyWeather = weatherData.days.forEach((day, i) => {
  let div = document.querySelector('.day' + i + ' p')
  div.innerHTML =  day.temp + "°C"
  document.querySelector('.day' + i).addEventListener('click', () => {
    if (window.screen.width < 700) {
      document.querySelector('.side-menu').classList.remove('open')
    }
    
    if (unit === 'C') {
      document.querySelector('.temperature').innerHTML = day.temp + "°C"
    } else {
      document.querySelector('.temperature').innerHTML = day.temp + 273.15 + "°K"
    }

    document.querySelector('.wind-speed').innerHTML = day.windSpeed + " m/s" +'<i class="fas fa-arrow-up"></i>'
    
    let arrow = document.querySelector('.fa-arrow-up')
    switch (day.windDirection) {
      case "north-east": 
        arrow.style.transform='rotate(45deg)'
        break
      case "north-west": 
        arrow.style.transform='rotate(315deg)'
        break
      case "south-east": 
        arrow.style.transform='rotate(135deg)'
        break
      case "south-west": 
        arrow.style.transform='rotate(225deg)'
        break
    }
    document.querySelector('.weather-type').innerHTML = '<i class="fas fa-' + day.type + '"></i>'
  })

  let celsius = document.querySelector('#celsius')
  let kelvin = document.querySelector('#kelvin')
    
  kelvin.addEventListener('click', () => {
    kelvin.classList.add('clicked')
    if (kelvin.classList.contains('clicked')) {
      celsius.classList.remove('clicked')
      document.querySelector('.temperature').innerHTML = day.temp + 273.15 + "°K"
      unit = 'K'
    }
  })

  celsius.addEventListener('click', () => {
    celsius.classList.add('clicked')
    if (celsius.classList.contains('clicked')) {
      kelvin.classList.remove('clicked')
      document.querySelector('.temperature').innerHTML = day.temp + "°C"
      unit = 'C'
    }
  })
})    

let sideMenuOpen = document.querySelector('#side-menu-open').addEventListener('click', () => {
  document.querySelector('.side-menu').classList.add('open')
})
let sideMenuClose = document.querySelector('#side-menu-close').addEventListener('click', () => {
  document.querySelector('.side-menu').classList.remove('open')
})

document.querySelector('.day0').click()

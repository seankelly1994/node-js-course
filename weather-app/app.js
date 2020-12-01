const chalk = require('chalk')
const geocode = require('./utils/geocode')
const currentweather = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log("Please provide an address")
} else {
    // Geocode the address location entry to return longitude and latitude
    geocode.geoCode(address, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Data', data)

            latitude = data.latitude
            longitude = data.longitude 

            // Fetch the weather based on the previous return
            currentweather.currentWeather(latitude, longitude, (error, weatherData) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(weatherData.location.name)
                    console.log(weatherData.description)
                    console.log(weatherData.temperature)
                    console.log(weatherData.feelsLike)
                }
            })

        }
    })
}



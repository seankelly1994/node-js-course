const request = require('request')

const currentWeather = (latitude, longitude, callback) => {
    latitude = encodeURIComponent(latitude)
    longitude = encodeURIComponent(longitude)

    const coordinates = latitude.toString() + ',' + longitude.toString()

    const weatherUrl = 'http://api.weatherstack.com/current?access_key=971f8b363e0153bea29ce82f29db5061&query=' + coordinates + '&units=m'

    request({ url: weatherUrl , json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback('Error from api response, coordinates not found!', undefined)
        } else {
            const data = response.body
            
            results = {
                temperature: data.current.temperature,
                feelsLike: data.current.feelslike,
                description: data.current.weather_descriptions,
                location: data.location
            }
            callback(undefined, results)
        }
    })
} 

module.exports = {
    currentWeather: currentWeather
}
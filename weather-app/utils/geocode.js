const request = require('request')

const geoCode = (address, callback) => {
    address = encodeURIComponent(address)
    const goeCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoia2Vsc3RlcjE5OTQiLCJhIjoiY2tpNWw4aThsMDEzdzJycDZrbXU3d3F4NSJ9.CQlGp30K-hsxj1EGAIKDeA&limit=1'

    request({ url: goeCodeUrl, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            const data = response.body

            callback(undefined, {
                latitude: data.features[0].center[1],
                longitude: data.features[0].center[0],
                location: data.features[0].place_name
            })
        }
    })
}

module.exports = {
    geoCode: geoCode
}
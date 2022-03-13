const request = require('request')
const forecast = (longitude, latitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=af0742957e2fc252f9fe09093c6525f5&query=" + longitude + "," + latitude
    request({url: url, json: true},(error, response) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(response.body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined,
                
                'It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.precip + '% chance of rain.'
            )
        }
    })

}

module.exports = forecast


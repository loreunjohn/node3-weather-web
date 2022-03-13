const request = require('request')
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoibG9yZXVuam9obiIsImEiOiJjbDBjdmtja2YwMzFtM29tcm01NmJyZGh2In0.mOlIfUYFLCKPpShYhy3bgA'
    //shorthand santax
    request({url, json: true}, (error, {body} = {}) => {
          if(error){
           callback('Unable to connect to location services!', undefined)
          } else if(body.features.length === 0) {

           callback('Unable to find location. Try another search!',undefined)
          }else{
              callback(undefined, {
                  longitude: body.features[0].geometry.coordinates[1],
                  latitude: body.features[0].geometry.coordinates[0],
                  location: body.features[0].place_name,
                  

              })
          }
    })

    // request({url: url, json: true}, (error, response) => {
    //     if(error){
    //      callback('Unable to connect to location services!', undefined)
    //     } else if(response.body.features.length === 0) {

    //      callback('Unable to find location. Try another search!',undefined)
    //     }else{
    //         callback(undefined, {
    //             longitude: response.body.features[0].geometry.coordinates[1],
    //             latitude: response.body.features[0].geometry.coordinates[0],
    //             location: response.body.features[0].place_name,
                

    //         })
    //     }
    // })


}

module.exports = geocode


// const url = 'http://api.weatherstack.com/current?access_key=af0742957e2fc252f9fe09093c6525f5&query=New York'



// request({ url: url}, (erro, response) => {
//       console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current)
// })

// request({ url: url, json: true}, (error, response) => {
    
//     if(error){
//         console.log(chalk.red('Unable to connect to weather service!'))
//     }
    
//     else if(response.body.error){

//          console.log(chalk.red('Unable to find location!'))

//     }
    
//     else{
//         const temp = response.body.current.temperature
//         const feelslikeTemp = response.body.current.feelslike
//         console.log('It is currently ' + temp + ' degress out. It feels like ' + feelslikeTemp + ' degress out.')
//     }
// })

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibG9yZXVuam9obiIsImEiOiJjbDBjdmtja2YwMzFtM29tcm01NmJyZGh2In0.mOlIfUYFLCKPpShYhy3bgA'

//     request({url: geocodeUrl,json:true}, (error, response,body) => {

//         if(error){
//             console.log(chalk.red('Unable to connect to location service!'))
//         }

//         else if(response.body.features.length === 0)
//         {
//             console.log(chalk.red('Unable to find location. Try another search!'))
//         }
        
//         else{
//             const lognitude = response.body.features[0].geometry.coordinates[0]
//             const latitude = response.body.features[0].geometry.coordinates[1]

//             console.log('Longitude: ' + lognitude)
//             console.log('Latitude: ' + latitude)
//         }
       


//     })


//Los Angeles
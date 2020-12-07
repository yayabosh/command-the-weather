'use strict';
const fetch = require('node-fetch')

const params = {
    access_key: '06c812440dc9da4370a71068b4384163',
    units: 'f'
}

const fetchCurrentWeather = async city => {
    const response = await fetch(
        'http://api.weatherstack.com/current'
        + `?access_key=${params.access_key}`
        + `&query=${city}`
        + `&units=${params.units}`
    ).then(response => response.json())

    const currentWeather = {
        location: response.location.name,
        country: response.location.country,
        latitude: response.location.lat,
        longitude: response.location.lon,
        temperature: response.current.temperature,
        local_time: response.location.localtime
    }

    console.log(currentWeather)
}

module.exports = {
    fetchCurrentWeather
}

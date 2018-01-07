// 

// google maps API key = AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0
// forecast.io API = 9f1d9474a178bdf8328ea19d1c596051
// url: https://api.darksky.net/forecast/9f1d9474a178bdf8328ea19d1c596051/30.3248256,-97.73895429999999

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`Current temperature is ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  };
});

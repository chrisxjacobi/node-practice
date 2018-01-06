// used darksky.net API to find real time weather data, tested request with local austin zipcode

// google maps API key = AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0
// forecast.io API = 9f1d9474a178bdf8328ea19d1c596051
// url: https://api.darksky.net/forecast/9f1d9474a178bdf8328ea19d1c596051/30.3248256,-97.73895429999999

// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
// .options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//make a call to request to request url, print body.currently.temperature

const request = require('request');

request({
  url: `https://api.darksky.net/forecast/9f1d9474a178bdf8328ea19d1c596051/30.3248256,-97.73895429999999`,
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to forecast.io servers.');
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch error.');
  } else if (response.statusCode === 200) {
    console.log(`Current temperate: ${body.currently.temperature}`);

  }
});

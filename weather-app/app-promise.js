// chained geolocator and weather request promises with axios, which returns promises accessed with 'then'. also added catch call to handle errors

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help()
.alias('help', 'h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/9f1d9474a178bdf8328ea19d1c596051/${lat},${lng}`;
  return axios.get(weatherURL);
  console.log(response.data.results[0].formatted_address);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`The temperature is ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
  if (e.code === "ENOTFOUND") {
    console.log('Unable to connect to API servers');
  } else {
    console.log(e.message);
  }
});

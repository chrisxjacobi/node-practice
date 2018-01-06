// pretty printed body (to be displayed on terminal with node) with JSON.stringify, followed response, and tested error logging...also printed some information from the request to the weather API(address, lat, lng)
// API key = AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0

const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

// practiced callback functions with timeouts for illustration of async, used npm request backage to call a google maps API for an address using generated API key

const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0',
  json: true
}, (error, response, body) => {
  console.log(body);
})

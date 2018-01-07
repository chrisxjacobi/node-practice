const request = require('request');

var geocodeAddress = (address) => {
  var encodedAddress = encodeURIComponent(address);

  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google servers.')
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });

};

geocodeAddress('78756').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});


//load request, copy geocode address function (starting with variable declaration), no callback! add promises resolve/reject, request needs to go inside of promise constructor fn

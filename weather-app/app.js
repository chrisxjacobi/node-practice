// set yargs options, encode/decode URI Components, set error handling for unavailable address and server errors...exported logic to another directory and used a callback for error handling
// API key = AIzaSyAVOrV5-E0f-LY20p_aDdnTgn-k8RSolq0

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});


// create new directory and file, call geocode.geocodeAddress(argv.a), export geocodeAddress function, move logic to new file, load request into new file and delete on app.js, call first argument 'address';

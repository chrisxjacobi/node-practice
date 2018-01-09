// used templating/view engine (handlebars) to render html, used res.render to create pages and used property titles to display info on .hbs pages

const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// render home.hbs, make new page, same h1, footer, 'welcome' in <p> tag as a new obj property

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my home page!!!!'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
});

app.listen(3000, () => {
  console.log('Server is up on Port 3000');
});

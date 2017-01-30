var express = require('express'),
      pug = require('pug'),
      app = express(),
      userStore = require('./country-reader');

app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index', { countrys: userStore.getUsers() });
});

app.listen(3000, () => {
  console.log('Web Server is running on port 3000');
});

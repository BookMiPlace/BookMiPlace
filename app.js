const { Client } = require('pg');
const { DATABASE_URL } = process.env;
const db = require('./db/models');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

require('dotenv').config();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers'));

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log('Listening on port ' + port);
  });
});
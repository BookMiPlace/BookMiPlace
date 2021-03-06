const { Client } = require('pg');
const { DATABASE_URL } = process.env;
const db = require('./models');
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

    // let prov, org;
    // db.Provider.create( { email: 'alan@bookmiplace.com' } )
    // .then((provider) => {
    //   console.log('provider ' + provider);
    //   prov = provider;
    // })
    // .then(() => {
    //   db.Organisation.create( { name: 'My Org' } )
    //   .then((organisation) => {
    //     console.log('organisation ' + organisation);
    //     org = organisation;
    //   })
    //   .then(() => {
    //     console.log('org.id ' + org.id);
    //     console.log('prov.id ' + prov.id);

    //     db.OrganisationProvider.create( 
    //       { 
    //         organisation_id: org.id, 
    //         provider_id: prov.id
    //       }
    //     )
    //     .then((organisation_provider) => {
    //       console.log('organisation_provider ' + organisation_provider);

    //       prov.createTrip({ name: 'My trip' });
    //     });
    //   });
    // });
  });
});

# Project Title
BookMiPlace

## Getting Started
Install node dependencies, run: `yarn`

Add to yarn / node module, run: `yarn add MODULE_NAME`

Add a development only dependency, run: `yarn add --dev MODULE_NAME`

Add to front end css, edit: public/stylesheets/src/main.css

Add to front end js, edit: public/javascript/src/index.js

Build front end assets for development, run: `yarn run dev`

Build front end assets for development, run: `yarn run build`
  (May need to install webpack... run `npm i webpack -g`)
  (May see an error: "Entrypoint undefined = extract-text-webpack-plugin-output-filename"...
  ... can look into later, the build still works)


Run local server, run: `heroku local web`


To push changes to production (remember to send to GitHub first for code review...),
... then once merged into master, run: 
`git push heroku master`

Visit app (currently): https://rocky-caverns-17264.herokuapp.com/

## Database set up:
Make sure you have PostGres installed

Create a postgres user:
`createuser -s postgres`

Create the development DB:
`createdb -U postgres book_mi_place_development`

Create the test DB:
`createdb -U postgres book_mi_place_test`

## Running the tests

`yarn test`

### Break down into end to end tests

//TODO


(TODO: complete more of this template https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)


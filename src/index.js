const express = require('express');
const app = express();
const path = require('path');
const handlebars  = require('express-handlebars');

const port = 3000;

const route = require('./routes/index');

//set static files public/
app.use(express.static(path.join(__dirname, 'public')));

//Body parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route
//Routes init
route(app);



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
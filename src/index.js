const express = require('express');
const app = express();
const path = require('path');
const handlebars  = require('express-handlebars');

const port = 3000;

//set static files public/
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/search', (req, res) => {
  console.log(req.query.q);
  res.render('search');
});

app.get('/news', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
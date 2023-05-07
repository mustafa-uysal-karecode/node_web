const express = require('express');
const app = express();

const port = 3000;

const ejs = require('ejs');
const layout = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'))
app.use(layout)
app.set('layout', './layout/layout')
app.set("layout extractScripts", true)

app.get('/', (req, res) => {
    res.render('index', { title: "deneme 1 2 ", message: 'Merhaba Dünya!' });
  });
app.get('/about', (req, res) => {
    res.render('about', { title: "deneme 1 2 ", message: 'Merhaba Dünya!' });
  });
app.listen(port, () => {
    console.log(`Sunucu ${port} numaralı portta çalışıyor`);
  });
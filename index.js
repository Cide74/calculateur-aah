
require('dotenv').config();

const PORT = process.env.PORT || 5050;

const express = require('express');
const app = express();
const router = require('./src/router/route');


app.set('views', './src/views');
app.set('view engine', 'ejs');

//app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(router);

// on lance le serveur !
app.listen(PORT,() => {
  console.log(`Le serveur tourne sur l'url:${PORT}`);
});

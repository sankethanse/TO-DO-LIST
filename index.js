const express = require('express');
const app = express();
const port = 5000;
const db= require('./config/config');
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err){

    if(err){
        console.log(`error in running the server ${err}`);
    }
    console.log(`Server running on port: ${port}`);
})

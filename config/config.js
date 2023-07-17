// require library
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://127.0.0.1/TODO_WORK');
//aquire the connection to checkif it is successful
const db= mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to db'));
// if run print message
db.once('open', function(){
    console.log('Successfully connected to database')
})
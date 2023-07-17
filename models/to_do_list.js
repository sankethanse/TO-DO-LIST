const mongoose = require('mongoose');

const todoSchema=new mongoose.Schema({
    work:{
        type: String,
        // required: true
    },
    Type:{
        type : String,
        required: true
    },
    date:{
        type: String,
        // required: true
    }
});

const Todolist = mongoose.model('Todolist', todoSchema);

module.exports=Todolist;
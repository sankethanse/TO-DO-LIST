const Todolist = require('../models/to_do_list')
module.exports.Todolist=function(req,res){
    Todolist.create({
        work: req.body.work,
        Type: req.body.Type,
        date: req.body.date
    }).then( (newContact) => {
        console.log("*******", newContact);
        return   res.redirect('back');
    }).catch((err) => {
        console.error(err);
        return;
    })

}
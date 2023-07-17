const Todolist = require('../models/to_do_list')
module.exports.home=function(req, res){
    Todolist.find({})
    .then(
    (to_do) => {
        return res.render('home',{
            title:"I am Flying",
            todo_work:to_do
        });
    }).catch((err) => {
        console.error(err);
        return;
    })
}

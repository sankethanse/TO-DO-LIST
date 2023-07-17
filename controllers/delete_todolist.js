const Todolist = require('../models/to_do_list')
module.exports.deletteTodo = async function(req,res){
    const idsToDelete = Object.keys(req.body);
     console.log(idsToDelete)
    // Checking if there are any ids to delete
    if (!idsToDelete || idsToDelete.length === 0) {
        return res.redirect('back');
    }

    // Todolist.deleteMany({ _id: { $in: idsToDelete } });
    // then((contacts)=>{
    //     return res.redirect('back');
    // })
    // .catch((err) => {
    //     console.error(err);
    //     return;
    // });
    try {
        // Find and delete todos using the $in operator with async/await
        await Todolist.deleteMany({ _id: { $in: idsToDelete } });
        // console.log('Todos deleted successfully');
        // Redirect back to the previous page after the deletion is complete
        return res.redirect('back');
    } catch (error) {
        console.log('Error in deleting todos:', error);
        // Handle error and redirect back to the previous page
        return res.redirect('back');
    }

};
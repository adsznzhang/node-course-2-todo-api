const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '59cb9256180b75d81f7a2793';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '59c983d743073dd8165b6b71';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User by ID', user);
}).catch((e) => {
    console.log(e);
});

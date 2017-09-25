var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//creat new todo

// var newTodo = new Todo({
//     text: 'Cook dinner'

// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// },(e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e) => {
//     console.log('Unable to save otherTodo');
// })
//user module
//email property - require it -trim it- set type - set min lenght of 1
var User = mongoose.model('User',{
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

var user = new User({
    email: 'adszn@hotmail.com'
});

user.save().then((doc) => {
    console.log('User saved', doc);
},(e) => {
    console.log('Unable to save user', e);
});

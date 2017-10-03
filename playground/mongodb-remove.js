const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then(() => {})

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


// Todo.findOneAndRemove({}).then(() => {
    
// });

Todo.findByIdAndRemove('59d2ed50e827863cbb78a1db').then((result) => {
    console.log(result);
});

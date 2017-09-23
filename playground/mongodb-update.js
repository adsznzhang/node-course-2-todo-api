//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59c3a453e51f42e7f8fe017d")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((reslut) => {
    //     console.log(reslut);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59c39cba5b12166b0e3f5ff0")
    },{
        $set: {
            name: 'Adrian'
        },
        $inc: {
            age:1
        }
    }, {
        returnOriginal: false
    }).then((reslut) => {
        console.log(reslut);
    });
});

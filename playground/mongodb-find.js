//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Users').find({name: 'zhen'}).toArray().then((docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Unable to fetch users', err);
    });

    //db.close();
});

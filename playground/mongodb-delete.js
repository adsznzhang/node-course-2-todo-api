//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('connected to mongodb server');
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((reslut) => {
    //     console.log(reslut);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((reslut) => {
    //     console.log(reslut);
    // });
    //db.close();
    // db.collection('Users').deleteMany({name: 'zhen'});
    // db.collection('Users').findOneAndDelete({_id: new ObjectID("传入参数")});
});

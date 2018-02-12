//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err){
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');


  //deleteOne
  // db.collection('Todos').deleteMany({
  //   text: 'Something'
  // }).then((result) => {
  //   // console.log(JSON.stringify(result, undefined, 2));
  //   console.log(result);
  //   db.close();
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  db.collection('Todos').findOneAndDelete({
    text: 'Something'
  }).then((result) => {
    // console.log(JSON.stringify(result, undefined, 2));
    console.log(result);
    db.close();
  }, (err) => {
    console.log('Unable to delete todos', err);
  });
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://master:master@ds133557.mlab.com:33557/todoapp'  
};
mongoose.connect(db.mlab || db.localhost);

module.exports = {mongoose};

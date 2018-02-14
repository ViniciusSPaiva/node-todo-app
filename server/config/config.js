var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URL = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URL = 'mongodb://localhost:27017/TodoAppTest';
} else if(env === 'production'){
  process.env.MONGODB_URL = 'mongodb://master:master@ds133557.mlab.com:33557/todoapp';
}

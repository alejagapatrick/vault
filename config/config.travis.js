module.exports =
{ port: process.env.PORT || 3000,
  database: process.env.MONGO_URI || 'localhost/test'
};
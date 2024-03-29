const Sequelize = require('sequelize');
const Post = require('./post');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;

db.Post = Post;
db.User = User;

Post.init(sequelize);
Post.associate(db);

User.init(sequelize);
User.associate(db);

module.exports = db;


const { DataTypes } = require('sequelize');
const sequelize = require('../configuration/mysql');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

User.sync({ alter: true })
.then(() => {
  console.log("Data Base Sync With User")
  User.bulkCreate([
    { firstName: 'Smit', lastName: 'Pethani', email: 'Smit@example.com' },
    { firstName: 'Smit1', lastName: 'Pethani', email: 'Smit1@example.com' },
    { firstName: 'Smit2', lastName: 'Pethani', email: 'Smit2@example.com' },
    { firstName: 'Smit3', lastName: 'Pethani', email: 'Smit3@example.com' },
  ]).then(() => {
    module.exports = User;
  })
})
.catch((err) => {
  console.error(err)
})

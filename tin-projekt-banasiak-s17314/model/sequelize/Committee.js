const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Committee = sequelize.define('Committee', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },

   name: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
   },

   members: {
       type: Sequelize.INTEGER,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [1,2],
            msg: "Pole powinno zawierać liczbę od 1 do 10"
        },
    }
   },

   difficulty: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        },
    }
   }
});

module.exports = Committee;


const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Result = sequelize.define('Result', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },

   date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [1,10],
                msg: "Pole powinno zawierać datę w formacie RRRR-MM-DD"
            },
        }
   },

   grade: {
       type: Sequelize.INTEGER,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [0,1],
            msg: "Pole powinno zawierać ocenę w skali 2-5"
        },
    }
   },

   resultName: {
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

module.exports = Result;


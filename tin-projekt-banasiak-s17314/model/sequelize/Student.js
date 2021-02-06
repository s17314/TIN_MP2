const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Student = sequelize.define('Student', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   firstName: {
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
   lastName: {
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
   index: {
       type: Sequelize.INTEGER,
       allowNull: false,
       unique: true,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [1,3],
            msg: "Pole powinno zawierać od 1 do 3 cyfr"
        },
    }
   },
   course: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                msg: "Należy wybrać kierunek"
            }
        }
   }

});

module.exports = Student;


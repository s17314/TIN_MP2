const sequelize = require('./sequelize');

const Student = require('../../model/sequelize/Student');
const Committee = require('../../model/sequelize/Committee');
const Result = require('../../model/sequelize/Result');

module.exports = () => {
    Student.hasMany(Result, {as: 'results', foreignKey: {name: 'stud_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Result.belongsTo(Student, {as: 'student', foreignKey: {name: 'stud_id', allowNull: false} } );
    Committee.hasMany(Result, {as: 'results', foreignKey: {name: 'com_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Result.belongsTo(Committee, {as: 'committee', foreignKey: {name: 'com_id', allowNull: false} });

    let allStuds, allComms;

    return sequelize
        .sync({force: true})
        .then( () => {
            return Student.findAll();
        })
        .then(studs => {
            if( !studs || studs.length == 0 ) {
                return Student.bulkCreate([
                    {firstName: 'Jan', lastName: 'Kowalski', index: 100, course: 'Informatyczne Karate'},
                    {firstName: 'Adam', lastName: 'Barański', index: 201, course: 'Zarządzanie Łomotem'},
                    {firstName: 'Karolina', lastName: 'Dreszowska', index: 324, course: 'Sztuka Nowych Zapasów'},
                ])
                .then( () => {
                    return Student.findAll();
                });
            } else {
                return studs;
            }
        })
        .then( studs => {
            allStuds = studs;
            return Committee.findAll();
        })
        .then( comms => {
            if( !comms || comms.length == 0 ) {
                return Committee.bulkCreate([
                    { name: 'Javaszewy', members: 3, difficulty: '999999+'},
                    { name: 'Robociarze', members: 2, difficulty: '0b11000011010011111'},
                    { name: 'PRImadonny', members: 4, difficulty: 'Nietrywialny'}
                ])
                .then( () => {
                    return Student.findAll();
                });
            } else {
                return comms;
            }
        })
        .then( comms => {
            allComms = comms;
            return Result.findAll();
        })
        .then( results => {
            if( !results || results.length == 0 ) {
                return Result.bulkCreate([
                    {stud_id: allStuds[0]._id, com_id: allComms[0]._id, date: '08-10-2019', grade: 3, resultName: 'Ocena z litości'},
                    {stud_id: allStuds[0]._id, com_id: allComms[0]._id, date: '06-02-2019', grade: 2, resultName: 'Całkowity pogrom'},
                    {stud_id: allStuds[1]._id, com_id: allComms[1]._id, date: '08-10-2019', grade: 4, resultName: 'Zaliczone na farcie'}
                ]);
            } else {
                return results;
            }
        });
};


const Student = require("../../model/sequelize/Student");
const Result = require("../../model/sequelize/Result");
const Committee = require("../../model/sequelize/Committee");

exports.getStudents = () => {
    return Student.findAll();
};

exports.getStudentById = (studId) => {
    return Student.findByPk(studId,
        {
            include: [{
                model: Result,
                as: 'results',
                include: [{
                    model: Committee,
                    as: 'committee'
                }]
            }]
        });
};

exports.createStudent = (newStudData) => {
    return Student.create({
        firstName: newStudData.firstName,
        lastName: newStudData.lastName,
        index: newStudData.index,
        course: newStudData.course
    });
};

exports.updateStudent = (studId, studData) => {
    const firstName = studData.firstName;
    const lastName = studData.lastName;
    const index = studData.index;
    const course = studData.course
    return Student.update(studData, {where: {_id: studId }});
};

exports.deleteStudent = (studId) => {
    return Student.destroy({
        where: { _id: studId }
    });
};


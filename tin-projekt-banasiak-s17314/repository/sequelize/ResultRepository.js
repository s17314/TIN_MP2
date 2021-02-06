const Sequelize = require('sequelize');

const Student = require("../../model/sequelize/Student");
const Result = require("../../model/sequelize/Result");
const Committee = require("../../model/sequelize/Committee");

exports.getResults = () => {
    return Result.findAll({include: [
        {
            model: Student,
            as: 'student'
        },
        {
            model: Committee,
            as: 'committee'
        }]
    });
};


exports.getResultById = (resultId) => {
    return Result.findByPk(resultId, {include: [
            {
                model: Student,
                as: 'student'
            },
            {
                model: Committee,
                as: 'committee'
            }]
    });
};

exports.createResult = (data) => {
    console.log(JSON.stringify(data));

    return Result.create({
        stud_id: data.stud_id,
        com_id: data.com_id,
        date: data.date,
        grade: data.grade,
        resultName: data.resultName
    });
};

exports.updateResult = (resultId, data) => {
    return Result.update(data, {where: {_id: resultId }});
}

exports.deleteResult = (resultId) => {
    return Result.destroy({
        where: { _id: resultId }
    });
}

exports.deleteManyResults = (resultIds) => {
    return Result.find({ _id: { [Sequelize.Op.in]: resultIds }})
}


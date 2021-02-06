const Student = require("../../model/sequelize/Student");
const Result = require("../../model/sequelize/Result");
const Committee = require("../../model/sequelize/Committee");

exports.getCommittees = () => {
    return Committee.findAll();
};

exports.getCommitteeById = (commId) => {
    return Committee.findByPk(commId,
        {
            include: [{
                model: Result,
                as: 'results',
                include: [{
                    model: Student,
                    as: 'student'
                }]
            }]
        });
};

exports.createCommittee = (newCommData) => {
    return Committee.create({
        name: newCommData.name,
        members: newCommData.members,
        difficulty: newCommData.difficulty
    });
};

exports.updateCommittee = (commId, commData) => {
    const name = commData.name;
    const members = commData.members;
    const course = commData.course
    return Committee.update(commData, {where: {_id: commId }});
};

exports.deleteCommittee = (commId) => {
    return Committee.destroy({
        where: { _id: commId }
    });

}; 
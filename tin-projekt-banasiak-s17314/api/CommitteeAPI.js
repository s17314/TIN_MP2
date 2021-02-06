const CommitteeRepository = require('../repository/sequelize/CommitteeRepository');

exports.getCommittees = (req, res, next) => {
    CommitteeRepository.getCommittees()
        .then(comm => {
            res.status(200).json(comm);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getCommitteeById = (req, res, next) => {
    const commId = req.params.commId;
    CommitteeRepository.getCommitteeById(commId)
        .then(comm => {
            if(!comm) {
                res.status(404).json({
                    message: 'Committee with id: '+commId+' not found'
                })
            } else {
                res.status(200).json(comm);
            }
        });
};

exports.createCommittee = (req, res, next) => {
    CommitteeRepository.createCommittee(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateCommittee = (req, res, next) => {
    const commId = req.params.commId;
    CommitteeRepository.updateCommittee(commId, req.body)
        .then(result => {
           res.status(200).json({message: 'Committee updated!', comm: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteCommittee = (req, res, next) => {
    const commId = req.params.commId;
    CommitteeRepository.deleteCommittee(commId)
        .then(result => {
            res.status(200).json({message: 'Removed Committee', comm: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


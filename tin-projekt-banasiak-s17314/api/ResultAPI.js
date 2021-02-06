const ResultRepository = require('../repository/sequelize/ResultRepository');

exports.getResults = (req, res, next) => {
    ResultRepository.getResults()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getResultById = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.getResultById(resultId)
        .then(result => {
            if(!result) {
                res.status(404).json({
                    message: 'Result with id: '+resultId+' not found'
                })
            } else {
                res.status(200).json(result);
            }
        });
};

exports.createResult = (req, res, next) => {
    ResultRepository.createResult(req.body)
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

exports.updateResult = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.updateResult(resultId, req.body)
        .then(result => {
           res.status(200).json({message: 'Result updated!', result: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteResult = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.deleteResult(resultId)
        .then(result => {
            res.status(200).json({message: 'Removed Result', result: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


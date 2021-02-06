const ResultRepository = require('../repository/sequelize/ResultRepository');
const StudentRepository = require('../repository/sequelize/StudentRepository');
const CommitteeRepository = require('../repository/sequelize/CommitteeRepository');

exports.showResultList = (req, res, next) => {
    ResultRepository.getResults()
    .then(results => {
        res.render('pages/results/results-list', {
            results: results,
            navLocation: 'result'
        });
    });
}

// exports.showResultForm = (req, res, next) => {
//     res.render('pages/results/result-form', { navLocation: 'res' });
// }

// exports.showResultDetails = (req, res, next) => {
//     res.render('pages/results/result-details', { navLocation: 'res' });
// }

exports.showAddResultForm = (req, res, next) => {
    let allStuds, allComms;
    StudentRepository.getStudents()
        .then(studs => {
            allStuds = studs;
            return CommitteeRepository.getCommittees();
        })
        .then(comms => {
            allComms = comms;
            res.render('pages/results/result-details', {
                result: {},
                formMode: 'createNew',
                allStuds: allStuds,
                allComms: allComms,
                pageTitle: 'Nowy rezultat',
                btnLabel: 'Dodaj rezultat',
                formAction: '/results/add',
                navLocation: 'result'
            });
        });
}

exports.showEditResultForm = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.getResultById(resultId)
        .then(result => {
            res.render('pages/results/result-details', {
                result: result,
                formMode: 'edit',
                pageTitle: 'Edycja rezultatu',
                btnLabel: 'Edytuj rezultat',
                formAction: '/results/edit',
                navLocation: 'result'
            });
        });
};

exports.showResultDetails = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.getResultById(resultId)
        .then(result => {
            res.render('pages/results/result-details', {
                result: result,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły rezultatu',
                formAction: '',
                navLocation: 'result'
            });
        });
}

exports.addResult = (req, res, next) => {
    const resultData = { ...req.body };
    ResultRepository.createResult(resultData)
        .then( result => {
            res.redirect('/results');
        })
        .catch(err => {
            let allStuds, allComms;
            StudentRepository.getStudents()
                .then(studs => {
                    allStuds = studs;
                    return CommitteeRepository.getCommittees();
                })
                .then( result2 => {
                    res.render('pages/results/result-details', {
                        result: {},
                        formMode: 'createNew',
                        allStuds: allStuds,
                        allComms: allComms,
                        pageTitle: 'Nowy rezultat',
                        btnLabel: 'Dodaj rezultat',
                        formAction: '/results/add',
                        navLocation: 'result',
                        validationErrors: err.details
                    })
                })
        });
};

exports.updateResult = (req, res, next) => {
    const resultId = req.body._id;
    const resultData = { ...req.body };
    ResultRepository.updateResult(resultId, resultData)
    .then( result => {
        res.redirect('/results');
    })
    .catch(err => {
        res.render('pages/results/result-details', {
            result: result,
            formMode: 'edit',
            pageTitle: 'Edycja rezultatu',
            btnLabel: 'Edytuj rezultat',
            formAction: '/results/edit',
            navLocation: 'result',
            validationErrors: err.details
        })
    })
};

exports.deleteResult = (req, res, next) => {
    const resultId = req.params.resultId;
    ResultRepository.deleteResult(resultId)
    .then( () => {
        res.redirect('/results');
    }); 
};
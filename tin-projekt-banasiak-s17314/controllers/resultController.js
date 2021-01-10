exports.showResultList = (req, res, next) => {
    res.render('pages/results/results-list', { navLocation: 'res' });
}

exports.showResultForm = (req, res, next) => {
    res.render('pages/results/result-form', { navLocation: 'res' });
}

exports.showResultDetails = (req, res, next) => {
    res.render('pages/results/result-details', { navLocation: 'res' });
}
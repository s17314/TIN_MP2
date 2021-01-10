exports.showCommitteeList = (req, res, next) => {
    res.render('pages/committees/comittees-list', { navLocation: 'com' });
}

exports.showCommitteeForm = (req, res, next) => {
    res.render('pages/committees/comittee-form', { navLocation: 'com' });
}

exports.showCommitteeDetails = (req, res, next) => {
    res.render('pages/committees/comittee-details', { navLocation: 'com' });
}
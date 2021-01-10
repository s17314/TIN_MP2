exports.showStudentsList = (req, res, next) => {
    res.render('pages/students/students-list', { navLocation: 'stud' });
}

exports.showAddStudentForm = (req, res, next) => {
    res.render('pages/students/student-form', { navLocation: 'stud' });
}

exports.showStudentDetails = (req, res, next) => {
    res.render('pages/students/student-details', { navLocation: 'stud' });
}


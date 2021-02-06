const StudentRepository = require('../repository/sequelize/StudentRepository');

exports.showStudentsList = (req, res, next) => {
    StudentRepository.getStudents()
    .then(studs => {
        res.render('pages/students/students-list', {
            studs: studs,
            navLocation: 'stud'
        });
    });
}

// exports.showAddStudentForm = (req, res, next) => {
//     res.render('pages/students/student-form', { navLocation: 'stud' });
// }

// exports.showStudentDetails = (req, res, next) => {
//     res.render('pages/students/student-details', { navLocation: 'stud' });
// }

exports.showAddStudentForm = (req, res, next) => {
    res.render('pages/students/student-details', {
        stud: {},
        pageTitle: 'Nowy student',
        formMode: 'createNew',
        btnLabel: 'Dodaj studenta',
        formAction: '/students/add',
        navLocation: 'stud'
    });
}

exports.showEditStudentForm = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.getStudentById(studId)
        .then(stud => {
            res.render('pages/students/student-details', {
                stud: stud,
                formMode: 'edit',
                pageTitle: 'Edycja studenta',
                btnLabel: 'Edytuj studenta',
                formAction: '/students/edit',
                navLocation: 'stud'
            });
        });
};

exports.showStudentDetails = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.getStudentById(studId)
        .then(stud => {
            res.render('pages/students/student-details', {
                stud: stud,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły studenta',
                formAction: '',
                navLocation: 'stud'
            });
        });

}

exports.addStudent = (req, res, next) => {
    const studData = { ...req.body };
    StudentRepository.createStudent(studData)
        .then( result => {
            res.redirect('/students');
        })
        .catch(err => {
            res.render('pages/students/comittee-details', {
                stud: {},
                pageTitle: 'Nowy student',
                formMode: 'createNew',
                btnLabel: 'Dodaj studenta',
                formAction: '/students/add',
                navLocation: 'stud',
                validationErrors: err.details
            });
          });
};

exports.updateStudent = (req, res, next) => {
    const studId = req.body._id;
    const studData = { ...req.body };
    StudentRepository.updateStudent(studId, studData)
    .then( result => {
        res.redirect('/students');
    })
    .catch(err => {
        res.render('pages/students/comittee-details', {
            stud: stud,
            formMode: 'edit',
            pageTitle: 'Edycja studenta',
            btnLabel: 'Edytuj studenta',
            formAction: '/students/edit',
            navLocation: 'stud',
            validationErrors: err.details
        });
      });
};

exports.deleteStudent = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.deleteStudent(studId)
    .then( () => {
        res.redirect('/students');
    });
};








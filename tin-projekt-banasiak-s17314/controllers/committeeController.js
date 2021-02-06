const CommitteeRepository = require('../repository/sequelize/CommitteeRepository');

exports.showCommitteeList = (req, res, next) => {
    CommitteeRepository.getCommittees()
    .then((comms) => {
      res.render("pages/committees/comittees-list", {
        comms: comms,
        navLocation: "comm",
      });
    });
}

exports.showAddCommitteeForm = (req, res, next) => {
  res.render('pages/committees/comittee-details', {
      comm: {},
      pageTitle: 'Nowy komitet',
      formMode: 'createNew',
      btnLabel: 'Dodaj komitet',
      formAction: '/committees/add',
      navLocation: 'comm'
  });
}

exports.showEditCommitteeForm = (req, res, next) => {
  const commId = req.params.commId;
  CommitteeRepository.getCommitteeById(commId)
      .then(comm => {
          res.render('pages/committees/comittee-details', {
              comm: comm,
              formMode: 'edit',
              pageTitle: 'Edycja komitetu',
              btnLabel: 'Edytuj komitet',
              formAction: '/committees/edit',
              navLocation: 'comm'
          });
      });
};

exports.showCommitteeDetails = (req, res, next) => {
  const commId = req.params.commId;
  CommitteeRepository.getCommitteeById(commId)
      .then(comm => {
          res.render('pages/committees/comittee-details', {
              comm: comm,
              formMode: 'showDetails',
              pageTitle: 'Szczegóły komitetu',
              formAction: '',
              navLocation: 'comm'
          });
      });
}

exports.addCommittee = (req, res, next) => {
  const commData = { ...req.body };
  CommitteeRepository.createCommittee(commData)
      .then( result => {
          res.redirect('/committees');
      })
      .catch(err => {
        res.render('pages/committees/comittee-details', {
            emp: empData,
            pageTitle: 'Nowy komitet',
            formMode: 'createNew',
            btnLabel: 'Dodaj komitet',
            formAction: '/committees/add',
            navLocation: 'comm',
            validationErrors: err.details
        });
      });
};

exports.updateCommittee = (req, res, next) => {
  const commId = req.body._id;
  const commData = { ...req.body };
  CommitteeRepository.updateCommittee(commId, commData)
    .then( result => {
        res.redirect('/committees');
    })
    .catch(err => {
      res.render('pages/committees/comittee-details', {
          comm: comm,
          formMode: 'edit',
          pageTitle: 'Edycja komitetu',
          btnLabel: 'Edytuj komitet',
          formAction: '/committees/edit',
          navLocation: 'comm',
          validationErrors: err.details
      });
    });
};

exports.deleteCommittee = (req, res, next) => {
  const commId = req.params.commId;
  CommitteeRepository.deleteCommittee(commId)
    .then( () => {
        res.redirect('/committees');
    });
};
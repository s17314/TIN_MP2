const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/', studentController.showStudentsList);
router.get('/add', studentController.showAddStudentForm);
router.get('/details/:studId', studentController.showStudentDetails);

module.exports = router;


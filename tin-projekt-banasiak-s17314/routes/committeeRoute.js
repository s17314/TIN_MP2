const express = require('express');
const router = express.Router();

const committeeController = require('../controllers/committeeController');

router.get('/', committeeController.showCommitteeList);
router.get('/add', committeeController.showCommitteeForm);
router.get('/details/:comId', committeeController.showCommitteeDetails);

module.exports = router;


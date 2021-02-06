const express = require('express');
const router = express.Router();

const committeeController = require('../controllers/committeeController');

router.get('/', committeeController.showCommitteeList);
router.get('/add', committeeController.showAddCommitteeForm);
router.get('/edit/:commId', committeeController.showEditCommitteeForm);
router.get('/details/:commId', committeeController.showCommitteeDetails);

router.post('/add', committeeController.addCommittee); 
router.post('/edit', committeeController.updateCommittee);
router.get('/delete/:commId', committeeController.deleteCommittee);

module.exports = router;


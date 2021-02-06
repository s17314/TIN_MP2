const express = require('express');
const router = express.Router();

const commApiController = require('../../api/CommitteeAPI');

router.get('/', commApiController.getCommittees);
router.get('/:commId', commApiController.getCommitteeById);
router.post('/', commApiController.createCommittee);
router.put('/:commId', commApiController.updateCommittee);
router.delete('/:commId', commApiController.deleteCommittee);

module.exports = router;


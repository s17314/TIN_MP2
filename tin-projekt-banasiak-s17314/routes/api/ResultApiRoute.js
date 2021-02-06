const express = require('express');
const router = express.Router();

const resultApiController = require('../../api/ResultAPI');

router.get('/', resultApiController.getResults);
router.get('/:resultId', resultApiController.getResultById);
router.post('/', resultApiController.createResult);
router.put('/:resultId', resultApiController.updateResult);
router.delete('/:resultId', resultApiController.deleteResult);

module.exports = router;


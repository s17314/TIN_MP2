const express = require('express');
const router = express.Router();

const resultController = require('../controllers/resultController');

router.get('/', resultController.showResultList);
router.get('/add', resultController.showResultForm);
router.get('/details/:resId', resultController.showResultDetails);

module.exports = router;


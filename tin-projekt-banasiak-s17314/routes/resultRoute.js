const express = require('express');
const router = express.Router();

const resultController = require('../controllers/resultController');

router.get('/', resultController.showResultList);
router.get('/add', resultController.showAddResultForm);
router.get('/edit/:resId', resultController.showEditResultForm);
router.get('/details/:resId', resultController.showResultDetails);

router.post('/add', resultController.addResult); 
router.post('/edit', resultController.updateResult);
router.get('/delete/:resId', resultController.deleteResult);

module.exports = router;


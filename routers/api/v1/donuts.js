const express = require('express')
const router = express.Router()
const donutsController = require('../../../controllers/api/v1/donuts')

router.get('/', donutsController.getAll);
router.post('/', donutsController.create);
router.put('/:id', donutsController.update);
router.delete('/:id', donutsController.remove);

module.exports = router;
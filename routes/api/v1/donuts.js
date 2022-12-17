const express = require('express');
const router = express.Router();
const donutsController = require('../../../controllers/api/v1/donuts');

router.get("/", donutsController.getAll);
router.post("/", donutsController.create);

module.exports = router;
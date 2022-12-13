const express = require('express');
const router = express.Router();

/* /api/v1/donuts */
router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "donuts": []
        }
    });
});


router.post("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "donut": {
            "text": "Learn Node.js"
            }
        }
    });
});

module.exports = router;
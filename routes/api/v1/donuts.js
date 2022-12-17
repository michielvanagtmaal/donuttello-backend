const express = require('express');
const router = express.Router();

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
                "text": "Learn node.js"
            }
        }
    });
});

module.exports = router;
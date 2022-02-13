const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'faculty get request received'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        msg: 'faculty post request received'
    })
})

module.exports = router
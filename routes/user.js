const express = require('express')

const router = express.Router()



router.get('/user', (req, res)  => {
    //express app is a request response handler
    res.json({
        data: 'hey you hit user API end point',
    });
});

module.exports = router
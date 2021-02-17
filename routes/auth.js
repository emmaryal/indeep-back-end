const express = require('express')

const router = express.Router()

//middleware
const {authCheck, adminCheck} = require('./../middlewares/auth')


//controller
const {createOrUpdateUser, currentUser} =require('./../controllers/auth.js')

const myMiddleware = (req, res, next) => {
    console.log('IM A MIDDLEWARE YAY')
    next();
}

router.post('/create-or-update-user', authCheck, createOrUpdateUser);
router.post('/current-user', authCheck, currentUser);
router.post('/current-admin', authCheck, adminCheck, currentUser);


module.exports = router;
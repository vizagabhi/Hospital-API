const express = require('express');
const router = express.Router();

const doctor = require('../controllers/doctorController')


router.post('/register',doctor.register)
router.post('/login',doctor.login)

module.exports = router;
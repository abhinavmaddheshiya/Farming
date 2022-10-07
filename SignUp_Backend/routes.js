const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/signup',controller.FarmerSignup);

module.exports = router;
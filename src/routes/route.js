const express = require('express');
// this is the syntax to use: const abc = require('../introduction/intro')
const firstModule = require('../logger/logger')
const firstHelper = require('../util/helper')
const stringchange = require('../validator/formatter')


const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send("welcome to my application. my name is himanshu soni and i am part of FunctionUp Plutonium cohort");
    firstModule.welcome();
    firstHelper.date();
    firstHelper.month();
    firstHelper.batch();
    stringchange.trim();
    stringchange.lower();
    stringchange.upper();

});

module.exports = router;
// adding this comment for no reason
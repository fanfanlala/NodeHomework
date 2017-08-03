/**
 * Created by dllo on 17/8/3.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.render('reading');
});
module.exports = router;
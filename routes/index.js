var express = require('express');
var router = express.Router();
const indexController = require ("../controller/indexController");

/* GET home page. */
router.get('/',indexController.devolverHome);

module.exports = router;

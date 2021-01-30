var express = require("express");
var router = express.Router();

const mainController = require('../controllers/mainController');

// page acceuil
router.get('/', mainController.home);
router.get('/calculateurSimple', mainController.calculateurSimple);



module.exports = router;
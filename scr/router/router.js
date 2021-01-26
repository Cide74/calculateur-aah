

var express = require("express");

var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello World");
});
router.get("/plus", function (req, res, next) {
  res.send("plus");
});
router.get("/moins", function (req, res, next) {
  res.send("moins");
});
router.get("/win", function (req, res, next) {
  res.send("win");
});
module.exports = router;



module.exports = router;
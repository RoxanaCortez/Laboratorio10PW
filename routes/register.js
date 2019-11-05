var express = require('express');
var router = express.Router();
const registerController = require("./../controllers/RegisterController");

router.get("/", registerController.getRegister);
router.post("/", registerController.insert);
router.get("/:id", registerController.getOneRegister);

module.exports = router;

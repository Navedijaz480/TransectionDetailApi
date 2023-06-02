const express = require("express");
const router = express.Router();

const TransectionController = require("../controller/transectionController");
router.post("/add_detail", TransectionController.addTransection);
router.get("/show_Detail", TransectionController.getTransection);

module.exports = router;
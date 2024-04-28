const express = require("express");
const router = express.Router();

const device = require("../controllers/device.js");

router.get("/api/devices", device.getDevices);

module.exports = router;

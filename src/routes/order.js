const express = require("express");
const router = express.Router();

const order = require("../controllers/order.js");
const { auth } = require("../util/auth.js");

router.post("/api/orders/create-order", auth, order.addOrder);

module.exports = router;

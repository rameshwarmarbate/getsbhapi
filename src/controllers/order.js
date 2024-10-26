const status = require("http-status");
const CustomerModel = require("../models/customer");
const OrderModel = require("../models/order");
const OrderCounter = require("../models/orderCounter");

const generateOrderNo = async () => {
  const currentDate = new Date();
  const dateString = `${String(currentDate.getDate()).padStart(2, "0")}${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}${currentDate.getFullYear().toString().slice(-2)}`; // Format DDMMYY
  let counter = await OrderCounter.findOne();
  if (!counter) {
    counter = await OrderCounter.create({});
  }

  // Increment the counter
  const newOrderNo = counter.last_order_no + 1;

  // Update the counter in the database
  await OrderCounter.update(
    { last_order_no: newOrderNo },
    { where: { id: counter.id } }
  );

  // Format the order number with leading zeros
  const formattedOrderNo = `GETS-${dateString}-${String(newOrderNo).padStart(
    4,
    "0"
  )}`;

  return formattedOrderNo;
};

async function addOrder(req, res) {
  try {
    const {
      device_id,
      unit_price,
      quantity,
      first_name,
      last_name,
      mobile,
      email,
      address,
      pincode,
      city,
      state,
      country,
      gst_no,
      user_id,
    } = req.body;

    const customer = await CustomerModel.create({
      first_name,
      last_name,
      mobile,
      email,
      address,
      pincode,
      city,
      state,
      country,
      gst_no,
      created_by: user_id,
    });
    const orderNo = await generateOrderNo();

    const order = await OrderModel.create({
      order_no: orderNo,
      device_id,
      customer_id: customer.id,
      unit_price,
      quantity,
      created_by: user_id,
    });

    res.status(status[200]).json({ order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(status[500]).json({
      message: error.message || "An error occurred while creating the order.",
    });
  }
}

module.exports = {
  addOrder,
};

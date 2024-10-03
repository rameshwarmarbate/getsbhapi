const UserDevice = require("../models/userDevice.js");
const Device = require("../models/device.js");
const User = require("../models/user.js");
const SalesPerson = require("../models/salesperson.js");

Device.hasMany(UserDevice, { foreignKey: "device_id" });
UserDevice.belongsTo(Device, { foreignKey: "device_id" });

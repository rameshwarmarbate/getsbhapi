const status = require("http-status");

const deviceModel = require("../models/device.js");

const has = require("has-keys");

module.exports = {
  async getDevices(req, res) {
    const { is_smart_device } = req.query;
    let filters = {};
    if (is_smart_device) {
      filters = {
        is_smart_device: is_smart_device === "true",
      };
    }
    let data = await deviceModel.findAll({ where: filters });
    res.json(data);
  },
};

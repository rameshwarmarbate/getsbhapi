const db = require("../models/database.js");
const { DataTypes } = require("sequelize");

const UserDevice = db.define(
  "UserDevice",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    device_id: {
      type: DataTypes.BIGINT.UNSIGNED,
    },
    device_no: {
      type: DataTypes.STRING(50),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    tableName: "user_device",
    timestamps: false,
  }
);

module.exports = UserDevice;

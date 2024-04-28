const db = require("../models/database.js");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    mobile: {
      type: DataTypes.STRING(15),
    },
    otp: {
      type: DataTypes.STRING(6),
    },
  },
  {
    sequelize: db,
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;

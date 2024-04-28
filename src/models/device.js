const { DataTypes } = require("sequelize");
const db = require("@models/database.js");

const Device = db.define(
  "Device",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    feature1: {
      type: DataTypes.STRING,
    },
    feature2: {
      type: DataTypes.STRING,
    },
    feature3: {
      type: DataTypes.STRING,
    },
    feature4: {
      type: DataTypes.STRING,
    },
    feature5: {
      type: DataTypes.STRING,
    },
    icon1: {
      type: DataTypes.STRING,
    },
    icon2: {
      type: DataTypes.STRING,
    },
    icon3: {
      type: DataTypes.STRING,
    },
    icon1_desc: {
      type: DataTypes.STRING,
    },
    icon2_desc: {
      type: DataTypes.STRING,
    },
    icon3_desc: {
      type: DataTypes.STRING,
    },
    image_transparent: {
      type: DataTypes.STRING,
    },
    image1: {
      type: DataTypes.STRING,
    },
    image2: {
      type: DataTypes.STRING,
    },
    image3: {
      type: DataTypes.STRING,
    },
    is_smart_device: {
      type: DataTypes.BOOLEAN,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    tableName: "device",
    timestamps: true,
  }
);

module.exports = Device;

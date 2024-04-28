const { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

const Sequelize = require("sequelize");
// const Device = require("./device.js");

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialect: "mysql",
});

db.authenticate()
  .then(() => {
    console.log("Connected to database");
    db.sync({ alter: true })
      .then(async () => {
        console.log("Database sync successfully.");
        // try {
        //   const data = {
        //     title: "Smart Motion Sensor Light",
        //     description:
        //       "Illuminate your home effortlessly with our motion sensor LED light, perfect for various spaces like bedrooms, hallways, kitchens, and closets. Easy to install with adhesive pads and a magnet, it automatically turns off after 15-30 seconds of inactivity, ensuring energy efficiency.",
        //     feature1: "60 Lumens, 6500k - More Brighter",
        //     feature2: "400mAh battery capacity",
        //     feature3: "USB Charging",
        //     feature4: "15-30 seconds Auto Off Timer",
        //     feature5: "Wide-Angle Motion Sensitivity",
        //     icon1_desc: "High Lumens",
        //     icon2_desc: "Rechargeable",
        //     icon3_desc: "Motion Detection",
        //     is_smart_device: true,
        //     image1: "/image/motion_sensor1.jpg",
        //     image2: "/images/motion_sensor2.jpg",
        //     image3: null,
        //     icon1: "/icons/lumens.png",
        //     icon2: "/icons/recharge.png",
        //     icon3: "/icons/child.png",
        //     image_transparent: "/image/motion sensor_transparent.png",
        //   };

        //   const device = await db.models.Device.create(data);
        //   console.log(device);
        // } catch (error) {
        //   console.log("error");
        // }
      })
      .catch(() => {
        console.log("Database sync failed.");
      });
  })
  .catch((e) => {
    console.log("Database connection error ", e);
  });

module.exports = db;

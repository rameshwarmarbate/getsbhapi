const nodemailer = require("nodemailer");
const { template } = require("./constants");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: "support@getsbh.com",
    pass: "GETs@2024#",
  },
});

const sendOtp = (otp, email) => {
  const mailOptions = {
    from: '"GETS" <support@getsbh.com>',
    to: email,
    subject: "Your One-Time Password for Secure Access",
    html: template(otp),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });
};

module.exports = {
  sendOtp,
};

const bcrypt = require("bcrypt");
const generateOTP = () => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

const hashPassword = async (password) => {
  const saltRounds = 10; // The number of rounds to use for generating the salt
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
const verifyPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

module.exports = {
  generateOTP,
  hashPassword,
  verifyPassword,
};

const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = ({ email, token }) => {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "kasirecivanna@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `http://localhost:8080/users/verify/${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;

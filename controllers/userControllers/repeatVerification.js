const Joi = require("joi");
const { verifyByEmail, findUserByEmail } = require("../../service/serviceUser");

const repeatVerification = (req, res, next) => {
  const resp = Joi.object({
    email: Joi.string().required(),
  });

  const response = resp.validate(req.body);
  if (!response.value || !response.value.email) {
    res.status(400).json(response.error);
  } else {
    const email = response.value.email;
    const user = findUserByEmail(email);
    if (!user) {
      res.status(404).json({ message: "Please sign up" });
    } else {
      if (user.verify) {
        res
          .status(400)
          .json({ message: "Verification has already been passed" });
      }
      verifyByEmail({ email, token: user.verificationToken });
      res.status(200).json({ message: "Verification email sent" });
    }
  }
};

module.exports = repeatVerification;

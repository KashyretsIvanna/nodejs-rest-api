const { serchUser, registerUser } = require("../../service/serviceUser");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { ObjectId } = require("mongodb");

const signup = async (req, res, next) => {
  const payload = req.body;
  const shema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    subscription: Joi.string(),
  });
  const resp = await shema.validate(payload);
  const user = await serchUser(resp.value.email);
  const salt = await bcrypt.genSalt(10);

  if (user) {
    res.status(409);
    res.json({ message: "Email in use" });
  } else {
    if (resp.error) {
      res.status(400);
      res.json({ message: resp.error });
    } else {
      const id = ObjectId(32);
      const token = await jwt.sign({ _id: id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      const avatar = gravatar.url(resp.value.email);
      resp.value.password = await bcrypt.hash(resp.value.password, salt);
      await registerUser({
        _id: id,
        ...resp.value,
        token: token,
        avatarURL: avatar,
      });
      console.log(resp.value);
      res.status(201);
      res.json({
        token: token,
        user: {
          email: resp.value.email,
          subscription: resp.value.subscription
            ? resp.value.subscription
            : "starter",
        },
      });
    }
  }
};

module.exports = signup;

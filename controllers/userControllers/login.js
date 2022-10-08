const Joi = require("joi");
const { serchUser } = require("../../service/serviceUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {updateToken}=require("../../service/serviceUser")
require("dotenv").config();

const login = async (req, res, next) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const payload = req.body;
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  const resp = schema.validate(payload);
  res.header("Content-Type", "application/json");
  if (resp.error) {
    res.status(400);
    res.json({ message: resp.error });
  } else {
    const user = await serchUser(resp.value.email);
    console.log(user)
    if (user) {
      const bool = await bcrypt.compare(resp.value.password, user.password);
      if (bool) {
        const token = await jwt.sign({ _id: user._id }, SECRET_KEY, {
          expiresIn: "1d",
        });
        await updateToken(user._id,token)

        res.status(200);
        res.json({
          token: token,
          user: {
            email: resp.value.email,
            subscription: "starter",
          },
        });
      } else {
        res.status(401);
        res.json({ message: "email or password is wrong" });
      }
    } else {
      res.status(401);
      res.message({ message: "user not found" });
    }
  }
};

module.exports = login;

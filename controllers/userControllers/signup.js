const { serchUser, registerUser } = require("../../service/serviceUser");
const Joi = require("joi");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const payload = req.body;
  const shema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
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
      resp.value.password = await bcrypt.hash(resp.value.password, salt);
      await registerUser(resp.value);
      res.status(201);
      res.json({ name: resp.value.name, email: resp.value.email });
    }
  }
};

module.exports = signup;

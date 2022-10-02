const func = require("../models/contacts.js");
const { v4 } = require("uuid");
const Joi = require("joi");
const { createContact } = require("../service/index");

const post = async (req, res, next) => {
  let body = req.body;
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    favourite:Joi.boolean()
  });
  let resp = schema.validate(body);
  if (resp.error) {
    res.status(400);
    res.json({ message: "missing required name field" });
  } else {
    let added = { ...resp.value };
    createContact(added);
    res.status(201).json(added);

  }
};

module.exports = { post };

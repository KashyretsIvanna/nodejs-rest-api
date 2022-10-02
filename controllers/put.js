const Joi = require("joi");
const { updateContacts } = require("../service/index");
const putContacts = async (req, res, next) => {
  const paramets = req.params.contactId;
  let renovateBody = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    favorite: Joi.boolean().optional(),
  });
  let resp = schema.validate(renovateBody);
  if (resp.error) {
    res.status(400).json({ message: "missing fields" });
  } else {
    let response = await updateContacts(paramets, resp.value);
    if (response && Object.keys(renovateBody).length !== 0) {
      res.json(response);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  }
};

module.exports = { putContacts };

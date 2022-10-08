const Joi = require("joi");
const { updateStatusContact } = require("../service/index");
const patchContacts = async (req, res, next) => {
  const paramets = req.params.contactId;
  let renovateBody = req.body;

  const schema = Joi.object().keys({
    favorite: Joi.boolean().required(),
  });
  let resp = schema.validate(renovateBody);
  if (resp.error) {
    res.status(400).json({ message: "missing field favourite" });
  } else {
    console.log("update");
    let response = await updateStatusContact(paramets, resp.value.favorite);
    if (response && Object.keys(renovateBody).length !== 0) {
      res.json(response);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  }
};

module.exports = { patchContacts };

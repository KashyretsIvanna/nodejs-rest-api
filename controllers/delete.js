const func = require("../models/contacts.js");
const contacts = require("../Schema/scheme");
const { removeContacts } = require("../service/index.js");

const deleteEl = async (req, res, next) => {
  let id = req.params.contactId;
  //   let bool = await removeContacts(id);
  let bool = await func.removeContacts(id);

  console.log(bool);
  if (bool) {
    res.json({ message: "contact deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};
module.exports = { deleteEl };

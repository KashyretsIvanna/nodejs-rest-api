const { getContact } = require("../service/index");

const getId = async (req, res, next) => {
  let id = req.params.contactId;
  let contact = await getContact(id);
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = { getId };

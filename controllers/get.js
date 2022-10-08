const func = require("../models/contacts.js");
const { getAllContacts } = require("../service/index");

const getFunction = async (req, res, next) => {
  try {
    let results = await getAllContacts();
    res.status(200).json(results);
  } catch (err) {
    process.exit(1);
  }
};

module.exports = {
  getFunction,
};

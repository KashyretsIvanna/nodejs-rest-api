const func = require("../models/contacts.js");
const { getAllContacts } = require("../service/index");

const getFunction = async (req, res, next) => {
  try {
    let results = await getAllContacts();
    console.log(results)
    res.status(200).json(results);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = {
  getFunction,
};

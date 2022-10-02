const func = require("../models/contacts.js");

const getFunction = async (req, res, next) => {
  try {
    const results = await service.getAlltasks();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  //   const contacts = await func.listContacts();
  res.status(200).json(results);
};

module.exports = {
  getFunction,
};

const fs = require("fs").promises;
const contacts = require("../models/contacts.json");

const listContacts = async () => {
  return contacts;
};

const getContactById = async (contactId) => {
  return contacts.filter((el) => el.id === contactId)[0];
};

const removeContact = async (contactId) => {
  let newArray = [...contacts.filter((el) => el.id !== contactId)];
  let deleted = [...contacts.filter((el) => el.id === contactId)];

  await fs.writeFile(
    __dirname + "/contacts.json",
    JSON.stringify(newArray),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  if (deleted.length !== 0) {
    return true;
  } else {
    return false;
  }
};

const addContact = async (body) => {
  fs.writeFile(
    __dirname + "/contacts.json",
    JSON.stringify([...contacts, body]),
    (err) => {
      console.log(err);
    }
  );
};

const updateContact = async (contactId, body) => {
  let element = contacts.filter((el) => el.id === contactId)[0];
  let filtered = contacts.filter((el) => el.id !== contactId);
  let assigned = Object.assign(element, body);
  let array = [...filtered, assigned];
  await fs.writeFile(
    __dirname + "/contacts.json",
    JSON.stringify(array),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  return assigned;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

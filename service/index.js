const Contacts = require("../Schema/scheme");

const getAllContacts = (id) => Contacts.find();
const getContact = () => Contacts.findOne({ __id: id });
const createContact = ({ name, email, phone, favorite }) =>
  Contacts.create({
    name: name,
    email: email,
    phone: phone,
    favorite: favorite,
  });

const updateContacts = (id, fields) =>
  Contacts.findByIdAndUpdate({ __id: id }, fields, { new: true });

const removeContacts = (id) => Contacts.findByIdAndRemove({ __id: id });
const insertContacts = (array) => Contacts.insert(array);
module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContacts,
  removeContacts,
  insertContacts
};

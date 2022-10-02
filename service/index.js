const Contacts = require("../Schema/scheme");

const getAllContacts = () => Contacts.find();
const getContact = (id) => Contacts.findOne({ _id: id });
const createContact = ({ name, email, phone, favorite }) =>
  Contacts.create({
    name: name,
    email: email,
    phone: phone,
    favorite: favorite,
  });

const updateStatusContact = (id, favorite) => Contacts.findByIdAndUpdate({ _id: id }, { favorite }, { new: true });


const updateContacts = (id, fields) =>
  Contacts.findByIdAndUpdate({ _id: id }, fields, { new: true });

const removeContacts = (id) => Contacts.findByIdAndRemove({ _id: id });
module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContacts,
  removeContacts,
  updateStatusContact,
};

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const contacts = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});


contacts.method.nameEmail = () => console.log(this.name + " " + this.email);
const Contacts = mongoose.model('contacts', contacts);

module.exports=Contacts;

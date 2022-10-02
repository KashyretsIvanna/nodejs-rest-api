const func = require("../models/contacts.js")

const getId=async (req, res, next) => {
    let id = req.params.contactId
    let contact = await func.getContactById(id)
    if (contact) {
      res.status(200).json(contact)
    } else {
      res.status(404).json({ message: "Not found" })
    }
  }

  module.exports={getId}
const func = require("../models/contacts.js")

const getFunction = async (req, res, next) => {
    const contacts = await func.listContacts()
    res.status(200).json(contacts)
}

module.exports = {
getFunction
}
const func = require("../models/contacts.js")

const deleteEl = async (req, res, next) => {
    let id = req.params.contactId;
    let bool = await func.removeContact(id)
    console.log(bool)
    if (bool) {
        res.json({ message: "contact deleted" })
    } else {
        res.status(404).json({ message: "Not found" })
    }

}
module.exports = { deleteEl }
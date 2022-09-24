const func = require("../models/contacts.js")
const Joi = require('joi')

const putContacts = async (req, res, next) => {
    const paramets = req.params.contactId;
    let renovateBody = req.body;

    const schema = Joi.object().keys({
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        phone: Joi.string().optional()
    })
    let resp = schema.validate(renovateBody)
    if (resp.error) {
        res.status(400).json({ message: "missing fields" })
    }
    else {
        let response = await func.updateContact(paramets, resp.value)
        if (response && Object.keys(renovateBody).length !== 0) {
            res.json(response)
        } else {
            res.status(404).json({ message: 'Not found' })
        }
    }

}

module.exports = { putContacts }
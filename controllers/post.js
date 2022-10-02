const func = require("../models/contacts.js")
const { v4 } = require('uuid');
const Joi = require('joi')

const post = async (req, res, next) => {
    let id = v4()
    let body = req.body;
    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string(),
        phone: Joi.string()
    })
    let resp = schema.validate(body)
    if (resp.error) {
        res.status(400)
        res.json({ message: "missing required name field" })
    } else {
        let added = { ...resp.value, id }
        res.status(201).json(added)
        func.addContact(added)

    }
}

module.exports = { post }
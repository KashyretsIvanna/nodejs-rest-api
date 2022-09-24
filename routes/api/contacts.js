const express = require('express')
const router = express.Router();
const { getFunction } = require("../../functions/get")
const { getId } = require("../../functions/getId")
const { post } = require("../../functions/post")
const { deleteEl } = require("../../functions/delete")
const { putContacts } = require("../../functions/put")


router.get('/', getFunction)

router.get('/:contactId', getId)

router.post('/', post)

router.delete('/:contactId', deleteEl)

router.put('/:contactId', putContacts)

module.exports = router

const express = require('express')
const router = express.Router();
const { getFunction } = require("../../controllers/get")
const { getId } = require("../../controllers/getId")
const { post } = require("../../controllers/post")
const { deleteEl } = require("../../controllers/delete")
const { putContacts } = require("../../controllers/put")


router.get('/', getFunction)

router.get('/:contactId', getId)

router.post('/', post)

router.delete('/:contactId', deleteEl)

router.put('/:contactId', putContacts)

module.exports = router

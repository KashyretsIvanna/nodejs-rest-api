const express = require("express");
const router = express.Router();
const { getFunction } = require("../../controllers/get");
const { getId } = require("../../controllers/getId");
const { post } = require("../../controllers/post");
const { deleteEl } = require("../../controllers/delete");
const { putContacts } = require("../../controllers/put");
const { patchContacts } = require("../../controllers/patch");
const authorization = require("../../midelwares/authenticate");

router.get("/", authorization, getFunction);

router.get("/:contactId", authorization, getId);

router.post("/", authorization, post);

router.delete("/:contactId", authorization, deleteEl);

router.put("/:contactId", authorization, putContacts);
router.patch("/:contactId", authorization, patchContacts);

module.exports = router;

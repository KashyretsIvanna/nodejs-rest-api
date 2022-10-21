const Joi = require("joi");
const path = require("path");
const {
  updateAvatar,
  serchUserByToken,
} = require("../../service/serviceUser");
require("dotenv").config();
const fs = require("fs/promises");
const bcrypt = require("bcrypt");
var Jimp = require("jimp");

const changeAvatar = async (req, res, next) => {
  const file = req.file;
  const data = req.body;
  const shema = Joi.object({
    token: Joi.string().required(),
  });
  const resp = shema.validate(data);
  const avatar = path.join(
    process.cwd(),
    "public",
    "avatars",
    file.originalname
  );

  res.header("Content-Type", "application/json");
  try {
    if (resp.error) {
      res.status(400);
      res.json({ message: "validation" });
    } else {
      const user = await serchUserByToken(resp.value.token);

      if (user) {
        Jimp.read(file.path, (err, edited) => {
          if (err) throw err;
          edited.resize(250, 250);
        });
        await fs.rename(file.path, avatar);

        await updateAvatar(user._id, "avatars", file.originalname);
        res
          .status(200)
          .json({ avatarURL: path.join("avatars", file.originalname) });
      } else {
        res.status(401).json({ message: "Not authorized" });
      }
    }
  } catch {
    (err) => {
      res.status(401).json({ message: err });
    };
  }
};

module.exports = changeAvatar;

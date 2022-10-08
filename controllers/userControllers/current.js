const jwt = require("jsonwebtoken");
const { getUserById } = require("../../service/serviceUser");

const current = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [Bearer, token] = authorization.split(" ");
    if (Bearer !== "Bearer" || !token) {
      res.status(401).json({ message: "Not authorized" });
    } else {
      const { _id } = await jwt.decode(token);
      const { email, subscription } = await getUserById(_id);
      res.status(200).json({ email, subscription });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = current;

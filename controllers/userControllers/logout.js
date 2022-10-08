const jwt = require("jsonwebtoken");
const { updateToken } = require("../../service/serviceUser");

const logout = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [Bearer, token] = authorization.split(" ");
    if (Bearer !== "Bearer" || !token) {
      res.status(401).json({ message: "Not authorized" });
    } else {
      const { _id } = await jwt.decode(token);
      await updateToken(_id, null);
      res.status(204).json({message:"No content"});
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = logout;

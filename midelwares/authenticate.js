const jwt = require("jsonwebtoken");
const { getUserById } = require("../service/serviceUser");

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      res.status(401).json({ message: "Authorization Error" });
    } else {
      try {
        const { _id } = jwt.verify(token, process.env.SECRET_KEY);
        const user = getUserById(_id);
        console.log(user);
        if (!_id || !user) {
          res.status(401).json("Not authorized");
        }
        next();
      } catch (err) {
        res.status(401).json({ message: "Not authorized" });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;

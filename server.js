const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
const connection = mongoose.connect(process.env.DB_CONNECT);

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

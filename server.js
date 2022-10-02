const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

//Database connection------------------
const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_CONNECT;
mongoose.Promise = global.Promise;
const connection = mongoose.connect(
  "mongodb+srv://Ivanna:LovaLova123@cluster0.4avkctp.mongodb.net/db-contacts?retryWrites=true&w=majority"
);

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

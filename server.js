const app = require("./app");
const mongoos = require("mongoose");
require("dotenv").config();

//Database connection------------------
const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_CONNECT;
mongoos.Promise = global.Promise;

mongoos
  .connect("mongodb+srv://Ivanna:LovaLova123@cluster0.4avkctp.mongodb.net/?retryWrites=true&w=majority", {
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

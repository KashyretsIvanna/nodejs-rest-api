const UserModel = require("../Schema/shemaUser");
const serchUser = (email) => UserModel.findOne({ email });
const getUserById = (id) => UserModel.findOne({ _id:id });

const registerUser = (user) => UserModel.create(user);
const updateToken= (id,token) => UserModel.findOneAndUpdate({_id:id},{token});
module.exports = {
  serchUser,
  registerUser,
  getUserById,
  updateToken
};

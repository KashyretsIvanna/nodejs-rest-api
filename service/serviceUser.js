const UserModel = require("../Schema/shemaUser");
const serchUser = (email) => UserModel.findOne({ email });
const getUserById = (id) => UserModel.findOne({ _id:id });
const serchUserByToken=(token)=>UserModel.findOne({token:token})
const registerUser = (user) => UserModel.create(user);
const updateToken= (id,token) => UserModel.findOneAndUpdate({_id:id},{token});
const updateAvatar= (id,avatar) => UserModel.findOneAndUpdate({_id:id},{avatar});

module.exports = {
  serchUser,
  registerUser,
  getUserById,
  updateToken,
  updateAvatar,
  serchUserByToken
};

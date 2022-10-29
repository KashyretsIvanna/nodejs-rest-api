const { getUserByToken, updateVerify } = require("../../service/serviceUser");

const verify = async (req, res, next) => {
  const verificationToken = req.params.verificationToken;
  console.log(verificationToken)
  const user = await getUserByToken(verificationToken);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    await updateVerify({
      _id: user._id,
      verificationToken: null,
      verify: true,
    });
    res.status(200).json({ message: "Verification successful" });
  }
};

module.exports = verify;

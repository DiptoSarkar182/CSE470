const Users = require("../model/users");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!(email || password))
      return res.status(400).json({
        msg: "Please provide email and password.",
      });

    password = bcrypt.hashSync(password, bcrypt.genSaltSync());
    let user = await User.create(
      {
        email,
        password,
      },
      {
        upsert: true,
        new: true,
      }
    ).select("-password");
    return res.status(200).json({
      msg: "Account creation successfully done.",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      msg: `Error ${err}`,
    });
  }
};
const get = async (req, res) => {
  try {
    const users = await Users.findOne({ email: req.body.email });

    return res.status(200).json({
      msg: users,
    });
  } catch (err) {
    return res.status(400).json({
      msg: `Wrong credential. ${err}`,
    });
  }
};
module.exports = {
  create,
  get,
};

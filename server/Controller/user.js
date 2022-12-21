const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
      expiresIn: maxAge
  })
}
const create = async (req, res) => {
  console.log(req.body)
  
  try {
    let data = req.body;

    if(data.confirm_password !== data.password) 
      return res.status(400).json({
        msg: "Password does not match",
      });

    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync());
    delete data.confirm_password
    let user = await User.create(data)
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

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (user == null) {
    return res.status(400).json({
      msg: `User does not exists`,
    });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    console.log("password don't match");
    return res.status(400).json({
      msg: `User password does not match`,
    });
  }

  const token = createToken(user.id)
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })

  res.status(200).json({
    user,
    msg: "Success!",
  });
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

const is_logged_in = (req, res, next) => {
  const token = req.cookies.jwt
  //check json web token exists
  if (token) {
      jwt.verify(token, SECRET, async (err, decodedToken) => {
          if (err) {
              res.status(404).json({ "user": null })

          }
          else {
              console.log(decodedToken)
              let user = await User.findById(decodedToken.id).lean();
              delete user.password
              res.json(user)
          }
      })
  } else {
      console.log("here")
      res.status(404).json({ "user": null })
  }

}
module.exports = {
  create,
  get,
  login,
  is_logged_in,
};




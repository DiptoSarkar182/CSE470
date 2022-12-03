const game_disk = require("../model/game_disk");
const Users = require("../model/users");
const bcrypt = require("bcrypt");
const upload = async (req, res) => {
  try {
    const editor = await User.findOne({
      email: req.body.email,
    });

    if (!editor || !bcrypt.compareSync(req.body.password, editor.password))
      return res.status(400).json({
        msg: "Wrong credentials",
      });

    let keys = Object.keys(req.body);
    keys.forEach((item) => {
      if (!req.body[item])
        return res.status(400).json({
          msg: `${item} is not found. Please search again.`,
        });
    });
    const disk = await gameDisk.create(req.body);
    return res.status(200).json({
      msg: "product upload successfull.",
    });
  } catch (err) {
    res.status(400).json({
      msg: `product upload failed${err}`,
    });
  }
};

const get_list = async (req, res) => {
  try {
    const articles = await gameDisk.find({});
    return res.status(200).json({
      articles,
    });
  } catch (error) {
    res.status(400).json({
      msg: `Games not found. Please search again. ${err}`,
    });
  }
};
const get = async (req, res) => {
  const id = req.params.id;
  try {
    const game_disk = await game_disk.findById({
      _id: id,
    });
    return res.status(200).json({
      book,
    });
  } catch (err) {
    res.status(400).json({
      msg: `Games not found. Please search again. ${err}`,
    });
  }
};
module.exports = {
  upload,
  get_list,
  get,
};

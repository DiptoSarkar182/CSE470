const GameDisk = require("../model/game_disk");

const upload = async (req, res) => {
  try {
    let keys = Object.keys(req.body);
    keys.forEach((item) => {
      if (!req.body[item])
        return res.status(400).json({
          msg: `${item} is not found. Please search again.`,
        });
    });
    const disk = await GameDisk.create(req.body);
    return res.status(200).json({
      msg: "product upload successful.",
    });
  } catch (err) {
    res.status(400).json({
      msg: `product upload failed${err}`,
    });
  }
};

const get_list = async (req, res) => {
  try {
    const game_disks = await GameDisk.find({});
    return res.status(200).json({
      game_disks,
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
    const game_disk = await GameDisk.findById({
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

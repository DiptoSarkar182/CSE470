const { model, Schema } = require("mongoose");

const GameDisk = model(
  "GameDisk",
  Schema(
    {
      game_name: {
        type: String,
        required: true,
      },
      game_genre: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
      screenshot: {
        type: String,
        required: true,
      },
      uploader_name: {
        type: String,
        required: true,
      },
      gameDisk_photo: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports =  GameDisk;

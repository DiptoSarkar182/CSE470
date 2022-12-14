const { model, Schema } = require("mongoose");

const User = model(
  "User",
  Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      nid: {
        type: String,
        required: true,
      },
      contact_number:{
        type: String,
        required:true
      }
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
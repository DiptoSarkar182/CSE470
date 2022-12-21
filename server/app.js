require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const app = express();
const userRoutes = require("./routes/user");
const cookieParser = require('cookie-parser');
const diskRoutes = require("./routes/game_disk");
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_KEY, {})
  .then((result) => {
    app.listen(PORT, (err) => {
      if (err) console.log("Server crashed!");
      console.log("Server started at port %d", PORT);
    });
  })
  .catch((err) => {
    console.log("Could not connect to mongodb", err);
  });
app.use(cors())
app.use(express.json());
app.use(express.static(`${__dirname}/view/`));
app.use(cookieParser())
app.use("/user", userRoutes);
app.use("/game", diskRoutes);


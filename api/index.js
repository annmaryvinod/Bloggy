const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();

app.use(cors());

//This middleware parses incoming requests with JSON payloads, making the request body available under req.body.
app.use(express.json());


mongoose.connect('mongodb+srv://annmarypriyavinod:KjOgBxwA36qBvbGe@cluster0.u8iy4pg.mongodb.net/?retryWrites=true&w=majority')

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4000);


// KjOgBxwA36qBvbGe
// annmarypriyavinod

//mongodb+srv://annmarypriyavinod:KjOgBxwA36qBvbGe@cluster0.u8iy4pg.mongodb.net/?retryWrites=true&w=majority




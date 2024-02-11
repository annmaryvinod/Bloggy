const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

//This middleware parses incoming requests with JSON payloads, making the request body available under req.body.
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4000);


// HlRaKt0mBzEqvM9q
// mongodb+srv://gdscmaceblog:HlRaKt0mBzEqvM9q@cluster0.pnnjqll.mongodb.net/?retryWrites=true&w=majority
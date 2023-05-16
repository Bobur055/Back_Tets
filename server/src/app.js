const express = require("express");
const bodyParsers = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParsers.json());
app.use(cors());
app.listen(process.env.PORT || 8081);

// get
// post
// put
// patch
// delete

app.get("status", (req, res) => {
  res.send({
    massage: "hello Node",
  });
  console.log("status");
});

console.log("Hi Node");

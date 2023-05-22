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

app.get("/", (req, res) => {
  res.send("<h1>VUE Node.js</h1> ");
  console.log("status");
});

app.get("status", (req, res) => {
  res.send({
    massage: "hello Node",
  });
  console.log("status");
});

// app.listen(PORT, (error) => {
//   error ? console.log(error) : console.log(`Listeing Port ${PORT}`);
// });
// const createPath = (page) => path.resolve(__dirname, './Src/ejs-directory', `${page}.ejs`);

// router.get("/", (req, res) => {
//   res.send("<h1>VUE Node.js</h1>");
// });
// router.get('/', (req, res) => {
//   res.render(createPath('index'))
// });

console.log("Hi Node");

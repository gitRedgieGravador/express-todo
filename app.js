const express = require("express");
const app = express();
const port = process.env.PORT || 3232;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res)=>{
    res.json({message: "Hello from express."})
})

const testRoutes = require("./app/routes/todo.route")
app.use("/api",testRoutes)

app.listen(port, function () {
  console.log(`\n.....Api server listening on port:${port}.....`);
});

const MySql = require("./app/database/mysql")
const mysql = new MySql()
app.set('mysql', mysql);
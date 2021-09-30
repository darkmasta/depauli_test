require("dotenv").config({
  path: "variables.env",
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

// lets require/import the mongodb native drivers.
const mongoose = require("mongoose");

mongoose.Promise = require("bluebird");

const UserRoutes = require("./routes/user_routes");

var app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080", // dev to prod
    //origin: "https://teknasyon-demo.herokuapp.com", // dev to prod
  })
);

app.use(require("morgan")("combined"));
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: false }));
const jsonParser = bodyParser.json();
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

// Our custom routes
app.use("/", UserRoutes);

var cons = require("consolidate");
app.engine("html", cons.swig);
app.use(express.static(__dirname + "/views/dist"));
app.set("views", __dirname + "/views/dist");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () =>
  console.log(`Depauli web listening on port ${PORT}!`)
);

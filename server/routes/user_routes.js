const express = require("express");
const router = express.Router();
const Users = require("../Models/users");
const User = Users.User;

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { decodeCookie } = require("../helpers/decode-cookie");

router.get("/users", (req, res) => {
  var query = User.find();

  query.exec((err, users) => {
    if (err) res.json(err);
    if (users == null) res.json("Error");

    res.json(users);
  });
});

router.get("/user", (req, res) => {

  var promise = User.find({ email: email });

  promise.then((doc) => res.json(doc.pop()));
});

router.post("/login", jsonParser, (req, res) => {
  const loginData = req.body;

  console.log(req.body);

  var promise = User.find({ email: loginData.email });

  promise.then((doc) => res.json(doc.pop()))
         .catch((err) => res.json(err));
});


router.post("/create_new_user", jsonParser, (req, res) => {
  const userData = req.body;
  // const { email, isAdmin } = decodeCookie(req.cookies.teknasyon);

  // if (!isAdmin == "admin") res.json("Authorization Error");

  const User = new Users.User({
    email: userData.email,
    password: userData.password,
  });

  User.save()
    .then((user) => {
      res.json("success");
    })
    .catch((err) => res.json(err));
});

module.exports = router;

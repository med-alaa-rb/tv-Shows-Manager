var route1 = require("express").Router();
var bcrypt = require("bcrypt");
const Info = require("../database/db").Info;
var salt = bcrypt.genSaltSync(10);
var hash = (str) => bcrypt.hashSync(str, salt);

route1.post("/addUser", (req, res) => {
  let userData = new Info({
    name: req.body.name,
    email: req.body.email,
    fav: req.body.fav,
    password: hash(req.body.password),
  });
  userData.save((err, userData) => {
    if (err) console.error(err);
    console.log(`${userData.name} saved to db`);
  });
});

route1.post("/checkName", async (req, res) => {
  (await Info.findOne({ name: req.body.name }))
    ? res.send(false)
    : res.send(true);
});

route1.post("/loginUser", async (req, res) => {
  let userdata = await Info.findOne({ name: req.body.name });
  if (!userdata) {
    res.send(false);
  } else if (!bcrypt.compareSync(req.body.password, userdata.password)) {
    res.send(false);
  } else {
    res.send(true);
  }
});

module.exports = route1;

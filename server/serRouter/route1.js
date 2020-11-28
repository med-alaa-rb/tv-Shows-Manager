var route1 = require("express").Router();
const Info = require("../database/db").Info;

// const silence = new Kitten({ name: 'Silence' });

// const fluffy = new Kitten({ name: 'fluffy' });

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     console.log("done");
//   });

route1.post("/addUser", (req, res) => {
  let userData = new Info({
    name: req.body.name,
    email: req.body.email,
    fav: req.body.fav,
    password: req.body.password,
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

module.exports = route1;

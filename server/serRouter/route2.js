var route2 = require("express").Router();
const Rest = require("../database/db").Rest;

route2.post("/rest", (req, res) => {
  let data = new Rest();
  data.adress = req.body.adress;
  data.updated = new Date();
  data.ofBoolean.push(req.body.ofBoolean);

  data.save((err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
  res.send(data);
});

route2.get("/getdata", (req, res) => {
  Rest.find((err, kittens) => {
    if (err) return console.error(err);
    res.send(kittens);
  });
});


route2.get("/getdataName", (req, res) => {
  Rest.find({"adress": "manara"},(err, kittens) => {
    if (err) return console.error(err);
    res.send(kittens);
  });
});

// const silence = new Kitten({ name: 'Silence' });

// const fluffy = new Kitten({ name: 'fluffy' });

// fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//     console.log("done");
//   });

module.exports = route2;

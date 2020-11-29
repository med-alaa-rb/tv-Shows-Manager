var route2 = require("express").Router();
const Comments = require("../database/db").Comments;

route2.post("/postComments", (req, res) => {
  let userComments = new Comments({
    idShow: req.body.idShow,
    comment: req.body.comment,
    name: req.body.name,
  });
  userComments.save((err, userData) => {
    if (err) console.error(err);
    console.log(`${userData.name} post to db`);
  });
});

route2.post("/dataById", async (req, res) => {
  let comments = await Comments.find({ idShow: req.body.idShow });
  res.send(comments)
});

module.exports = route2;

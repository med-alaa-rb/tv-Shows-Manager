const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/myDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`we're connected!`);
});

const info = new mongoose.Schema({
  name: String,
  email: String,
  fav: String,
  password: String,
});

const comments = new mongoose.Schema({
  idShow: Number,
  comment: String,
  name: String,
});

const Info = mongoose.model("Info", info);
const Comments = mongoose.model("comments", comments);

module.exports = { Info, Comments };

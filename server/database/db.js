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

const rest = new mongoose.Schema({
  adress: String,
  updated: { type: Date, default: Date.now },
  ofBoolean: [Boolean]
})

const Info = mongoose.model("Info", info);
const Rest = mongoose.model("rest", rest)

module.exports = { Info , Rest};

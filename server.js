const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.port || PORT, () => console.log("Listening on port " + PORT));
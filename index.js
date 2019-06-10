const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ one: "punch" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App listening on port 5000 !");
});

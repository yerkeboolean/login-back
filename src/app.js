const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", function(req, res) {
  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

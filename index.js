const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from root route");
});

app.listen(port, () => console.log("Server listening on 3000"));

const express = require("express");
const app = express(); // create express app
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/pages", "start-page.html"));
});

app.use(express.static("src/"));

// start express server on port 5000
app.listen(8080, () => {
  console.log("server started on port 8080");
})




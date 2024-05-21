const PORT = 9007;
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

// app.use(
//   bodyParser.urlencoded({ extended: false }),
//   bodyParser.json(),
// );

app.use(express.static("dist"));

app.get("*", function (req, res) {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.info(`[dist-server] listening on port ${PORT}`));

module.exports = app;

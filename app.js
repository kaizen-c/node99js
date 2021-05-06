const express = require("express");
const http = require("http");
const app = express();
const calculator = require("./service");

let server;

app.get("/", (req, res) => {
  res.json({ message: `${new Date()} - Hello Welcome12333!!` });
});

app.get("/add", (req, res) => {
  const a = req.query.a || 0;
  const b = req.query.b || 0;
  const result = calculator.add(parseInt(a), parseInt(b));
  res.json({ operation: "add", a, b, result, date: `${new Date()}` });
});

app.get("/subtract", (req, res) => {
  const a = req.query.a || 0;
  const b = req.query.b || 0;
  const result = calculator.subtract(parseInt(a), parseInt(b));
  res.json({ operation: "subtract", a, b, result, date: `${new Date()}` });
});

module.exports = {
  start(cb) {
    server = app.listen(process.env.PORT || 3000, () => {
      console.log("HTTP server listening on port 3000");
      cb();
    });
  },
  stop(cb) {
    console.log("Stopping HTTP server on port 3000");
    server.close(cb);
  },
};

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { port } = require("./env");
const qr = require("../routes/qr.route");

const app = express();


app.use(cors());
app.set("port", port);
app.use(morgan("dev"));
app.use(express.json());

app.use("/", qr);

module.exports = app;
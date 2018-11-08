const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const productRouter = require("../products/productRouter");

module.exports = server => {
  // ORDER MATTERS! they will execute top to bottom
  server.use(express.json()); // built in
  server.use(helmet()); // third party
  server.use(morgan("short")); // third party
};

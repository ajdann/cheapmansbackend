"use strict";
const http = require("../utils/http");
const { connect } = require("../db/connection");
const { Lecture } = require("../db/schema");

module.exports.handler = async (event) => {
  await connect();
  const lectures = await Lecture.find();
  return http.ok({ lectures });
};
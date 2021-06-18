"use strict";
const http = require('../utils/http')
const { connect } = require("../db/connection");
const { Lecture } = require("../db/schema");



module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;

    await connect();

    const lecture = await Lecture.findOne({ _id: id });
    if (!lecture) return http.notFound("Lecture not found.");
    
    return http.ok({ lecture });
  } catch (error) {
    return http.error();
  }

};

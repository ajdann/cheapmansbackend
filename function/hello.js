"use strict";

const http = require('../utils/http')

module.exports.handler = async (event) => {
  return http.ok({test : [1,2,3,4,5,6]}, "dobro je")

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

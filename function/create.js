const http = require("../utils/http");

module.exports.handler = async (event) => {
  try {
    const { firstName } = JSON.parse(event.body);
    return http.ok(`Hello ${firstName}`);
  } catch (error) {
    return http.error();
  }
};

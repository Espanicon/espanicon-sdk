// httpRequest.js
// This module is an http request wrapped in a promise design to be used
// to interact with the ICON Blockchain
//
// Imports
const http = require("http");

/**
 * async http request wrapped in a promise
 * @param {Object} param - params for the http request
 * @param {string} param.hostname
 * @param {string} param.ip
 * @param {number} param.port
 * @param {number} param.timeout
 * @param {string} param.path
 */
async function httpRequest(params, data = false) {
  const promisifiedQuery = new Promise((resolve, reject) => {
    const query = http.request(params, res => {
      // Print status code on console
      // console.log("Status code of http response: " + res.statusCode);
      // console.log("headers: ", res.headers);
      // console.log("Params:");
      // console.log(params);
      // console.log("Data:");
      // console.log(data);

      // Process chunked data
      let rawData = "";
      res.on("data", chunk => {
        rawData += chunk;
      });

      for (let item in res.headers) {
        // console.log(item + ": " + res.headers[item]);
      }
      // when request completed, pass the data to the 'resolve' callback
      res.on("end", () => {
        let data;
        try {
          data = JSON.parse(rawData);
          resolve(data);
        } catch (err) {
          data = { error: err.message, message: rawData };
          resolve(data);
        }
      });

      // if error, print on console
      res.on("error", err => {
        console.log("Error while running http request: ", +err);
      });
    });
    // If request timeout destroy request
    query.on("timeout", () => {
      console.log(
        `timeout while running http request with no response after ${params.timeout} ms. destroying query`
      );
      query.destroy();
    });
    // Handle query error
    query.on("error", err => {
      console.log("error running query, passing error to callback reject");
      reject(err);
    });
    if (data != false) {
      // If data param is passed into function we write the data
      query.write(data);
    }
    // end request
    query.end();
  });
  // wait for the response and return it
  try {
    return await promisifiedQuery;
  } catch (err) {
    console.log("error while running promisifiedQuery");
    console.log(err);
    throw "error connecting to node";
  }
}

module.exports = httpRequest;

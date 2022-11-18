// httpsRequest.js
// This module is an https request wrapped in a promise design to be used
// to interact with the ICON Blockchain
//

// functions
//
async function customFetch(
  path,
  data = false,
  hostname,
  https = true,
  port = false
) {
  let params = {
    hostname: hostname,
    path: path,
    headers: {
      "Content-Type": "text/plain"
    },
    port: port ? ":" + port + "/" : "",
    protocol: https ? "https://" : "http://"
  };
  let reqParams;
  if (data) {
    reqParams = {
      headers: params.headers,
      method: "POST",
      body: data
    };
  } else {
    reqParams = {
      headers: params.headers,
      method: "GET"
    };
  }

  const url = params.protocol + params.hostname + params.port + params.path;
  let queryResult;
  // console.log("url");
  // console.log(url);
  // console.log("params");
  // console.log(reqParams);
  try {
    // create request object
    const customRequest = new Request(url, reqParams);
    // console.log("customRequest");
    // console.log(customRequest);

    // make fetch call with created request object
    const response = await fetch(customRequest);
    queryResult = await response.json();
    // console.log("query result");
    // console.log(queryResult);

    return queryResult;
  } catch (err) {
    // if an error occurs returns null and log the error
    console.log("Error running customFetch");
    console.log(err.message);
    console.log(queryResult);
    return null;
  }
}

module.exports = customFetch;

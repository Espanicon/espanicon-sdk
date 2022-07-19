// tests/utils.js
//
// Imports
async function createTest(method, params = false, ...rest) {
  console.log(
    `!----------------\nRunning test on ${
      method.name
    }. with params: ${JSON.stringify(arguments)}`
  );

  let result;
  if (params) {
    result = await method(...rest);
  } else {
    result = await method();
  }
  console.log(result);
  return result;
}

module.exports = { createTest };

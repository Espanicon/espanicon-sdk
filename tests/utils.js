// tests/utils.js
//
// Imports
const { alertMsg, warningMsg, successMsg } = require("@fidelve/colorlog");
async function createTest(method, params = false, ...rest) {
  console.log(
    `!----------------\nRunning test on ${successMsg(
      method.name
    )}.\nParams: ${JSON.stringify(arguments)}`
  );

  let result;
  if (params) {
    result = await method(...rest);
  } else {
    result = await method();
  }
  console.log(warningMsg("Results:"));
  if (typeof result === "object") {
    const stringResult = JSON.stringify(result);
    if (stringResult.length > 200) {
      console.log(stringResult.slice(0, 200) + "...}");
    } else {
      console.log(stringResult);
    }
  } else {
    console.log(result);
  }
  return result;
}

async function runTestModule(module, moduleName, skip = false) {
  if (skip) {
    console.log(
      `!-----------------\n${warningMsg(
        "Skipping tests"
      )} on module: ${warningMsg(moduleName)}`
    );
  } else {
    console.log(
      `!-----------------\n${successMsg(
        "Running tests"
      )} on module: ${warningMsg(moduleName)}`
    );
    await module();
  }
}

module.exports = { createTest, runTestModule };

// tests/utils.js
//
// Imports
const { alertMsg, warningMsg, successMsg } = require("../utils/colorLog");

// Functions
//
async function createTestTemplate(
  isBuildTest = false,
  method,
  params = false,
  ...rest
) {
  const methodName = method.name;
  const methodParamsNames = isBuildTest
    ? getParams(method, true)
    : getParams(method);
  let maxChar = 200;

  let stringToPrint = `!----------------\nRunning test on function -> ${successMsg(
    method.name
  )} = ${methodParamsNames}`;

  for (let i = 0; i < rest.length; i++) {
    let paramValue;

    if (typeof rest[i] === "function") {
      paramValue = rest[i].name;
    } else if (typeof rest[i] === "object") {
      try {
        let tempValue = JSON.stringify(rest[i]);

        if (tempValue.length > maxChar) {
          paramValue = tempValue.slice(0, maxChar) + "...}";
        } else {
          paramValue = tempValue;
        }
      } catch (err) {
        paramValue = `[Object. constructor: ${rest[i].constructor.name}]`;
      }
    } else {
      paramValue = rest[i];
    }

    stringToPrint += `\n>> Param Value: ${paramValue}`;
  }

  console.log(stringToPrint);

  let result;
  if (params) {
    result = await method(...rest);
  } else {
    result = await method();
  }
  console.log(warningMsg("Results:"));
  if (typeof result === "object") {
    const stringResult = JSON.stringify(result);
    if (stringResult.length > maxChar) {
      console.log(stringResult.slice(0, maxChar) + "...}");
    } else {
      console.log(stringResult);
    }
  } else {
    console.log(result);
  }
  return result;
}
async function createTest(method, params, ...rest) {
  return await createTestTemplate(false, method, params, ...rest);
}
async function createTestOnBuild(method, params, ...rest) {
  return await createTestTemplate(true, method, params, ...rest);
}

async function runTestModule(
  module,
  moduleName,
  skip = false,
  hasParams = false,
  ...rest
) {
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

    if (hasParams) {
      await module(...rest);
    } else {
      await module();
    }
  }
}

function getParamsOLD(method) {
  const regex = /\(([\s\S]*?)\)\s/;
  // const regex = /^.*=>/;

  const str1 = method.toString().match(regex)[0];
  const arr1 = str1
    .replace("(", "")
    .replace(")", "")
    .split(",");

  const arr2 = arr1.map(each => {
    return each.trim();
  });
  return { str: `(${arr2.join(", ")})`, arr: arr2 };
}
function getParams(method, onBuild = false) {
  const regex = onBuild ? /^.*?{/ : /^.*?=>/;

  const str1 = method.toString().match(regex)[0];
  return str1;
}

module.exports = { createTest, createTestOnBuild, runTestModule, getParams };

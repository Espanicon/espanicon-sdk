// tests/utils.js
//

// Functions
//

async function createTest(method, params = false, ...rest) {
  const methodName = method.name;
  const methodParamsNames = getParams(method);
  let maxChar = 200;

  let resultObj = {
    methodName: method.name,
    methodParamsNames: methodParamsNames,
    raisedWarning: false,
    arr: []
  };

  for (let i = 0; i < rest.length; i++) {
    let paramValue;

    if (typeof rest[i] === "function") {
      paramValue = rest[i].name;
    } else if (typeof rest[i] === "object") {
      try {
        let tempValue = JSON.stringify(rest[i]);

        if (tempValue.length > 200) {
          paramValue = tempValue.slice(0, 200) + "...}";
        } else {
          paramValue = tempValue;
        }
      } catch (err) {
        paramValue = `[Object. constructor: ${rest[i].constructor.name}]`;
      }
    } else {
      paramValue = rest[i];
    }
    resultObj.arr.push(paramValue);
  }

  let result;
  if (params) {
    result = await method(...rest);
  } else {
    result = await method();
  }
  resultObj.result = result;
  return resultObj;
}

function getParams(method) {
  console.log(method);
  const regex = /^.*?\) {/;

  const str1 = method.toString().match(regex)[0];
  return str1;
}

export default createTest;

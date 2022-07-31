// tests/utils.js
//

// Functions
//

async function createTest(method, params = false, ...rest) {
  const methodName = method.name;
  const methodParamsNames = { str: "foo", arr: [] };
  let maxChar = 2000;

  let resultObj = {
    methodName: method.name,
    methodParamsNames: methodParamsNames.str,
    raisedWarning: false,
    arr: []
  };

  if (methodParamsNames.arr.length != rest.length) {
    resultObj.raisedWarning = true;
    resultObj.warning = `the amount of arguments being passed to the function "${methodName}" is not the same amount of arguments that were defined during function declaration unless method was declared using "...rest". Bypassing printing the function arguments`;
  } else {
    for (let i = 0; i < methodParamsNames.arr.length; i++) {
      let paramName = methodParamsNames.arr[i];
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
      resultObj.arr.push({
        paramName: paramName,
        paramValue: paramValue
      });
    }
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
  const regex = /\(([\s\S]*?)\)\s/;

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

export default createTest;

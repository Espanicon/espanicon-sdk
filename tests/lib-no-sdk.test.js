// lib-no-sdk.test.js
//
// Imports
const lib = require("../lib-no-sdk");
const {
  getPreps,
  getPrep,
  parsePrepData,
  getBonderList,
  getScoreApi,
  getLastBlock
} = lib.governance;

const { createTest } = require("./utils.js");

async function runTests() {
  // test on GetPreps
  let result = await createTest(
    getPrep,
    true,
    "hx9fa9d224306b0722099d30471b3c2306421aead7"
  );
  await createTest(parsePrepData, true, result);
}

runTests();

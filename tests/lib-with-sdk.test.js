// lib-with-sdk.test.js
//
// Imports
const lib = require("../lib-with-sdk");
const {
  getPreps,
  getPrep,
  getBonderList,
  setBonderList,
  parsePrepData
} = lib.governance;
const { createTest } = require("./utils.js");

async function runTests() {
  // test on GetPreps
  await createTest(getPrep, true, "hx9fa9d224306b0722099d30471b3c2306421aead7");
  await createTest(
    setBonderList,
    true,
    "hx9fa9d224306b0722099d30471b3c2306421aead7",
    ["hx9fa9d224306b0722099d30471b3c2306421aead7"]
  );
}

runTests();

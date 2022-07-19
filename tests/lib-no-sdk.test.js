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

const TEST_WALLET = "hx9fa9d224306b0722099d30471b3c2306421aead7";
const TEST_CONTRACT = "cx0000000000000000000000000000000000000000";

async function libNoSdkTests() {
  // test on GetPreps
  let result = await createTest(getPrep, true, TEST_WALLET);

  // test on parsePrepData
  await createTest(parsePrepData, true, result);

  // test on getPreps
  await createTest(getPreps);

  // test on getBonderList
  await createTest(getBonderList, true, TEST_WALLET);

  // test on getScoreApi
  await createTest(getScoreApi, true, TEST_CONTRACT);

  // test on getLastBlock
  await createTest(getLastBlock);
}

module.exports = libNoSdkTests;

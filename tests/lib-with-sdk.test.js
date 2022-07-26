// lib-with-sdk.test.js
//
// Imports
require("dotenv").config();
const lib = require("../lib-with-sdk");
const {
  getPreps,
  getPrep,
  getBonderList,
  setBonderList,
  parsePrepData
} = lib.governance;
const { createTest } = require("./utils.js");
const SCORES = require("../utils/scores");

const TEST_WALLET = process.env.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;

async function libWithSdkTests() {
  // test on GetPreps
  await createTest(getPrep, true, TEST_WALLET);
  let bonderList = await createTest(setBonderList, true, TEST_WALLET, [
    TEST_WALLET
  ]);
}

module.exports = libWithSdkTests;

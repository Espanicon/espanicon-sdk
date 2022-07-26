// lib-no-sdk.test.js
//
// Imports
require("dotenv").config();
const lib = require("../lib-no-sdk");
const {
  getPreps,
  getPrep,
  parsePrepData,
  getBonderList,
  setBonderList,
  getScoreApi,
  getIcxBalance,
  getLastBlock,
  approveNetworkProposal,
  rejectNetworkProposal
} = lib.governance;
const { getAllProposals } = lib.cps;

const { createTest } = require("./utils.js");
const SCORES = require("../utils/scores");

const TEST_WALLET = process.env.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;

async function libNoSdkTests() {
  // test on GetPreps
  let result = await createTest(getPrep, true, TEST_WALLET);

  // test on parsePrepData
  await createTest(parsePrepData, true, result);

  // test on getPreps
  await createTest(getPreps);

  // test on getBonderList
  await createTest(getBonderList, true, TEST_WALLET);

  // test on setBonderList
  let txObj = await createTest(setBonderList, true, TEST_WALLET, [TEST_WALLET]);

  // test on getScoreApi
  await createTest(getScoreApi, true, TEST_CONTRACT);

  // test on getLastBlock
  await createTest(getLastBlock);

  // test on approveNetworkProposal
  await createTest(
    approveNetworkProposal,
    true,
    "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
    TEST_WALLET
  );

  // test on rejectNetworkProposal
  await createTest(
    rejectNetworkProposal,
    true,
    "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
    TEST_WALLET
  );

  // test on getIcxBalance
  await createTest(getIcxBalance, true, TEST_WALLET + "33");

  // // test on getAllProposals
  // let cpsProposals = await createTest(getAllProposals);
  // console.log(JSON.stringify(cpsProposals));
}

module.exports = libNoSdkTests;

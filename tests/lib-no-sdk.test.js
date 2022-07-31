// lib-no-sdk.test.js
//
// Imports
require("dotenv").config();
const nodeLib = require("../espanicon-node-sdk");
const {
  getScoreApi, // tested
  getIcxBalance, // tested
  getTxResult,
  getTxByHash,
  getPrep, // tested
  parsePrepData, // TODO:cannot be tested with current setup
  getPreps, // tested
  getBonderList, // tested
  setBonderList, // tested
  getLastBlock, // tested
  approveNetworkProposal, // tested
  rejectNetworkProposal // tested
} = nodeLib.governance;

const {
  getCPSPeriodStatus,
  getCPSProposalKeysByStatus,
  getCPSProposalDetailsByHash,
  getCPSProposalVoteResultsByHash,
  getAllCPSProposals
} = nodeLib.cps;

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
  //
  // test on getTxResult
  await createTest(
    getTxResult,
    true,
    "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873",
    TEST_WALLET
  );
  // test on getTxByHash
  await createTest(
    getTxByHash,
    true,
    "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873",
    TEST_WALLET
  );
}

module.exports = libNoSdkTests;

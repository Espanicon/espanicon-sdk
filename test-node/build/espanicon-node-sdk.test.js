// lib-no-sdk.test.js
//
// Imports
require("dotenv").config();
const EspaniconSDKNode = require("../../dist/main.cjs");
const nodeLib = new EspaniconSDKNode();
const {
  getScoreApi, // tested
  getIcxBalance, // tested
  getTxResult, // tested
  getTxByHash, // tested
  getPrep, // tested
  parsePrepData, // TODO:cannot be tested with current setup
  getPreps, // tested
  getBonderList, // tested
  setBonderList, // tested
  getLastBlock, // tested
  getCPSPeriodStatus, // tested
  getCPSProposalKeysByStatus, // tested
  getCPSProposalDetailsByHash, // tested
  getCPSProposalVoteResultsByHash, // tested
  getAllCPSProposals, //tested TODO: is commented out because it takes too long
  getScoreStatus, // tested
  getStepPrice, // tested
  getStepCosts, // tested
  getMaxStepLimit, // tested
  isInScoreBlackList, // tested
  getVersion, // tested
  getRevision, // tested
  getProposal, // tested TODO: returns error on valid proposals
  getProposals, // tested
  approveNetworkProposal, // tested
  rejectNetworkProposal, //tested
  scores: SCORES
} = nodeLib;

const { createTestOnBuild } = require("../utils.js");

const TEST_WALLET = process.env.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;

async function espaniconNodeSdk() {
  // TESTS ON CPS METHODS
  //
  // test on getCPSPeriodStatus
  await createTestOnBuild(getCPSPeriodStatus);
  // test on getCPSProposalKeysByStatus
  await createTestOnBuild(getCPSProposalKeysByStatus, true, "_pending");
  // test on getCPSProposalDetailsByHash
  await createTestOnBuild(
    getCPSProposalDetailsByHash,
    true,
    "bafybeic4bfw5i3qkdqly6whgbilwj7pd6cw6rfmkmsdktbo4nooedb24pu"
  );
  // test on getCPSProposalVoteResultsByHash
  await createTestOnBuild(
    getCPSProposalVoteResultsByHash,
    true,
    "bafybeic4bfw5i3qkdqly6whgbilwj7pd6cw6rfmkmsdktbo4nooedb24pu"
  );
  // test on getAllProposals
  // let allCPSProposals = await createTestOnBuild(getAllCPSProposals);
  // console.log(JSON.stringify(allCPSProposals));

  // TESTS ON GOVERNANCE
  //
  // test on getScoreApi
  await createTestOnBuild(getScoreApi, true, TEST_CONTRACT);
  // test on getIcxBalance
  await createTestOnBuild(getIcxBalance, true, TEST_WALLET);
  // test on getTxResult
  await createTestOnBuild(
    getTxResult,
    true,
    "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873",
    TEST_WALLET
  );
  // test on getTxByHash
  await createTestOnBuild(
    getTxByHash,
    true,
    "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873",
    TEST_WALLET
  );
  // test on GetPreps
  let result = await createTestOnBuild(getPrep, true, TEST_WALLET);
  // test on parsePrepData
  await createTestOnBuild(parsePrepData, true, result);
  // test on getPreps
  await createTestOnBuild(getPreps);
  // test on getBonderList
  await createTestOnBuild(getBonderList, true, TEST_WALLET);
  // test on setBonderList
  let txObj = await createTestOnBuild(setBonderList, true, TEST_WALLET, [
    TEST_WALLET
  ]);
  // test on getLastBlock
  await createTestOnBuild(getLastBlock);

  // TESTS ON GOVERNANCE2
  //
  // test on getScoreStatus
  await createTestOnBuild(getScoreStatus, true, TEST_CONTRACT);
  // test on getStepPrice
  await createTestOnBuild(getStepPrice);
  // test on getStepCosts
  await createTestOnBuild(getStepCosts);
  // test on getMaxStepLimit
  await createTestOnBuild(getMaxStepLimit, true, "invoke");
  // test on isInScoreBlackList
  await createTestOnBuild(isInScoreBlackList, true, TEST_WALLET);
  // test on getVersion
  await createTestOnBuild(getVersion);
  // test on getRevision
  await createTestOnBuild(getRevision);
  // test on getProposal
  await createTestOnBuild(
    getProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467"
  );
  // test on getProposals
  await createTestOnBuild(getProposals);
  // test on approveNetworkProposal
  await createTestOnBuild(
    approveNetworkProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467",
    TEST_WALLET
  );
  // test on rejectNetworkProposal
  await createTestOnBuild(
    rejectNetworkProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467",
    TEST_WALLET
  );
}

module.exports = espaniconNodeSdk;

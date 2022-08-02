// lib-no-sdk.test.js
//
// Imports
require("dotenv").config();
const EspaniconSDKNode = require("../espanicon-sdk-node");
const { createTest } = require("./utils.js");

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

const TEST_WALLET = process.env.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;
console.log(nodeLib);

async function espaniconNodeSdk() {
  // TESTS ON CPS METHODS
  //
  // test on getCPSPeriodStatus
  await createTest(getCPSPeriodStatus);
  // test on getCPSProposalKeysByStatus
  await createTest(getCPSProposalKeysByStatus, true, "_pending");
  // test on getCPSProposalDetailsByHash
  await createTest(
    getCPSProposalDetailsByHash,
    true,
    "bafybeic4bfw5i3qkdqly6whgbilwj7pd6cw6rfmkmsdktbo4nooedb24pu"
  );
  // test on getCPSProposalVoteResultsByHash
  await createTest(
    getCPSProposalVoteResultsByHash,
    true,
    "bafybeic4bfw5i3qkdqly6whgbilwj7pd6cw6rfmkmsdktbo4nooedb24pu"
  );
  // test on getAllProposals
  // let allCPSProposals = await createTest(getAllCPSProposals);
  // console.log(JSON.stringify(allCPSProposals));

  // TESTS ON GOVERNANCE
  //
  // test on getScoreApi
  await createTest(getScoreApi, true, TEST_CONTRACT);
  // test on getIcxBalance
  await createTest(getIcxBalance, true, TEST_WALLET);
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
  // test on getLastBlock
  await createTest(getLastBlock);

  // TESTS ON GOVERNANCE2
  //
  // test on getScoreStatus
  await createTest(getScoreStatus, true, TEST_CONTRACT);
  // test on getStepPrice
  await createTest(getStepPrice);
  // test on getStepCosts
  await createTest(getStepCosts);
  // test on getMaxStepLimit
  await createTest(getMaxStepLimit, true, "invoke");
  // test on isInScoreBlackList
  await createTest(isInScoreBlackList, true, TEST_WALLET);
  // test on getVersion
  await createTest(getVersion);
  // test on getRevision
  await createTest(getRevision);
  // test on getProposal
  await createTest(
    getProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467"
  );
  // test on getProposals
  await createTest(getProposals);
  // test on approveNetworkProposal
  await createTest(
    approveNetworkProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467",
    TEST_WALLET
  );
  // test on rejectNetworkProposal
  await createTest(
    rejectNetworkProposal,
    true,
    "0xce1cd28129fd6787b099baac5e18b0786a2bcab1a5c5b6eb4484073509176467",
    TEST_WALLET
  );
}

module.exports = espaniconNodeSdk;

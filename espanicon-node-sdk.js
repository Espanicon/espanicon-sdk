// espanicon-node-sdk.js
//

// imports
//
const { governance, cps, lib, governance2 } = require("./lib");
const customRequest = require("./utils/customRequest");
const SCORES = require("./utils/scores");

// methods
//

// CPS methods
//
async function getCPSPeriodStatus() {
  return await cps.getCPSPeriodStatus(customRequest);
}

async function getCPSProposalKeysByStatus(status) {
  return await cps.getCPSProposalKeysByStatus(customRequest, status);
}

async function getCPSProposalDetailsByHash(hash) {
  return await cps.getCPSProposalDetailsByHash(customRequest, hash);
}
async function getCPSProposalVoteResultsByHash(hash) {
  return await cps.getCPSProposalDetailsByHash(customRequest, hash);
}
async function getAllCPSProposals() {
  return await cps.getAllCPSProposals(customRequest);
}
// governance methods
//
async function getScoreApi(address = SCORES.mainnet.governance) {
  return await governance.getScoreApi(customRequest, address);
}
async function getIcxBalance(address, decimals = 2) {
  return await governance.getIcxBalance(customRequest, address, decimals);
}
async function getTxResult(txHash) {
  return await governance.getTxResult(customRequest, txHash);
}
async function getTxByHash(txHash) {
  return await governance.getTxByHash(customRequest, txHash);
}
async function getPreps(height = null) {
  return await governance.getPreps(customRequest, height);
}
async function getPrep(prepAddress) {
  return await governance.getPrep(customRequest, prepAddress);
}
async function getBonderList(prepAddress) {
  return await governance.getBonderList(customRequest, prepAddress);
}
async function setBonderList(prepAddress, arrayOfBonderAddresses) {
  return await governance.setBonderList(
    customRequest,
    prepAddress,
    arrayOfBonderAddresses
  );
}
async function getLastBlock() {
  return await governance.getLastBlock(customRequest);
}
// governance2 methods
//
async function getScoreStatus(address) {
  return await governance2.getScoreStatus(customRequest, address);
}
async function getStepPrice() {
  return await governance2.getStepPrice(customRequest);
}
async function getStepCosts() {
  return await governance2.getStepCosts(customRequest);
}
async function getMaxStepLimit(contextType) {
  return await governance2.getMaxStepLimit(customRequest, contextType);
}
async function isInScoreBlackList(address) {
  return await governance2.isInScoreBlackList(customRequest, address);
}
async function getVersion() {
  return await governance2.getVersion(customRequest);
}
async function getRevision() {
  return await governance2.getRevision(customRequest);
}
async function getProposal(proposalId) {
  return await governance2.getProposal(customRequest, proposalId);
}
async function getProposals() {
  return await governance2.getProposals(customRequest);
}

const nodeLib = {
  cps: {
    getCPSPeriodStatus,
    getCPSProposalKeysByStatus,
    getCPSProposalDetailsByHash,
    getCPSProposalVoteResultsByHash,
    getAllCPSProposals
  },
  governance: {
    getScoreApi,
    getIcxBalance,
    getTxResult,
    getTxByHash,
    getPrep,
    parsePrepData: governance.parsePrepData,
    getPreps,
    getBonderList,
    setBonderList,
    getLastBlock
  },
  governance2: {
    getScoreStatus,
    getStepPrice,
    getStepCosts,
    getMaxStepLimit,
    isInScoreBlackList,
    getVersion,
    getRevision,
    getProposal,
    getProposals,
    approveNetworkProposal: governance2.approveNetworkProposal,
    rejectNetworkProposal: governance2.rejectNetworkProposal
  },
  lib: {
    hexToDecimal: lib.hexToDecimal,
    decimalToHex: lib.decimalToHex,
    fromHexInLoop: lib.fromHexInLoop,
    statusType: lib.statusType,
    customRequest: customRequest,
    scores: SCORES
  }
};

// exports
//
module.exports = nodeLib;

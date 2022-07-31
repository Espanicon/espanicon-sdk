// espanicon-web-sdk.js
//

// imports
//
const { governance, cps, lib, governance2 } = require("./lib");
const customFetch = require("./utils/customFetch");
const SCORES = require("./utils/scores");

// methods
//

// CPS methods
//
async function getCPSPeriodStatus() {
  return await cps.getCPSPeriodStatus(customFetch);
}

async function getCPSProposalKeysByStatus(status) {
  return await cps.getCPSProposalKeysByStatus(customFetch, status);
}

async function getCPSProposalDetailsByHash(hash) {
  return await cps.getCPSProposalDetailsByHash(customFetch, hash);
}
async function getCPSProposalVoteResultsByHash(hash) {
  return await cps.getCPSProposalDetailsByHash(customFetch, hash);
}
async function getAllCPSProposals() {
  return await cps.getAllCPSProposals(customFetch);
}
// governance methods
//
async function getScoreApi(address = SCORES.mainnet.governance) {
  return await governance.getScoreApi(customFetch, address);
}
async function getIcxBalance(address, decimals = 2) {
  return await governance.getIcxBalance(customFetch, address, decimals);
}
async function getTxResult(txHash) {
  return await governance.getTxResult(customFetch, txHash);
}
async function getTxByHash(txHash) {
  return await governance.getTxByHash(customFetch, txHash);
}
async function getPreps(height = null) {
  return await governance.getPreps(customFetch, height);
}
async function getPrep(prepAddress) {
  return await governance.getPrep(customFetch, prepAddress);
}
async function getBonderList(prepAddress) {
  return await governance.getBonderList(customFetch, prepAddress);
}
async function setBonderList(prepAddress, arrayOfBonderAddresses) {
  return await governance.setBonderList(
    customFetch,
    prepAddress,
    arrayOfBonderAddresses
  );
}
async function getLastBlock() {
  return await governance.getLastBlock(customFetch);
}
// governance2 methods
//
async function getScoreStatus(address) {
  return await governance2.getScoreStatus(customFetch, address);
}
async function getStepPrice() {
  return await governance2.getStepPrice(customFetch);
}
async function getStepCosts() {
  return await governance2.getStepCosts(customFetch);
}
async function getMaxStepLimit(contextType) {
  return await governance2.getMaxStepLimit(customFetch, contextType);
}
async function isInScoreBlackList(address) {
  return await governance2.isInScoreBlackList(customFetch, address);
}
async function getVersion() {
  return await governance2.getVersion(customFetch);
}
async function getRevision() {
  return await governance2.getRevision(customFetch);
}
async function getProposal(proposalId) {
  return await governance2.getProposal(customFetch, proposalId);
}
async function getProposals(proposalId) {
  return await governance2.getProposals(customFetch);
}

const webLib = {
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
    fromHexInLoop: lib.fromHexInLoop
  }
};

// exports
//
module.exports = webLib;

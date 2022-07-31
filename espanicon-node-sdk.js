// espanicon-node-sdk.js
//

// imports
//
const { governance, cps } = require("./lib");
const customRequest = require("./utils/customRequest");
const SCORES = require("./utils/scores");

// methods
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
async function getProposals() {
  return await cps.getProposals(customRequest);
}
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
    getLastBlock,
    approveNetworkProposal: governance.approveNetworkProposal,
    rejectNetworkProposal: governance.rejectNetworkProposal
  }
};

// exports
//
module.exports = nodeLib;

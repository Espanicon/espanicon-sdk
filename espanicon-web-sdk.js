// espanicon-web-sdk.js
//

// imports
//
const { governance, cps } = require("./lib");
const customFetch = require("./utils/customFetch");
const SCORES = require("./utils/scores");

// methods
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
async function getProposals() {
  return await cps.getProposals(customFetch);
}
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
    getLastBlock,
    approveNetworkProposal: governance.approveNetworkProposal,
    rejectNetworkProposal: governance.rejectNetworkProposal
  }
};

// exports
//
module.exports = webLib;

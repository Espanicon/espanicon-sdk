// lib-with-sdk.js
//
// Imports
const IconService = require("icon-sdk-js");
const SCORES = require("./scores");

// SDK Objects
const CallBuilder = IconService.IconBuilder.CallBuilder;
const CallTransactionBuilder = IconService.IconBuilder.CallTransactionBuilder;
const IconConverter = IconService.IconConverter;
const IconAmount = IconService.IconAmount;

// Networks
const MAINNET_API_NODE =
  "https://" + SCORES.apiHostnames.espanicon + SCORES.apiRoutes.v3;
const TESTNET_API_NODE =
  "https://" + SCORES.apiHostnames.sejong + SCORES.apiRoutes.v3;

// Providers
const httpProviderMainnet = new IconService.HttpProvider(MAINNET_API_NODE);
const iconServiceMainnet = new IconService(httpProviderMainnet);
const httpProviderTestnet = new IconService.HttpProvider(TESTNET_API_NODE);
const iconServiceTestnet = new IconService(httpProviderTestnet);

// General functions
function convertLoopToIcx(input, format = "decimal", bigNumber = false) {
  const value = IconAmount.of(input, IconAmount.Unit.LOOP).convertUnit(
    IconAmount.Unit.ICX
  );
  if (format === "hex") {
    return IconConverter.toHex(IconConverter.toNumber(value));
  } else {
    return bigNumber ? input : IconConverter.toNumber(value);
  }
}

function convertToLoop(value, returnInHex = false) {
  const valueInLoop = value * 10 ** 18;
  if (returnInHex) {
    return IconConverter.toHex(valueInLoop);
  } else {
    return valueInLoop;
  }
}

function getRandomFromRange(end, start = 0) {
  //
  return Math.floor(Math.random() * (end - start));
}

function getRandomSupply(maxSupply) {
  const randomInt = getRandomFromRange(parseInt(maxSupply, 16));
  if (randomInt < 1) {
    return "0x1";
  }
  return "0x" + randomInt.toString(16);
}

function createRandomDate(start, end) {
  if (start.getTime() > end.getTime()) {
    throw new Error("start time cannot be after end time");
  } else {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}

// Tx functions
async function makeReadOnlyQuery(
  method,
  params = null,
  contract = MARKETPLACE_SMART_CONTRACT,
  service = iconService
) {
  /*
   * makes readonly tx
   */
  try {
    let call;
    if (params === null) {
      call = new CallBuilder()
        .to(contract)
        .method(method)
        .build();
    } else {
      call = new CallBuilder()
        .to(contract)
        .method(method)
        .params(params)
        .build();
    }

    const response = await service.call(call).execute();
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function makeTxRequestObj(
  method,
  params,
  from = "hx0000000000000000000000000000000000000000",
  to = SCORES.mainnet.governance,
  nid = SCORES.nid.mainnet
) {
  /*
   * creates jsonrpc object to make signed tx
   */
  const txObj = new CallTransactionBuilder()
    .from(from)
    .to(to)
    .stepLimit(IconConverter.toBigNumber("2000000"))
    .nid(IconConverter.toBigNumber(nid))
    .nonce(IconConverter.toBigNumber("1"))
    .version(IconConverter.toBigNumber("3"))
    .timestamp(new Date().getTime() * 1000)
    .method(method)
    .params(params)
    .build();

  return txObj;
}

// CPS methods
//
async function getProposalKeysByStatus(status) {
  const statusType = [
    "_active",
    "_completed",
    "_disqualified",
    "_paused",
    "_pending"
  ];

  if (statusType.includes(status)) {
    //
    return await makeReadOnlyQuery(
      "get_proposals_keys_by_status",
      { _status: status },
      SCORES.cps,
      iconServiceMain
    );
  } else {
    return null;
  }
}

async function getProposalDetailsByHash(hash) {
  return await makeReadOnlyQuery(
    "get_proposal_details_by_hash",
    { _ipfs_key: hash },
    SCORES.cps,
    iconServiceMain
  );
}

async function getVoteResultsByHash(hash) {
  return await makeReadOnlyQuery(
    "get_proposal_details_by_hash",
    { _ipfs_key: hash },
    SCORES.cps,
    iconServiceMain
  );
}

async function getAllProposals() {
  const statusType = [
    "_active",
    "_completed",
    "_disqualified",
    "_paused",
    "_pending"
  ];

  let proposals = {
    _active: [],
    _completed: [],
    _disqualified: [],
    _paused: [],
    _pending: []
  };

  for (let eachStatus of statusType) {
    const proposalsKeys = await getProposalKeysByStatus(eachStatus);

    for (let eachProposal of proposalsKeys) {
      const proposal = await getProposalDetailsByHash(eachProposal);
      const comments = await getVoteResultsByHash(eachProposal);
      proposals[eachStatus].push({
        proposal: proposal,
        comments: comments
      });
    }
  }

  return proposals;
}

// Main methods
//
async function getPreps() {
  //
  return await makeReadOnlyQuery(
    "getPReps",
    { startRanking: "0x1" },
    SCORES.main,
    iconServiceMain
  );
}

async function getPrep(prep) {
  //
  return await makeReadOnlyQuery(
    "getPRep",
    { address: prep },
    SCORES.main,
    iconServiceMain
  );
}

async function getBonderList(prep) {
  //
  return await makeReadOnlyQuery(
    "getBonderList",
    { address: prep },
    SCORES.main,
    iconServiceMain
  );
}

function parsePrepData(prep) {
  const c = IconConverter;
  return {
    ...prep,
    bonded: convertLoopToIcx(c.toNumber(prep.bonded)),
    delegated: parseInt(convertLoopToIcx(c.toNumber(prep.delegated))),
    grade:
      prep.grade === "0x0"
        ? "Main Prep"
        : prep.grade === "0x1"
        ? "Sub Prep"
        : "Prep candidate",
    irep: convertLoopToIcx(c.toNumber(prep.irep)),
    irepUpdateBlockHeight: c.toNumber(prep.irepUpdateBlockHeight),
    lastHeight: c.toNumber(prep.lastHeight),
    penalty:
      prep.penalty === "0x0"
        ? "none"
        : prep.penalty === "0x1"
        ? "Disqualification"
        : prep.penalty === "0x2"
        ? "Low Productivity"
        : prep.penalty === "0x3"
        ? "Block Validation Failure"
        : "Unknown",
    power: parseInt(convertLoopToIcx(c.toNumber(prep.power))),
    status:
      prep.status === "0x0"
        ? "Active"
        : prep.status === "0x1"
        ? "unregistered"
        : prep.status === "0x2"
        ? "Disqualified"
        : "Unknown",
    totalBlocks: c.toNumber(prep.totalBlocks),
    validatedBlocks: c.toNumber(prep.validatedBlocks)
  };
}

const lib = {
  cps: {
    getProposalKeysByStatus,
    getProposalDetailsByHash,
    getVoteResultsByHash,
    getAllProposals
  },
  governance: { getPreps, getPrep, getBonderList, parsePrepData }
};

module.exports = lib;

// lib.js
//
// Imports
const { scores } = require("./lib.config");

// global var declarations
const statusType = [
  "_active",
  "_completed",
  "_disqualified",
  "_paused",
  "_pending"
];

// General Functions
function makeJSONRPCRequestObj(method) {
  return {
    jsonrpc: "2.0",
    method: method,
    id: Math.ceil(Math.random() * 1000)
  };
}

function makeTxCallRPCObj(
  from,
  to,
  method,
  paramsObj,
  nid = scores.nid.mainnet,
  stepLimit = 2000000
) {
  let txObj = makeJSONRPCRequestObj("icx_sendTransaction");
  txObj["params"] = {
    from: from,
    to: to,
    stepLimit: decimalToHex(stepLimit),
    nid: decimalToHex(nid),
    nonce: decimalToHex(1),
    version: decimalToHex(3),
    timestamp: decimalToHex(new Date().getTime() * 1000),
    dataType: "call",
    data: {
      method: method,
      params: paramsObj
    }
  };

  return txObj;
}

function makeCustomCallRequestObj(
  icxMethod = "icx_call",
  method,
  params = null,
  height = null,
  to = "cx0000000000000000000000000000000000000000"
) {
  const JSONRPCRequestObj = makeJSONRPCRequestObj(icxMethod);
  let data = {
    ...JSONRPCRequestObj,
    params: {
      to: to,
      dataType: "call",
      data: {
        method: method
      }
    }
  };

  if (params == null) {
  } else {
    data.params.data.params = params;
  }

  if (height === null) {
  } else {
    if (typeof height !== "number") {
      throw new Error("Height type must be number");
    } else {
      data.params.height = "0x" + height.toString(16);
    }
  }

  return JSON.stringify(data);
}

function makeICXCallRequestObj(
  method,
  params = null,
  height = null,
  to = "cx0000000000000000000000000000000000000000"
) {
  return makeCustomCallRequestObj("icx_call", method, params, height, to);
}

function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

function decimalToHex(number) {
  return "0x" + number.toString(16);
}

function fromHexInLoop(loopInHex) {
  let loopInBase2 = hexToDecimal(loopInHex);
  return loopInBase2 / 10 ** 18;
}

// SCORE methods
//
// CPS methods
async function getCPSPeriodStatus(queryMethod) {
  //
  const JSONRPCObject = makeICXCallRequestObj(
    "get_period_status",
    null,
    null,
    scores.mainnet.cps
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getCPSProposalKeysByStatus(queryMethod, status) {
  const JSONRPCObject = makeICXCallRequestObj(
    "get_proposals_keys_by_status",
    { _status: status },
    null,
    scores.mainnet.cps
  );

  if (statusType.includes(status)) {
    const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  } else {
    return null;
  }
}

async function getCPSProposalDetailsByHash(queryMethod, hash) {
  const JSONRPCObject = makeICXCallRequestObj(
    "get_proposal_details_by_hash",
    { _ipfs_key: hash },
    null,
    scores.mainnet.cps
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getCPSProposalVoteResultsByHash(queryMethod, hash) {
  const JSONRPCObject = makeICXCallRequestObj(
    "get_vote_result",
    { _ipfs_key: hash },
    null,
    scores.mainnet.cps
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getAllCPSProposals(queryMethod) {
  let proposals = {
    _active: [],
    _completed: [],
    _disqualified: [],
    _paused: [],
    _pending: []
  };

  for (let eachStatus of statusType) {
    const proposalsKeys = await getCPSProposalKeysByStatus(
      queryMethod,
      eachStatus
    );

    for (let eachProposal of proposalsKeys) {
      const proposal = await getCPSProposalDetailsByHash(
        queryMethod,
        eachProposal
      );
      const comments = await getCPSProposalVoteResultsByHash(
        queryMethod,
        eachProposal
      );

      proposals[eachStatus].push({
        proposal: proposal,
        comments: comments
      });
    }
  }

  return proposals;
}

// Governance2 score methods
async function getScoreStatus(queryMethod, address) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getScoreStatus",
    { address: address },
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getStepPrice(queryMethod) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getStepPrice",
    null,
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getStepCosts(queryMethod) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getStepCosts",
    null,
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getMaxStepLimit(queryMethod, contextType) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getMaxStepLimit",
    { contextType: contextType },
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function isInScoreBlackList(queryMethod, address) {
  const JSONRPCObject = makeICXCallRequestObj(
    "isInScoreBlackList",
    { address: address },
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getVersion(queryMethod) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getVersion",
    null,
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getRevision(queryMethod) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getRevision",
    null,
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getProposal(queryMethod, proposalId) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getProposal",
    { id: proposalId },
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
async function getProposals(queryMethod) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getProposals",
    null,
    null,
    scores.mainnet.governance2
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}
function voteNetworkProposal(proposalId, vote, prepAddress) {
  return makeTxCallRPCObj(
    prepAddress,
    scores.mainnet.governance2,
    "voteProposal",
    {
      id: proposalId,
      vote: vote
    }
  );
}

function approveNetworkProposal(proposalId, prepAddress) {
  return voteNetworkProposal(proposalId, "0x1", prepAddress);
}

function rejectNetworkProposal(proposalId, prepAddress) {
  return voteNetworkProposal(proposalId, "0x0", prepAddress);
}

// Governance methods
async function getScoreApi(queryMethod, address = scores.mainnet.governance) {
  //
  const JSONRPCObject = JSON.stringify({
    ...makeJSONRPCRequestObj("icx_getScoreApi"),
    params: {
      address: address
    }
  });

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getIcxBalance(queryMethod, address, decimals = 2) {
  const JSONRPCObject = JSON.stringify({
    ...makeJSONRPCRequestObj("icx_getBalance"),
    params: {
      address: address
    }
  });

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return Number(fromHexInLoop(request.result).toFixed(decimals));
  }
}

async function getTxResult(queryMethod, txHash) {
  const JSONRPCObject = JSON.stringify({
    ...makeJSONRPCRequestObj("icx_getTransactionResult"),
    params: {
      txHash: txHash
    }
  });

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getTxByHash(queryMethod, txHash) {
  const JSONRPCObject = JSON.stringify({
    ...makeJSONRPCRequestObj("icx_getTransactionByHash"),
    params: {
      txHash: txHash
    }
  });

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getPreps(queryMethod, height = null) {
  const JSONRPCObject = makeICXCallRequestObj(
    "getPReps",
    { startRanking: "0x1" },
    height,
    scores.mainnet.governance
  );
  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

async function getPrep(queryMethod, prepAddress) {
  //
  const JSONRPCObject = makeICXCallRequestObj(
    "getPRep",
    { address: prepAddress },
    null,
    scores.mainnet.governance
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

function parsePrepData(prep) {
  return {
    ...prep,
    bonded: parseInt(fromHexInLoop(prep.bonded)),
    delegated: parseInt(fromHexInLoop(prep.delegated)),
    grade:
      prep.grade === "0x0"
        ? "Main Prep"
        : prep.grade === "0x1"
        ? "Sub Prep"
        : "Prep candidate",
    irep: parseInt(fromHexInLoop(prep.irep)),
    irepUpdateBlockHeight: hexToDecimal(prep.irepUpdateBlockHeight),
    lastHeight: hexToDecimal(prep.lastHeight),
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
    power: parseInt(fromHexInLoop(prep.power)),
    status:
      prep.status === "0x0"
        ? "Active"
        : prep.status === "0x1"
        ? "unregistered"
        : prep.status === "0x2"
        ? "Disqualified"
        : "Unknown",
    totalBlocks: hexToDecimal(prep.totalBlocks),
    validatedBlocks: hexToDecimal(prep.validatedBlocks)
  };
}

async function getBonderList(queryMethod, prepAddress) {
  //
  const JSONRPCObject = makeICXCallRequestObj(
    "getBonderList",
    { address: prepAddress },
    null,
    scores.mainnet.governance
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

function setBonderList(queryMethod, prepAddress, arrayOfBonderAddresses) {
  return makeTxCallRPCObj(
    prepAddress,
    scores.mainnet.governance,
    "setBonderList",
    {
      bonderList: [...arrayOfBonderAddresses]
    }
  );
}

async function getLastBlock(queryMethod) {
  const JSONRPCObject = JSON.stringify(
    makeJSONRPCRequestObj("icx_getLastBlock")
  );

  const request = await queryMethod(scores.apiRoutes.v3, JSONRPCObject);
  if (request == null) {
    // Error was raised and handled inside queryMethod, the returned value
    // is null. Here we continue returning null and let the code logic
    // after this handle the null values in the most appropiate way depending
    // on the code logic
    return request;
  } else {
    return request.result;
  }
}

const lib = {
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
    parsePrepData,
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
    approveNetworkProposal,
    rejectNetworkProposal
  },
  lib: {
    hexToDecimal,
    decimalToHex,
    fromHexInLoop,
    statusType
  }
};

module.exports = lib;

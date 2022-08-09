// espanicon-sdk.js
//
// Imports
const { scores } = require("./lib.config");

// global var declarations
const statusType = [
  "_active",
  "_completed",
  "_disqualified",
  "_paused",
  "_pending",
  "_rejected"
];

class EspaniconSDK {
  constructor(apiNode, queryMethod) {
    this.apiNode = apiNode;
    this.queryMethod = queryMethod;
    this.scores = scores;
    this.statusType = statusType;
  }
  // General Functions
  makeJSONRPCRequestObj = method => {
    return {
      jsonrpc: "2.0",
      method: method,
      id: Math.ceil(Math.random() * 1000)
    };
  };

  makeTxCallRPCObj = (
    from,
    to,
    method,
    paramsObj,
    nid = this.scores.nid.mainnet,
    stepLimit = 2000000
  ) => {
    let txObj = this.makeJSONRPCRequestObj("icx_sendTransaction");
    txObj["params"] = {
      from: from,
      to: to,
      stepLimit: this.decimalToHex(stepLimit),
      nid: this.decimalToHex(nid),
      nonce: this.decimalToHex(Number(1)),
      version: this.decimalToHex(Number(3)),
      timestamp: this.decimalToHex(new Date().getTime() * 1000),
      dataType: "call",
      data: {
        method: method,
        params: paramsObj
      }
    };

    return txObj;
  };

  makeCustomCallRequestObj = (
    icxMethod = "icx_call",
    method,
    params = null,
    height = null,
    to = "cx0000000000000000000000000000000000000000"
  ) => {
    const JSONRPCRequestObj = this.makeJSONRPCRequestObj(icxMethod);
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
  };

  makeICXCallRequestObj = (
    method,
    params = null,
    height = null,
    to = "cx0000000000000000000000000000000000000000"
  ) => {
    return this.makeCustomCallRequestObj(
      "icx_call",
      method,
      params,
      height,
      to
    );
  };

  hexToDecimal = hex => {
    return parseInt(hex, 16);
  };

  decimalToHex = number => {
    return "0x" + number.toString(16);
  };

  fromHexInLoop = loopInHex => {
    let loopInBase2 = this.hexToDecimal(loopInHex);
    return loopInBase2 / 10 ** 18;
  };

  // SCORE methods
  //
  // CPS methods
  getCPSPeriodStatus = async () => {
    //
    const JSONRPCObject = this.makeICXCallRequestObj(
      "get_period_status",
      null,
      null,
      this.scores.mainnet.cps
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getCPSProposalKeysByStatus = async status => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "get_proposals_keys_by_status",
      { _status: status },
      null,
      this.scores.mainnet.cps
    );

    if (this.statusType.includes(status)) {
      const request = await this.queryMethod(
        this.scores.apiRoutes.v3,
        JSONRPCObject,
        this.apiNode
      );
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
  };

  getCPSProposalDetailsByHash = async hash => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "get_proposal_details_by_hash",
      { _ipfs_key: hash },
      null,
      this.scores.mainnet.cps
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getCPSProposalVoteResultsByHash = async hash => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "get_vote_result",
      { _ipfs_key: hash },
      null,
      this.scores.mainnet.cps
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getAllCPSProposals = async () => {
    let proposals = {
      _active: [],
      _completed: [],
      _disqualified: [],
      _paused: [],
      _pending: []
    };

    for (let eachStatus of this.statusType) {
      const proposalsKeys = await this.getCPSProposalKeysByStatus(eachStatus);

      for (let eachProposal of proposalsKeys) {
        const proposal = await this.getCPSProposalDetailsByHash(eachProposal);
        const comments = await this.getCPSProposalVoteResultsByHash(
          eachProposal
        );

        proposals[eachStatus].push({
          proposal: proposal,
          comments: comments
        });
      }
    }

    return proposals;
  };

  // Governance2 score methods
  getScoreStatus = async address => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getScoreStatus",
      { address: address },
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getStepPrice = async () => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getStepPrice",
      null,
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getStepCosts = async () => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getStepCosts",
      null,
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getMaxStepLimit = async contextType => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getMaxStepLimit",
      { contextType: contextType },
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  isInScoreBlackList = async address => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "isInScoreBlackList",
      { address: address },
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getVersion = async () => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getVersion",
      null,
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getRevision = async () => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getRevision",
      null,
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getProposal = async proposalId => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getProposal",
      { id: proposalId },
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  getProposals = async () => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getProposals",
      null,
      null,
      this.scores.mainnet.governance2
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
  voteNetworkProposal = (proposalId, vote, prepAddress) => {
    return this.makeTxCallRPCObj(
      prepAddress,
      this.scores.mainnet.governance2,
      "voteProposal",
      {
        id: proposalId,
        vote: vote
      }
    );
  };

  approveNetworkProposal = (proposalId, prepAddress) => {
    return this.voteNetworkProposal(proposalId, "0x1", prepAddress);
  };

  rejectNetworkProposal = (proposalId, prepAddress) => {
    return this.voteNetworkProposal(proposalId, "0x0", prepAddress);
  };

  // Governance methods
  getScoreApi = async (address = this.scores.mainnet.governance) => {
    //
    const JSONRPCObject = JSON.stringify({
      ...this.makeJSONRPCRequestObj("icx_getScoreApi"),
      params: {
        address: address
      }
    });

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getIcxBalance = async (address, decimals = 2) => {
    const JSONRPCObject = JSON.stringify({
      ...this.makeJSONRPCRequestObj("icx_getBalance"),
      params: {
        address: address
      }
    });

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return Number(this.fromHexInLoop(request.result).toFixed(decimals));
    }
  };

  getTxResult = async txHash => {
    const JSONRPCObject = JSON.stringify({
      ...this.makeJSONRPCRequestObj("icx_getTransactionResult"),
      params: {
        txHash: txHash
      }
    });

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getTxByHash = async txHash => {
    const JSONRPCObject = JSON.stringify({
      ...this.makeJSONRPCRequestObj("icx_getTransactionByHash"),
      params: {
        txHash: txHash
      }
    });

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getPreps = async (height = null) => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getPReps",
      { startRanking: "0x1" },
      height,
      this.scores.mainnet.governance
    );
    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  getPrep = async prepAddress => {
    //
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getPRep",
      { address: prepAddress },
      null,
      this.scores.mainnet.governance
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  parsePrepData = prep => {
    return {
      ...prep,
      bonded: parseInt(this.fromHexInLoop(prep.bonded)),
      delegated: parseInt(this.fromHexInLoop(prep.delegated)),
      grade:
        prep.grade === "0x0"
          ? "Main Prep"
          : prep.grade === "0x1"
          ? "Sub Prep"
          : "Prep candidate",
      irep: parseInt(this.fromHexInLoop(prep.irep)),
      irepUpdateBlockHeight: this.hexToDecimal(prep.irepUpdateBlockHeight),
      lastHeight: this.hexToDecimal(prep.lastHeight),
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
      power: parseInt(this.fromHexInLoop(prep.power)),
      status:
        prep.status === "0x0"
          ? "Active"
          : prep.status === "0x1"
          ? "unregistered"
          : prep.status === "0x2"
          ? "Disqualified"
          : "Unknown",
      totalBlocks: this.hexToDecimal(prep.totalBlocks),
      validatedBlocks: this.hexToDecimal(prep.validatedBlocks)
    };
  };

  getBonderList = async prepAddress => {
    //
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getBonderList",
      { address: prepAddress },
      null,
      this.scores.mainnet.governance
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };

  setBonderList = (prepAddress, arrayOfBonderAddresses) => {
    return this.makeTxCallRPCObj(
      prepAddress,
      this.scores.mainnet.governance,
      "setBonderList",
      {
        bonderList: [...arrayOfBonderAddresses]
      }
    );
  };

  getLastBlock = async () => {
    const JSONRPCObject = JSON.stringify(
      this.makeJSONRPCRequestObj("icx_getLastBlock")
    );

    const request = await this.queryMethod(
      this.scores.apiRoutes.v3,
      JSONRPCObject,
      this.apiNode
    );
    if (request == null) {
      // Error was raised and handled inside queryMethod, the returned value
      // is null. Here we continue returning null and let the code logic
      // after this handle the null values in the most appropiate way depending
      // on the code logic
      return request;
    } else {
      return request.result;
    }
  };
}

module.exports = EspaniconSDK;

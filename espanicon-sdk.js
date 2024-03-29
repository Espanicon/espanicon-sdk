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
  /*
   *
   */
  constructor(apiNode, nid, queryMethod) {
    this.apiNode = apiNode;
    this.nid = nid;
    this.queryMethod = queryMethod;
    this.scores = scores;
    this.statusType = statusType;
  }
  // General Functions
  /*
   *
   */
  makeJSONRPCRequestObj = method => {
    return {
      jsonrpc: "2.0",
      method: method,
      id: Math.ceil(Math.random() * 1000)
    };
  };

  /*
   *
   */
  makeTxCallRPCObj = (
    from,
    to,
    method,
    paramsObj,
    nid = this.nid,
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

  /*
   *
   */
  makeCustomCallRequestObj = (
    icxMethod = "icx_call",
    method,
    params = null,
    height = null,
    to = "cx0000000000000000000000000000000000000000",
    returnString = true
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
      null;
    } else {
      data.params.data.params = params;
    }

    if (height === null) {
      null;
    } else {
      if (typeof height !== "number") {
        throw new Error("Height type must be number");
      } else {
        data.params.height = "0x" + height.toString(16);
      }
    }

    if (returnString) {
      return JSON.stringify(data);
    } else {
      return data;
    }
  };

  /*
   *
   */
  makeICXSendTxRequestObj = (
    method,
    params = null,
    height = null,
    to = "cx0000000000000000000000000000000000000000",
    returnString = true
  ) => {
    return this.makeCustomCallRequestObj(
      "icx_sendTransaction",
      method,
      params,
      height,
      to,
      returnString
    );
  };

  /*
   *
   */
  makeICXCallRequestObj = (
    method,
    params = null,
    height = null,
    to = "cx0000000000000000000000000000000000000000",
    returnString = true
  ) => {
    return this.makeCustomCallRequestObj(
      "icx_call",
      method,
      params,
      height,
      to,
      returnString
    );
  };

  /*
   *
   */
  hexToDecimal = hex => {
    return parseInt(hex, 16);
  };

  /*
   *
   */
  decimalToHex = number => {
    return "0x" + number.toString(16);
  };

  /*
   *
   */
  fromHexInLoop = loopInHex => {
    let loopInBase2 = this.hexToDecimal(loopInHex);
    return loopInBase2 / 10 ** 18;
  };

  // SCORE methods
  //
  // CPS methods
  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
        // after this handle the null values in the most appropiate way
        // depending on the code logic
        return request;
      } else {
        if (request.error == null) {
          return request.result;
        } else {
          return request;
        }
      }
    } else {
      return null;
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
  getNetworkProposal = async proposalId => {
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
  getNetworkProposals = async (params = null) => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getProposals",
      params,
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
  getAllNetworkProposals = async () => {
    const maxIterations = 100;
    let loop = 0;
    let start = 0;
    let size = 7;
    let params = {
      start: "0x" + start.toString(16),
      size: "0x" + size.toString(16)
    };
    let proposals = [];

    while (loop < maxIterations) {
      // console.log({ start: parseInt(params.start), size: parseInt(params.size)     });
      // console.log({ start: params.start, size: params.size });

      const query = await this.getNetworkProposals(params);

      //
      loop++;
      start = start + size;
      params.start = "0x" + start.toString(16);

      if (query.proposals.length < 1) {
        break;
      }
      query.proposals.map(eachProposal => {
        proposals.push(eachProposal);
      });
    }

    return proposals;
  };

  /*
   *
   */
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

  /*
   *
   */
  approveNetworkProposal = (proposalId, prepAddress) => {
    return this.voteNetworkProposal(proposalId, "0x1", prepAddress);
  };

  /*
   *
   */
  rejectNetworkProposal = (proposalId, prepAddress) => {
    return this.voteNetworkProposal(proposalId, "0x0", prepAddress);
  };

  // Governance methods
  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
  getIcxBalance = async (address, decimals = 8) => {
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
      if (request.error == null) {
        return Number(this.fromHexInLoop(request.result).toFixed(decimals));
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   *
   */
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

  /*
   *
   */
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };

  /*
   * ICON CHAINSCORE API
   */
  /*
   *
   */
  getNetworkInfo = async (height = null) => {
    const JSONRPCObject = this.makeICXCallRequestObj(
      "getNetworkInfo",
      null,
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
      if (request.error == null) {
        return request.result;
      } else {
        return request;
      }
    }
  };
}

module.exports = EspaniconSDK;

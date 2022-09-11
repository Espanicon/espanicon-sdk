// espanicon-sdk-node.js
//

// imports
//
const customRequest = require("./utils/customRequest");
const { scores, apiNode } = require("./lib.config");
const EspaniconSDK = require("./espanicon-sdk");

class EspaniconSDKNode extends EspaniconSDK {
  constructor(defaultApiNode = apiNode, defaultNid = scores.nid.mainnet) {
    super(defaultApiNode, defaultNid, customRequest);
  }
}

// exports
//
module.exports = EspaniconSDKNode;

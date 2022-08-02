// espanicon-sdk-node.js
//

// imports
//
const customRequest = require("./utils/customRequest");
const { scores, apiNode } = require("./lib.config");
const EspaniconSDK = require("./espanicon-sdk");

class EspaniconSDKNode extends EspaniconSDK {
  constructor(defaultApiNode = apiNode) {
    super(defaultApiNode, customRequest);
  }
}

// exports
//
module.exports = EspaniconSDKNode;

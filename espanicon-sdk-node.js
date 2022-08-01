// espanicon-sdk-node.js
//

// imports
//
const customRequest = require("./utils/customRequest");
const { scores } = require("./lib.config");
const EspaniconSDK = require("./espanicon-sdk");

class EspaniconSDKNode extends EspaniconSDK {
  constructor(apiNode = scores.apiNode) {
    super(apiNode, customRequest);
  }
}

// exports
//
module.exports = EspaniconSDKNode;

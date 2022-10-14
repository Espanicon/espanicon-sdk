// espanicon-sdk-web.js
//

// imports
//
const customFetch = require("./utils/customFetch");
const { scores, apiNode } = require("./lib.config");
const EspaniconSDK = require("./espanicon-sdk");

class EspaniconSDKWeb extends EspaniconSDK {
  constructor(defaultApiNode = apiNode, defaultNid = scores.nid.mainnet) {
    super(defaultApiNode, defaultNid, customFetch);
  }
}

// exports
//
module.exports = EspaniconSDKWeb;

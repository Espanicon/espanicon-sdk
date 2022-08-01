// espanicon-sdk-web.js
//

// imports
//
const customFetch = require("./utils/customFetch");
const { scores } = require("./lib.config");
const EspaniconSDK = require("./espanicon-sdk");

class EspaniconSDKWeb extends EspaniconSDK {
  constructor(apiNode = scores.apiNode) {
    super(apiNode, customFetch);
  }
}

// exports
//
module.exports = EspaniconSDKWeb;

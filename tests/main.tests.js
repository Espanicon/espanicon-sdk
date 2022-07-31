// main.test.js
const espaniconNodeSdk = require("./espanicon-node-sdk.test");
const libWithSdkTests = require("./lib-with-sdk.test");
const { runTestModule } = require("./utils");

async function runAllTests() {
  // await runTestModule(libWithSdkTests, "lib-with-sdk.js");
  await runTestModule(espaniconNodeSdk, "espanicon-node-sdk.js");
}

runAllTests();

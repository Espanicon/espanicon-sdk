// main.test.js
const espaniconNodeSdk = require("./espanicon-node-sdk.test");
const { runTestModule } = require("./utils");

async function runAllTests() {
  await runTestModule(espaniconNodeSdk, "espanicon-node-sdk.js");
}

runAllTests();

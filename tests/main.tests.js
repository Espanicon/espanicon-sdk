// main.test.js
const libNoSdkTests = require("./lib-no-sdk.test");
const libWithSdkTests = require("./lib-with-sdk.test");
const { runTestModule } = require("./utils");

async function runAllTests() {
  await runTestModule(libWithSdkTests, "lib-with-sdk.js");
  await runTestModule(libNoSdkTests, "lib-no-sdk.js");
}

runAllTests();

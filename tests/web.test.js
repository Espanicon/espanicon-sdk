// web.test.js
import libNoSdkWebTests from "./lib-no-sdk-web.test";
const { runTestModule } = require("./utils");

async function runAllTests() {
  await runTestModule(libNoSdkWebTests, "lib-no-sdk-web.js");
}

export default runAllTests;

import React from "react";
import libNoSdkWeb from "../lib-no-sdk-web";
import runAllTests from "../tests/web.test.js";

runAllTests();

export default function App() {
  return <p>TEST CONTENT</p>;
}

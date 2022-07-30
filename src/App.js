import React from "react";
import lib from "../lib-no-sdk-web";
// import runAllTests from "../tests/web.test.js";
import Test from "./components/Test";
const SCORES = require("../utils/scores");
import "./App.css";
const {
  getPreps,
  // getPrep,
  // parsePrepData,
  // getBonderList,
  // setBonderList,
  // getScoreApi,
  // getIcxBalance,
  getLastBlock
  // approveNetworkProposal,
  // rejectNetworkProposal
} = lib.governance;

// runAllTests();
const TEST_WALLET = process.env.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <h1>
            Web Interface for testing the Espanicon SDK (web based library)
          </h1>
          <Test method={getPreps} params={[true, TEST_WALLET]} />
          <Test method={getLastBlock} />
        </div>
      </header>
    </div>
  );
}

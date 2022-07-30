import React from "react";
import lib from "../lib-no-sdk-web";
// import runAllTests from "../tests/web.test.js";
import Test from "./components/Test";
import "./App.css";
const {
  // getPreps,
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

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <h1>
            Web Interface for testing the Espanicon SDK (web based library)
          </h1>
          <Test method={getLastBlock} />
        </div>
      </header>
    </div>
  );
}

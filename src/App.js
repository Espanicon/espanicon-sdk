import React from "react";
import lib from "../lib-no-sdk-web";
import Test from "./components/Test";
const SCORES = require("../utils/scores");
import "./App.css";
import ENV_VAR from "../web-test.config.json";
const {
  getScoreApi, // tested
  getIcxBalance, // tested
  getTxResult,
  getTxByHash,
  getPrep, // tested
  parsePrepData, // TODO:cannot be tested with current setup
  getPreps, // tested
  getBonderList, // tested
  setBonderList, // tested
  getLastBlock, // tested
  approveNetworkProposal, // tested
  rejectNetworkProposal // tested
} = lib.governance;

const {
  getCPSPeriodStatus,
  getCPSProposalKeysByStatus,
  getCPSProposalDetailsByHash,
  getCPSProposalVoteResultsByHash,
  getAllCPSProposals
} = lib.cps;

const TEST_WALLET = ENV_VAR.TEST_NODE_WALLET;
const TEST_CONTRACT = SCORES.mainnet.governance;

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <h1>
            Web Interface for testing the Espanicon SDK (web based library)
          </h1>
          {/* Test on getPrep */}
          <Test method={getPrep} params={true} rest={[TEST_WALLET]} />
          {/* Test on parsePrepData */}
          {/* Test on getPreps */}
          <Test method={getPreps} />
          {/* test on getBonderList */}
          <Test method={getBonderList} params={true} rest={[TEST_WALLET]} />
          {/* test on setBonderList */}
          <Test
            method={setBonderList}
            params={true}
            rest={[TEST_WALLET, [TEST_WALLET]]}
          />
          {/* test on getScoreApi */}
          <Test method={getScoreApi} params={true} rest={[TEST_CONTRACT]} />
          {/* test on getLastBlock */}
          <Test method={getLastBlock} />
          {/* test on approveNetworkProposal */}
          <Test
            method={approveNetworkProposal}
            params={true}
            rest={[
              "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
              TEST_WALLET
            ]}
          />
          {/* test on rejectNetworkProposal */}
          <Test
            method={rejectNetworkProposal}
            params={true}
            rest={[
              "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238",
              TEST_WALLET
            ]}
          />
          {/* test on getIcxBalance */}
          <Test
            method={getIcxBalance}
            params={true}
            rest={[TEST_WALLET + "33"]}
          />
          {/* test on getIcxBalance */}
          <Test method={getIcxBalance} params={true} rest={[TEST_WALLET]} />
          {/* test on getAllProposals */}
        </div>
      </header>
    </div>
  );
}

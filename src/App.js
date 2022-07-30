import React from "react";
import lib from "../lib-no-sdk-web";
import Test from "./components/Test";
const SCORES = require("../utils/scores");
import "./App.css";
import ENV_VAR from "../web-test.config.json";
const {
  getScoreApi, // tested
  getIcxBalance, // tested
  getTxResult, // tested
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
          <h3>>Test on methods for governance contract:</h3>
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
          {/* test on getTxResult */}
          <Test
            method={getTxResult}
            params={true}
            rest={[
              "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873"
            ]}
          />
          {/* test on getTxByHash */}
          <Test
            method={getTxByHash}
            params={true}
            rest={[
              "0x28f038854ecaa9b2d614ac8d6e8b06e9c7f80f29889c7e381f0c96481f7ed873"
            ]}
          />
          <h3>>Test on methods for cps contract:</h3>
          {/* test on getCPSPeriodStatus */}
          <Test method={getCPSPeriodStatus} />
          {/* test on getCPSProposalKeysByStatus */}
          <Test
            method={getCPSProposalKeysByStatus}
            params={true}
            rest={["_active"]}
          />
          {/* test on getCPSProposalDetailsByHash */}
          <Test
            method={getCPSProposalDetailsByHash}
            params={true}
            rest={[
              "bafybeieaasafdztabpd7rjqvysy6h7ttmrq6iqlmmtzqlgitztnd2ohxdu"
            ]}
          />
          {/* test on getCPSProposalVoteResultsByHash */}
          <Test
            method={getCPSProposalVoteResultsByHash}
            params={true}
            rest={[
              "bafybeieaasafdztabpd7rjqvysy6h7ttmrq6iqlmmtzqlgitztnd2ohxdu"
            ]}
          />
          {/* test on getAllCPSProposal */}
          <Test method={getAllCPSProposals} />
        </div>
      </header>
    </div>
  );
}

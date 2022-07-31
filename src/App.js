import React from "react";
import webLib from "../espanicon-web-sdk";
import Test from "./components/Test";
const SCORES = require("../utils/scores");
import "./App.css";
import ENV_VAR from "../web-test.config.json";
const {
  getScoreApi, // tested
  getIcxBalance, // tested
  getTxResult, // tested
  getTxByHash, // tested
  getPrep, // tested
  parsePrepData, // TODO:cannot be tested with current setup
  getPreps, // tested
  getBonderList, // tested
  setBonderList, // tested
  getLastBlock // tested
} = webLib.governance;

const {
  getCPSPeriodStatus, // tested
  getCPSProposalKeysByStatus, // tested
  getCPSProposalDetailsByHash, // tested
  getCPSProposalVoteResultsByHash, // tested
  getAllCPSProposals //tested TODO: is commented out because it takes too long
} = webLib.cps;
const {
  getScoreStatus, // tested
  getStepPrice, // tested
  getStepCosts, // tested
  getMaxStepLimit, // tested
  isInScoreBlackList, // tested
  getVersion, // tested
  getRevision, // tested
  getProposal, // tested TODO: returns error on valid proposals
  getProposals, // tested
  approveNetworkProposal, // tested
  rejectNetworkProposal //tested
} = webLib.governance2;

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
          {/* test on CPS METHODS */}
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
          {/* <Test method={getAllCPSProposals} /> */}

          {/* test on GOVERNANCE METHODS */}
          <h3>>Test on methods for governance contract:</h3>
          {/* test on getScoreApi */}
          <Test method={getScoreApi} params={true} rest={[TEST_CONTRACT]} />
          {/* test on getIcxBalance */}
          <Test
            method={getIcxBalance}
            params={true}
            rest={[TEST_WALLET + "33"]}
          />
          {/* test on getIcxBalance */}
          <Test method={getIcxBalance} params={true} rest={[TEST_WALLET]} />
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
          {/* test on getLastBlock */}
          <Test method={getLastBlock} />
          {/* test on GOVERNANCE2 METHODS */}
          <h3>>Test on methods for governance2 contract:</h3>
          {/* test on getScoreStatus */}
          <Test method={getScoreStatus} params={true} rest={[TEST_CONTRACT]} />
          {/* test on getStepPrice */}
          <Test method={getStepPrice} />
          {/* test on getStepCosts */}
          <Test method={getStepCosts} />
          {/* test on getMaxStepLimit */}
          <Test method={getMaxStepLimit} params={true} rest={["invoke"]} />
          {/* test on isInScoreBlackList */}
          <Test
            method={isInScoreBlackList}
            params={true}
            rest={[TEST_WALLET]}
          />
          {/* test on getVersion */}
          <Test method={getVersion} />
          {/* test on getRevision */}
          <Test method={getRevision} />
          {/* test on getProposal */}
          <Test
            method={getProposal}
            params={true}
            rest={[
              "0x910aa0259910b97a90382fc1b236c13937da4d033bffab5cba5795aeab04eee6"
            ]}
          />
          {/* test on getProposals */}
          <Test method={getProposals} />
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
        </div>
      </header>
    </div>
  );
}

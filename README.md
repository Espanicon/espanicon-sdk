# Espanicon SDK
**Espanicon SDK** is a custom JS SDK for the ICON Network created specifically to be used in Espanicon projects related to development in the ICON Network. If you find it useful for your projects you are free to use it but we highly recommend that you use the official [ICON JS SDK](https://github.com/icon-project/icon-sdk-js).

The benefit of using the Espanicon SDK is a more simpler syntax to make very common readonly queries to the ICON Network, and the methods for signed transactions returns a JSON object (ICON JSON-RPC) that can be given to any ICON wallet that implements the JS Provider standard (currently ICONex and Hana) and this will allow the signed transactions to be handled securely with the wallets without the need to expose the private keys, this is highly important when implementing an interface for users to sign transactions in a web app or platform that you might be building in the ICON Network. The downside is that you lose the wide arrange of options and customization that are possible to implement when you directly use the official ICON JS SDK.

## How to use
**Espanicon SDK** is available via NPM as a github package, to install you just need to run the following command:
```
npm install git@github.com:Espanicon/espanicon-sdk.git
```
Depending on whether you using the Espanicon SDK on the server side (via nodejs) or on the client side (web) the way to import it will differ, is important to choose the correct method because internally the request are being handle in different ways, for nodejs the http and https modules are used and for the web the fetch API is used.

### If you are using the SDK in a nodejs based app
```js
// Import the SDK
const EspaniconSDKNode = require('@espanicon/espanicon-sdk');

// instantiate the library
const lib = new EspaniconSDKNode();

// Now you can have access to all the methods inside the library
const {
  getScoreApi,
  getIcxBalance,
  // ...
} = lib;

```
### If you are using the SDK directly on the web
```js
// Import the SDK
import EspaniconSDKWeb from '@espanicon/espanicon-sdk';

// instantiate the library
const lib = new EspaniconSDKWeb();

// Now you can have access to all the methods inside the library
const {
  getScoreApi,
  getIcxBalance
  // ...
} = lib;
```
## Methods
The library exposes a class object with all the methods that you can use to make ICON Network related queries.
```js
{
  getScoreApi,
  getIcxBalance,
  getTxResult,
  getTxByHash,
  getPrep,
  parsePrepData,
  getPreps,
  getBonderList,
  setBonderList,
  getLastBlock,
  getCPSPeriodStatus,
  getCPSProposalKeysByStatus,
  getCPSProposalDetailsByHash,
  getCPSProposalVoteResultsByHash,
  getAllCPSProposals,
  getScoreStatus,
  getStepPrice,
  getStepCosts,
  getMaxStepLimit,
  isInScoreBlackList,
  getVersion,
  getRevision,
  getProposal,
  getProposals,
  approveNetworkProposal,
  rejectNetworkProposal,
  scores
}
```

You can then simply use the methods without the need to add which API node to use (*api.icon.community* is used by default) and which network (*mainnet* is used by default).

```js
import EspaniconSDKWeb from "@espanicon/espanicon-sdk";

const lib = new EspaniconSDKWeb();

const { getCPSPeriodStatus } = lib;

// most methods are async
async function runAsync() {
const query = await getCPSPeriodStatus();
console.log(query)
}

runAsync()

```
This will have a response in the following format:

```js
{
  current_block: "0x32f22c8",
  next_block: "0x334086f",
  period_name: "Voting Period",
  period_span: "0x13bd20",
  previous_period_name: "Application Period",
  remaining_time: "0x9cb4e"
}
```

### getCPSPeriodStatus()
**Params:**
- No params.
### getCPSProposalKeysByStatus(status)
**Params:**
- status: one of the following => *"_active"* | *"_completed"* | *"_disqualified"* | *"_paused"* | *"_pending"*
### getCPSProposalDetailsByHash(hash)
 **Params:**
 - hash: hash key of a CPS proposal.
### getCPSProposalVoteResultsByHash(hash)
**Params:**
- hash: hash key of a CPS proposal.
### getAllCPSProposals()
**Params:**
- No params.
### getScoreApi(address)
**Params:**
- address: ICON SCORE address.
### getIcxBalance(address)
**Params:**
- address: ICON wallet address.
### getTxResult(txHash)
**Params:**
- txHash: ICON Network tx hash.
### getTxByHash(txHash)
**Params:**
- txHash: ICON Network tx hash.
### getPrep(prepAddress)
**Params:**
- prepAddress: wallet address of a prep.
### parsePrepData(prep)
**Params:**
- prep: the object result of a getPrep(prepAddress) query AS IS.
### getPreps(height=null)
**Params:**
- height (optional): block height.
### getBonderList(prepAddress)
**Params:**
- prepAddress: wallet address of a prep.
### setBonderList(prepAddress, arrayOfBonderAddresses)
**Params:**
- prepAddress: wallet address of a prep.
- arrayOfBonderAddress: an array of up to 10 addresses to be set as bonders for the given prep (prepAddress).
### getLastBlock()
**Params:**
- No params.
### getScoreStatus(address)
**Params:**
- address: ICON SCORE address.
### getStepPrice()
**Params:**
- No params.
### getStepCosts()
**Params:**
- No params.
### getMaxStepLimit(contextType)
**Params:**
- contextType: 'invoke' for sendTransaction, 'query' for call.
### isInScoreBlackList(address)
**Params:**
- address: SCORE address to query.
### getVersion()
**Params:**
- No params.
### getRevision()
**Params:**
- No params.
### getProposal(proposalId)
**Params:**
- proposalId: ID of network proposal.
### getProposals()
**Params:**
- No params.
### approveNetworkProposal(proposalId, prepAddress)
**Params:**
- proposalId: ID of the proposal.
- prepAddress: wallet address of a prep.
### rejectNetworkProposal(proposalId, prepAddress)
**Params:**
- proposalId: ID of the proposal.
- prepAddress: wallet address of a prep.

## References
- ICON Documentation: https://docs.icon.community/
- CPS Documentation on Github: https://github.com/icon-community/CPS/wiki
- Documentation for governance2 SCORE: https://github.com/icon-project/governance2
- Documentation for governance SCORE: https://github.com/icon-project/governance

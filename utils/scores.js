// smart contract addresses in the ICON Network
const mainnet = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  governance2: "cx0000000000000000000000000000000000000001",
  cps: "cx9f4ab72f854d3ccdc59aa6f2c3e2215dd62e879f"
};
const sejong = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  governance2: "cx0000000000000000000000000000000000000001",
  bnUSD: "cx5838cb516d6156a060f90e9a3de92381331ff024"
};
const berlin = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  governance2: "cx0000000000000000000000000000000000000001",
  cps: "cx1cd2da25f9942fda5144e139bbda3e5108d3c083",
  bnusd: "cx1cd2da25f9942fda5144e139bbda3e5108d3c083"
};
const lisbon = {
  //
  governance: "cx0000000000000000000000000000000000000000",
  governance2: "cx0000000000000000000000000000000000000001",
  balancedDex: "cx7a90ed2f781876534cf1a04be34e4af026483de4",
  cps: "cxd82e5f0c1090f55f9b2f727ad35fb3a9e1de95c4",
  bnusd: "cx1e7415ff04129ce3d8e963167373a4e248dffc1f"
};

const nid = {
  mainnet: 1,
  lisbon: 2,
  berlin: 7,
  sejong: 83,
  local: 3
};

let apiHostnames = {
  geometry: "api.icon.geometry.io", // deprecated
  ctz: "ctz.solidwallet.io",
  icon: "api.icon.community",
  espanicon: "api.espanicon.team",
  sejong: "sejong.net.solidwallet.io",
  berlin: "berlin.net.solidwallet.io",
  lisbon: "lisbon.net.solidwallet.io"
};

apiHostnames.default = apiHostnames.icon;

const apiRoutes = {
  v3: "/api/v3",
  proposals: "/api/v1/governance/proposals"
};

const SCORES = {
  mainnet,
  sejong,
  berlin,
  lisbon,
  nid,
  apiRoutes,
  apiHostnames
};

module.exports = SCORES;

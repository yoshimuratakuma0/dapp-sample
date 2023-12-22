var CryptoZombies = artifacts.require("./CryptoZombies.sol");
module.exports = function(deployer) {
  console.log("NNNN");
  deployer.deploy(CryptoZombies);
};

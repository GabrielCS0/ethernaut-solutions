const CoinFlipExploit = artifacts.require("CoinFlipExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        CoinFlipExploit,
        "0x1f7EC0DB0eeAf2E949950970298d87ae9d6F124B",
        { from: accounts[0] }
    );
};

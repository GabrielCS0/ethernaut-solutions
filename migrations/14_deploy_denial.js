const DenialExploit = artifacts.require("DenialExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        DenialExploit,
        "0x213C47f1e6d3cE46ad37af646dDB9cE1c07cc44b",
        { from: accounts[0] }
    );
};

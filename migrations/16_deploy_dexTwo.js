const DexTwoExploit = artifacts.require("DexTwoExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        DexTwoExploit,
        400,
        { from: accounts[0] }
    );
};

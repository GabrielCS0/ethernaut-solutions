const ForceExploit = artifacts.require("ForceExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        ForceExploit,
        {
            from: accounts[0],
            value: "0000000000000000001"
        }
    );
};

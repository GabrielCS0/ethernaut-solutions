const PrivacyExploit = artifacts.require("PrivacyExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        PrivacyExploit,
        "0xD5a372D2c3768781b259C9D57733aF12b88B1a21",
        { from: accounts[0] }
    );
};

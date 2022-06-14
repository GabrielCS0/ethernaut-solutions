const TelephoneExploit = artifacts.require("TelephoneExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        TelephoneExploit,
        "0x4c9edBCeB47d01593e501d21a72157D4495B6e4A",
        { from: accounts[0] }
    );
};

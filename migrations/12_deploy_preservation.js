const PreservationExploit = artifacts.require("PreservationExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        PreservationExploit,
        { from: accounts[0] }
    );
};

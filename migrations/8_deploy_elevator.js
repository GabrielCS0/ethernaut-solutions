const ElevatorExploit = artifacts.require("ElevatorExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        ElevatorExploit,
        "0xC18d555959fE8Ca06218F2F91E93AE8Fe641B202",
        { from: accounts[0] }
    );
};

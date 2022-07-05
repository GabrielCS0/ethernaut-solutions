const MotorbikeExploit = artifacts.require("MotorbikeExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        MotorbikeExploit,
        { from: accounts[0] }
    );
};

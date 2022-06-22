const GatekeeperTwoExploit = artifacts.require("GatekeeperTwoExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        GatekeeperTwoExploit,
        "0xd623fd545759b942A8706B961593d2a7812DA334",
        { from: accounts[0] }
    );
};

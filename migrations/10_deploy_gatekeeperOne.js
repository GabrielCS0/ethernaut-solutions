const GatekeeperOneExploit = artifacts.require("GatekeeperOneExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        GatekeeperOneExploit,
        "0x3C5fC9977c949773A7fee326Ea123e94Ae5422B6",
        { from: accounts[0] }
    );
};

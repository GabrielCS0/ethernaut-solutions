const KingExploit = artifacts.require("KingExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        KingExploit,
        "0xAb0351992F6417e4f23CdC7F75195F7124fa7427",
        {
            from: accounts[0],
            value: "0010000000000000000"
        }
    );
};

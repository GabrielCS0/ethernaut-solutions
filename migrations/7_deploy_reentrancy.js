const ReentrancyExploit = artifacts.require("ReentrancyExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        ReentrancyExploit,
        "0x7e8d5c94Ac51dEaFF908ee716c29045dECF7f98b",
        {
            from: accounts[0],
            value: "1000000000000000000"
        }
    );
};

const ShopExploit = artifacts.require("ShopExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        ShopExploit,
        "0xcF032fa739682493495910524D86E3E95FFFe9D8",
        { from: accounts[0] }
    );
};

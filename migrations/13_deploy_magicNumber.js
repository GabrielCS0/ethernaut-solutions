const MagicNumberExploit = artifacts.require("MagicNumberExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        MagicNumberExploit,
        "0xec61F6Ed36a44B0cE30B959d721Cc028e1CCd981",
        { from: accounts[0] }
    );
};

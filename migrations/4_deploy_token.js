const TokenExploit = artifacts.require("TokenExploit");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(
        TokenExploit,
        "0xA91Dd42F22ff19E5A3f9b6aCe2294DB5678D8A13",
        { from: accounts[0] }
    );
};

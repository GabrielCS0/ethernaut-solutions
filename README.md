# Ethernaut

My solutions to [Ethernaut CTF](https://ethernaut.openzeppelin.com/).

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/)
- [Truffle](https://trufflesuite.com/)

## Setup

1) Make a copy of '.env.example' to '.env' and set with your environment variables.

```bash
$ cp .env.example .env
```

2) Install the dependencies.

```bash
$ yarn
```

## Run

```bash
# To compile your project
$ truffle compile

# To run your migrations
$ truffle migrate --network rinkeby

# To run a specific migration
$ truffle migrate --network rinkeby -f 18 --to 18

# To launch the console
$ truffle console --network rinkeby
```

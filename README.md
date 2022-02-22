


  
  <img src="/public/web3-blog-03.png" alt="Web3 Blog" />
  
  
  <table border="1">
    <tr>
      <td>
        x
      </td>
      <td>
        x
      </td>
      <td>
        x
      </td>
      <td>
        x
      </td>
      <td>
        x
      </td>
    </tr>  
  </table>
  
  

<br />

# About the project

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.



<br />

## Table of contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Directory Structure](#directory-structure)
- [Live Preview](#live-preview)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)
- [License](#license)



<br />

## Features

* List
* Create
* Update
* Login
* Add Cover




<br />

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

* Git - [Download & Install Git](https://git-scm.com/downloads/). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. 
* MetaMask - [Download & Install MetaMask](https://metamask.io/download/) extension in your browser






<br />

## Getting Started

1. Clone this repository

```sh
git clone github.com/marcusvbrangel/full-stack-web3-blog.git
```

2. Install the dependencies

```sh
npm install
```

3. Run the local node

```sh
npx hardhat node
```

4. Deploy to localhost

```sh
npx hardhat run web3/scripts/deploy.js --network localhost
```

5. Start the app

```sh
npm run dev
```

<br />

For more details visit:

(https://nextjs.org/learn/) to get started with Next.js.

(https://hardhat.org/getting-started/#quick-start/) to get started with Hardhat.





<br />

## Technologies


* [Ethereum](https://ethereum.org/en/) Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.


* [Solidity](https://soliditylang.org/) Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum.


* [Polygon](https://polygon.technology/) Polygon believes in Web3 for all. Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.


* [Hardhat](https://hardhat.org/) Flexible. Extensible. Fast. Ethereum development environment for professionals


* [Alchemy](https://www.alchemy.com/) Web3 development made easy. The world’s most powerful blockchain developer platform, relied upon by the majority of the world's top blockchain apps.


* [MetaMask](https://metamask.io/) A crypto wallet & gateway to blockchain apps


* [The Graph](https://thegraph.com/en/) The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.


* [IPFS](https://ipfs.io/) A peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.


* [ethers.js](https://docs.ethers.io/v5/) The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.


* [Waffle](https://getwaffle.io/) The most advanced framework for testing smart contracts



* [Next.js](https://nextjs.org/) The React Framework for Production


* [Vercel](https://vercel.com/) Vercel is the best place to deploy any frontend app. Start by deploying with zero configuration to our global edge network. Scale dynamically to millions of pages without breaking a sweat.



<br />

## Live Preview

[Web3 Blog](https://full-stack-web3-blog.vercel.app/)
A special place to share topics and tips about Web3


<br />

## Directory Structure


    .
    ├── config.js
    ├── hardhat.config.js
    ├── LICENSE
    ├── next.config.js
    ├── notes.txt
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── ambanja-panther-chameleon-7921083.jpg
    │   ├── favicon.ico
    │   ├── icons8-file.svg
    │   ├── icons8-image-file.svg
    │   ├── icons8-scroll.svg
    │   ├── right-arrow.svg
    │   └── vercel.svg
    ├── README.md
    ├── src
    │   ├── components
    │   ├── context.js
    │   ├── pages
    │   │   ├── api
    │   │   │   └── hello.js
    │   │   ├── _app.js
    │   │   ├── create-post.js
    │   │   ├── edit-post
    │   │   │   └── [id].js
    │   │   ├── index.js
    │   │   └── posts
    │   │       └── [id].js
    │   └── styles
    │       ├── globals.css
    │       └── Home.module.css
    ├── temp
    │   └── README.md
    └── web3
        ├── artifacts
        │   ├── build-info
        │   │   ├── 84fa6715e973cf226d8cdd1f073e06d5.json
        │   │   └── e2c8c8285a9e197dc3f05927c8b47b1b.json
        │   ├── hardhat
        │   │   └── console.sol
        │   │       ├── console.dbg.json
        │   │       └── console.json
        │   ├── @openzeppelin
        │   │   └── contracts
        │   │       └── utils
        │   │           └── Counters.sol
        │   └── web3
        │       └── contracts
        │           ├── Blog.sol
        │           │   ├── Blog.dbg.json
        │           │   └── Blog.json
        │           └── Greeter.sol
        │               ├── Greeter.dbg.json
        │               └── Greeter.json
        ├── cache
        │   └── solidity-files-cache.json
        ├── config.js
        ├── contracts
        │   ├── Blog.sol
        │   └── Greeter.sol
        ├── scripts
        │   └── deploy.js
        └── test
            └── blog-test.js    




<br />

## Contributing

Have a look through existing [Issues](https://github.com/marcusvbrangel/full-stack-web3-blog/issues) and [Pull Requests](https://github.com/marcusvbrangel/full-stack-web3-blog/pulls) that you could help with.

<br />

If this is your first time contributing to this project, please do read our [Contributor Workflow Guide](https://github.com/the-guild-org/Stack/blob/master/CONTRIBUTING.md) before you get started off.

Feel free to open issues and pull requests. We're always welcome support from the community.


<br />

## Code of Conduct

Help me keep this project open and inclusive. Please read and follow our [
of Conduct](https://github.com/the-guild-org/Stack/blob/master/CODE_OF_CONDUCT.md) as adopted from [Contributor Covenant](https://www.contributor-covenant.org/)



<br />

## Acknowledgments

[Nader Dabit](https://twitter.com/dabit3/)



<br />

## Contact

* Email:    marcus.vbrangel@gmail.com
* GitHub:   https://github.com/marcusvbrangel/
* Twitter:  https://twitter.com/marcusvbrangel/
* LinkedIn: https://www.linkedin.com/in/marcusrangel/





<br />

## License

Copyright (c) Marcus Rangel. All rights reserved.

Licensed under the [MIT](LICENSE.md) license.



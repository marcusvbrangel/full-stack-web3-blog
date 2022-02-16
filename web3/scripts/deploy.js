// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const hre = require("hardhat");
const fs = require("fs");

const main = async () => {

  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');


  // We get the contract to deploy to network
  const Blog = await hre.ethers.getContractFactory("Blog");
  const blog = await Blog.deploy("My Blog");

  await blog.deployed();

  console.log("Blog deployed to: ", blog.address);
  
  const fileName = "./config.js";

  const fileText = `
    export const contractAddressBlog = "${blog.address}"
    export const ownerAddressBlog = "${blog.signer.address}"  
  `;

  fs.writeFileSync(fileName, fileText);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
//   console.log("Account balance:", (await deployer.getBalance()).toString());

  const Voting = await ethers.getContractFactory("Voting");
  const candidates = ["Alice", "Bob", "Charlie"];
  const voting = await Voting.deploy(candidates);
  console.log(voting);
  

  // console.log("Voting contract deployed to:", voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

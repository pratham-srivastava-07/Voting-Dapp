import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv"

dotenv.config()
const {API_URL, PRIVATE_KEY} = process.env
const config: HardhatUserConfig = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  paths: {
    sources: "./contracts",
  },
  networks: {
    hardhat: {},
    sepolia: {
     url: API_URL,
     accounts: [`${PRIVATE_KEY}`],
     gas: 210000000,
     gasPrice: 800000000000,
    }
  }
};

export default config;

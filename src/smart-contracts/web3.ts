import { Web3 } from "web3";

const web3 = new Web3(process.env.MUMBAI_URL ?? "https://rpc-mumbai.maticvigil.com");

export default web3;
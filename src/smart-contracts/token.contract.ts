
import ABI from "./token.abi";
import web3 from "./web3";

const address = process.env.REACT_APP_TOKEN_ADDRESS;

export const TokenContract = new web3.eth.Contract(ABI, address);

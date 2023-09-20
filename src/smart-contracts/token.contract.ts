
import ABI from "./token.abi";
import web3 from "./web3";

const Contract = new web3.eth.Contract(ABI, process.env.TOKEN_ADDRESS, {
  
});

export default Contract;

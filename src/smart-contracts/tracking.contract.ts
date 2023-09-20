
import ABI from "./tracking.abi";
import web3 from "./web3";

const Contract = new web3.eth.Contract(ABI, process.env.TRACKING_ADDRESS);

export default Contract;

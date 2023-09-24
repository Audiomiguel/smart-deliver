
import ABI from "./tracking.abi";
import web3 from "./web3";

const address = process.env.REACT_APP_TRACKING_ADDRESS;

export const TrackingContract = new web3.eth.Contract(ABI, address);

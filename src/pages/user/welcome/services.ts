import { TokenContract } from 'src/smart-contracts/token.contract';
import { TrackingContract } from 'src/smart-contracts/tracking.contract';
import { utils } from 'web3';

export async function getAllowance(account: string) {
  TrackingContract.setProvider(window.ethereum);
  TokenContract.setProvider(window.ethereum);

  const spender = TrackingContract.options.address as string;

  const allowance = await TokenContract.methods.allowance(account, spender).call();

  return BigInt(allowance);
}

export async function getBalance(account: string) {
  TokenContract.setProvider(window.ethereum);

  const balance = await TokenContract.methods.balanceOf(account).call();

  return BigInt(balance);
}

export async function geShippingFee() {
  TrackingContract.setProvider(window.ethereum);

  const fee = await TrackingContract.methods.shippingFee().call();

  return BigInt(fee);
}

export async function approveTokens(account: string) {
  const fee = await TrackingContract.methods.shippingFee().call();

  const data  = JSON.stringify({
    primaryType: 'Approve',
    types: {
      EIP712Domain: [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "chainId", type: "uint256" },
        { name: "verifyingContract", type: "address" },
      ],
      Approve: [
        { name: 'spender', type: 'address' },
        { name: 'value', type: 'uint256' },
      ],
    },
    domain: {
      name: 'Tracking Smart Contract',
      version: '1',
      chainId: '0x13881',
      verifyingContract: TokenContract.options.address,
    },
    message: {
      spender: TrackingContract.options.address,
      value: utils.fromWei(fee, 'mwei')
    },
  });

  const signature = await window.ethereum?.request<string>({
    method: 'eth_signTypedData_v4',
    params: [account, data],
  });

  try {
    TrackingContract.setProvider(window.ethereum);
    TokenContract.setProvider(window.ethereum);

    const spender = TrackingContract.options.address as string;

    await TokenContract.methods.approve(spender, fee).send({ 
                          from: account,
                          data: signature?.toString(),
                          gas: '1000000',
                          gasPrice: '10000000000',
                        });

  } catch (error) {
    console.error(error);
  }
}
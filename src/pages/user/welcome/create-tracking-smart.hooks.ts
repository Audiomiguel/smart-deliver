import React from 'react';
import {
  Address,
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

const trackingAddress = '0xF1A233302a19aE3FB53B9bBb76Af0BDA3d9DE75e';

export const usePayOrder = () => {
  return usePrepareContractWrite({
    address: '0x0c0C71219F4380401d88892D02a436783497465d',
    abi: erc20ABI,
    functionName: 'approve',
    args: [trackingAddress, BigInt(8 * 10 ** 6)],
    enabled: true,
  });
};

export const useAllowance = (address: Address) => {
  return useContractRead({
    address: '0x0c0C71219F4380401d88892D02a436783497465d',
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address, trackingAddress],
  });
};

export const useCreateTrackingSmartHooks = () => {
  const shippingFee = BigInt(8 * 10 ** 6);

  const { address, isDisconnected } = useAccount();

  const { config } = usePayOrder();

  const { data: tx, write } = useContractWrite(config);
  const { data: allowance = 0 } = useAllowance(address as Address);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: tx?.hash as any,
  });

  return {
    allowance,
    shippingFee,
    isLoading,
    isSuccess,
    sender: address,
    write,
  };
};

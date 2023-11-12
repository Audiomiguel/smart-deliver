import type { Address } from 'wagmi';

export type OrderTracking = {
  id: string;
  amount: string;
  productName: string;
  sender: Address;
  recipient: Recipient;
  package: Package;
  status?: string;
};

export type OrderTrackingForm = Pick<
  OrderTracking,
  'id' | 'amount' | 'productName' | 'recipient' | 'package'
>;

type Recipient = {
  documentType: string;
  document: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
};

type Package = {
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
};

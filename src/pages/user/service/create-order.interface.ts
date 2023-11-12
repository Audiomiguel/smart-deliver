export type ParcelStatus =
  | 'ORDERED'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'REFUNDED'
  | 'CANCELLED';

export interface IParcelData {
  _id: string;
  id: string;
  productName: string;
  sender: string;
  package: Package;
  recipient: Recipient;
  amount: string;
  status: ParcelStatus;
  createdAt: string;
  __v: number;
}

export interface Package {
  weight: string;
  dimensions: Dimensions;
}

export interface Dimensions {
  width: string;
  height: string;
  length: string;
}

export interface Recipient {
  documentType: string;
  document: string;
  name: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
}

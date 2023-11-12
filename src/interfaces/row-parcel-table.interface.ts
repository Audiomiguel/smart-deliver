import { PARCEL_STATUS_TYPES } from 'src/constants';

export interface IRowParcel {
  key: string;
  origin: string;
  destiny: string;
  price: string;
  estimatedDate: string;
  status: PARCEL_STATUS_TYPES;
}

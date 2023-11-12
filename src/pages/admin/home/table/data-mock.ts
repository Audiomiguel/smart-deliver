import { PARCEL_STATUS_TYPES } from 'src/constants';

export const DataTableParcel = [
  {
    key: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    origin: 'Miraflores',
    destiny: 'Plaza Norte',
    price: '10 CRC',
    estimatedDate: '29 ago - 31 ago',
    status: PARCEL_STATUS_TYPES.CREATED,
  },
  {
    key: '0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE',
    origin: 'Villa El Salvador',
    destiny: 'Miraflores',
    price: '12 CRC',
    estimatedDate: '03 sep - 09 sep',
    status: PARCEL_STATUS_TYPES.ACCEPTED,
  },
  {
    key: '580xC2B4eA618cD8Ab3b6D36F4c3dDE2Ce79937F2615cd',
    origin: 'Plaza Norte',
    destiny: 'Chorrillos',
    price: '08 CRC',
    estimatedDate: '07 sep - 10 sep',
    status: PARCEL_STATUS_TYPES.WAITING,
  },
  {
    key: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
    origin: 'Miraflores',
    destiny: 'Plaza Norte',
    price: '05 CRC',
    estimatedDate: '11 sep - 19 sep',
    status: PARCEL_STATUS_TYPES.FINISHED,
  },
];

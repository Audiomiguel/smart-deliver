import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export enum PARCEL_STATUS_TYPES {
  ORDERED = 'ORDERED',
  SHIPPED = 'SHIPPED',
  REFUNDED = 'REFUNDED',
  CANCELLED = 'CANCELLED',
  DELIVERED = 'DELIVERED',
}

export const orderedParcelStatuses: PARCEL_STATUS_TYPES[] = [
  PARCEL_STATUS_TYPES.ORDERED,
  PARCEL_STATUS_TYPES.SHIPPED,

  PARCEL_STATUS_TYPES.REFUNDED,

  PARCEL_STATUS_TYPES.CANCELLED,

  PARCEL_STATUS_TYPES.DELIVERED,
  // PARCEL_STATUS_TYPES.DELAYED,
  // PARCEL_STATUS_TYPES.LOST,
  // PARCEL_STATUS_TYPES.ABANDONED,
];

// De ordered a shipped

export enum PARCEL_STATUS_COLOR {
  ORDERED = 'error',
  SHIPPED = 'info',
  RECEIVED = 'warning',
  REFUNDED = undefined,
  CANCELLED = 'success',
  DELIVERED = 'secondary',

  //"default" | "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined
}

export const ParcelTranslated = {
  ORDERED: 'Ordenado',
  SHIPPED: 'Enviado',
  REFUNDED: 'Reembolsado',
  CANCELLED: 'Cancelado',
  DELIVERED: 'Entregado',
};

export enum PARCEL_STATUS_NAME {
  ORDERED = 'ORDENADO',
  SHIPPED = 'ENVIADO',
  RECEIVED = 'RECIBIDO',
  REFUNDED = 'REEMBOLSADO',
  CANCELLED = 'CANCELADO',
  DELIVERED = 'ENTREGADO',
}

export const PARCEL_STATUS = {
  [PARCEL_STATUS_TYPES.ORDERED]: {
    color: PARCEL_STATUS_COLOR.ORDERED,
    label: PARCEL_STATUS_NAME.ORDERED,
    icon: <AccessTimeIcon fontSize="large" />,
  },
  [PARCEL_STATUS_TYPES.SHIPPED]: {
    color: PARCEL_STATUS_COLOR.SHIPPED,
    label: PARCEL_STATUS_NAME.SHIPPED,
    icon: <CheckCircleOutlineIcon fontSize="large" />,
  },

  [PARCEL_STATUS_TYPES.REFUNDED]: {
    color: PARCEL_STATUS_COLOR.REFUNDED,
    label: PARCEL_STATUS_NAME.REFUNDED,
    icon: <AirportShuttleIcon fontSize="large" />,
  },
  [PARCEL_STATUS_TYPES.CANCELLED]: {
    color: PARCEL_STATUS_COLOR.CANCELLED,
    label: PARCEL_STATUS_NAME.CANCELLED,
    icon: <EmojiTransportationIcon fontSize="large" />,
  },
  [PARCEL_STATUS_TYPES.DELIVERED]: {
    color: PARCEL_STATUS_COLOR.DELIVERED,
    label: PARCEL_STATUS_NAME.DELIVERED,
    icon: <HandshakeIcon fontSize="large" />,
  },
};

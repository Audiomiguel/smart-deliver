import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export enum PARCEL_STATUS_TYPES {
	CREATED = "100",
	ACCEPTED = "99",
	RECEIVED = "101",
	COMING = "102",
	WAITING = "103",
	FINISHED = "104",
	DELAYED = "105",
	LOST = "106",
	ABANDONED = "107", //Abandonado por el usuario, cobro por dia
}

export const orderedParcelStatuses: PARCEL_STATUS_TYPES[] = [
	PARCEL_STATUS_TYPES.CREATED,
	PARCEL_STATUS_TYPES.ACCEPTED,
	PARCEL_STATUS_TYPES.RECEIVED,

	PARCEL_STATUS_TYPES.COMING,

	PARCEL_STATUS_TYPES.WAITING,

	PARCEL_STATUS_TYPES.FINISHED,
	// PARCEL_STATUS_TYPES.DELAYED,
	// PARCEL_STATUS_TYPES.LOST,
	// PARCEL_STATUS_TYPES.ABANDONED,
];

export enum PARCEL_STATUS_COLOR {
	CREATED = "error",
	ACCEPTED = "info",
	RECEIVED = "warning",
	COMING = "info",
	WAITING = "success",
	FINISHED = "secondary",
	LOST = "error",
	ABANDONED = "info",
	DELAYED = "error",

	//"default" | "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined
}

export enum PARCEL_STATUS_NAME {
	CREATED = "Recibimos tu solicitud",
	ACCEPTED = "Esperamos tu paquete",
	RECEIVED = "Por enviar al bus",
	COMING = "En ruta",
	WAITING = "Por recojer paquete",
	FINISHED = "Entregado",
	LOST = "Perdido por la empresa",
	ABANDONED = "Abandonado",
	DELAYED = "Retrasado",
}

export const PARCEL_STATUS = {
	[PARCEL_STATUS_TYPES.CREATED]: {
		color: PARCEL_STATUS_COLOR.CREATED,
		label: PARCEL_STATUS_NAME.CREATED,
		icon: <AccessTimeIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.ACCEPTED]: {
		color: PARCEL_STATUS_COLOR.ACCEPTED,
		label: PARCEL_STATUS_NAME.ACCEPTED,
		icon: <CheckCircleOutlineIcon fontSize="large" />,
	},

	[PARCEL_STATUS_TYPES.RECEIVED]: {
		color: PARCEL_STATUS_COLOR.RECEIVED,
		label: PARCEL_STATUS_NAME.RECEIVED,
		icon: <DepartureBoardIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.COMING]: {
		color: PARCEL_STATUS_COLOR.COMING,
		label: PARCEL_STATUS_NAME.COMING,
		icon: <AirportShuttleIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.WAITING]: {
		color: PARCEL_STATUS_COLOR.WAITING,
		label: PARCEL_STATUS_NAME.WAITING,
		icon: <EmojiTransportationIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.FINISHED]: {
		color: PARCEL_STATUS_COLOR.FINISHED,
		label: PARCEL_STATUS_NAME.FINISHED,
		icon: <HandshakeIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.DELAYED]: {
		color: PARCEL_STATUS_COLOR.DELAYED,
		label: PARCEL_STATUS_NAME.DELAYED,
		icon: <HandshakeIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.LOST]: {
		color: PARCEL_STATUS_COLOR.LOST,
		label: PARCEL_STATUS_NAME.LOST,
		icon: <HandshakeIcon fontSize="large" />,
	},
	[PARCEL_STATUS_TYPES.ABANDONED]: {
		color: PARCEL_STATUS_COLOR.ABANDONED,
		label: PARCEL_STATUS_NAME.ABANDONED,
		icon: <HandshakeIcon fontSize="large" />,
	},
};

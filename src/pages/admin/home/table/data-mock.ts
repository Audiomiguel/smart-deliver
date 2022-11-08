import { PARCEL_STATUS_TYPES } from "src/constants";

export const DataTableParcel = [
	{
		key: "123dx",
		origin: "Miraflores",
		destiny: "Plaza Norte",
		price: "0.002 ETH",
		estimatedDate: "12 nov - 15 nov",
		status: PARCEL_STATUS_TYPES.CREATED,
	},
	{
		key: "123dgfdx",
		origin: "Villa El Salvador",
		destiny: "Miraflores",
		price: "0.0012 ETH",
		estimatedDate: "12 nov - 15 nov",
		status: PARCEL_STATUS_TYPES.ACCEPTED,
	},
	{
		key: "58cd",
		origin: "Plaza Norte",
		destiny: "Chorrillos",
		price: "0.004 ETH",
		estimatedDate: "28 oct - 29 oct",
		status: PARCEL_STATUS_TYPES.WAITING,
	},
	{
		key: "45gf",
		origin: "Miraflores",
		destiny: "Plaza Norte",
		price: "0.001 ETH",
		estimatedDate: "15 oct - 17 oct",
		status: PARCEL_STATUS_TYPES.FINISHED,
	},
];

export const ParcelModalHeaderInfo: {
	title: string;
	key: string;
	type: "text" | "chip";
}[] = [
	{ title: "Origen de la Oficina:", key: "origin", type: "text" },
	{ title: "Destino de la Oficina:", key: "destiny", type: "text" },
	{ title: "Precio:", key: "price", type: "text" },
	{ title: "Fecha estimada", key: "estimatedDate", type: "text" },
	// { title: "Estado actual", key: "status", type: "chip" },
	{ title: "Usuario que solicita", key: "userRequester", type: "text" },
	{ title: "Cod. de Usuario", key: "userRequesterCode", type: "text" },
	{ title: "Usuario que recibe", key: "userReceiver", type: "text" },
	{ title: "Cod. de Usuario", key: "userReceiverCode", type: "text" },
];

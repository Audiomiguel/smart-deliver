import { PARCEL_STATUS_TYPES } from "src/constants";

export const statusConditions = [
	{
		status: PARCEL_STATUS_TYPES.CREATED,
		description:
			"Este es el estado de un contrato de encomienda listo para ser aceptado",
		steps: [
			"Se requiere que un Administrador firme el Smart Contract para comprometerse a enviar la encomienda",
			"En caso no pueda aceptarse la encomienda, el Administrador debe rechazarla para proceder a su devolucion del dinero",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.ACCEPTED,
		description:
			"El contrato ha sido aceptado, ahora se encuentra a la espera de que el Usuario lleve el paquete a la encomienda",
		steps: [
			"Cuando el Administrador/Recepción revisa y actualice los datos de la encomienda reciba.",
			"La encomienda debe corresponder a la información de la solicitud. Caso contrario, se denegará la recepción de este",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.RECEIVED,
		description:
			"La encomienda ya se encuentra en las oficinas listas para ser enviadas al bus",
		steps: [
			"Se requiere que un Administrador asigne dentro la fecha de tolerancia esta encomienda a un Bus, donde se ingresara la hora que saldra este Bus",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.COMING,
		description: "La encomienda se encuentra en ruta dentro de un bus",
		steps: [
			"Se requiere que la oficina de Destino confirme la hora de llegada de la encomienda para que el Sistema asigne el estado de la encomienda a En Espera",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.WAITING,
		description:
			"La encomienda se encuentra en la oficina de destino en espera de recojo",
		steps: [
			"Se requiere que el Usuario asignado recoja la encomienda dentro de la fecha de tolerancia",
			"En caso esta encomienda no haya sido recogida durante la fecha de tolerancia, pasara a un estado de Abandono, el cual sera trasladada a un almacen de espera, el cual cobrara montos diarios por mantenimiento",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.FINISHED,
		description: "El contrato de la encomienda ha sido finalizado con exito",
		steps: [
			"El sistema envia una encuesta de puntuacion del servicio y se apertura el Canal de Reclamos Post-Venta para el Usuario",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.DELAYED,
		description: "La encomienda aun no puede ser entrega",
		steps: [
			"El sistema se encontrara a la espera de la confirmacion de la llegada de la encomienda a la Oficina de Destino",
			"El sistema otorgara bonificaciones al Usuario Solicitante con un calculo de precio de acuerdo a los dias de retraso",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.LOST,
		description: "La encomienda ha sido perdida por la Empresa",
		steps: [
			"El sistema realizara automaticamente un reembolso a la billetera del Usuario Solicitante con el valor de la Encomienda Acordada",
			"La confirmacion del pago se realizara en un plazo no mayor a 30 dias",
		],
	},
	{
		status: PARCEL_STATUS_TYPES.ABANDONED,
		description:
			"La encomienda se encuentra en estado de abandono en el Almacen de Espera",
		steps: [
			"El sistema emitira boletas de pago diarios al Usuario Solicitante cuando el plazo de tolerancia haya terminado",
			"Este estado pasara a Finalizado cuando el Usuario Recibidor reclame la encomienda",
		],
	},
];

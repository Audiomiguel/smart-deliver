export const ParcelModalHeaderInfo: {
  title: string;
  key: string;
  type: 'text' | 'chip';
}[] = [
  { title: 'Oficina de Recepción:', key: 'origin', type: 'text' },
  { title: 'Oficina de Recojo:', key: 'destiny', type: 'text' },
  { title: 'Precio:', key: 'price', type: 'text' },
  { title: 'Fecha estimada', key: 'estimatedDate', type: 'text' },
  // { title: "Estado actual", key: "status", type: "chip" },
  { title: 'Usuario Emisor', key: 'userRequester', type: 'text' },
  { title: 'Cod. de Usuario', key: 'userRequesterCode', type: 'text' },
  { title: 'Usuario Receptor', key: 'userReceiver', type: 'text' },
  { title: 'Cod. de Usuario', key: 'userReceiverCode', type: 'text' },
];

import { useEffect, useState } from 'react';
import {
  IParcelData,
  ParcelStatus,
} from 'src/pages/user/service/create-order.interface';
import { OrderService } from 'src/pages/user/service/create-order.service';
import { ChipTableAdminComponent } from './chipTable.component';

export const useDataParcelHooks = () => {
  const [parcelData, setParcelData] = useState<IParcelData[]>([]);

  async function fetchParcelData() {
    try {
      const response = await OrderService.getSmartOrders();
      setParcelData(response);
    } catch (err: any) {
      throw new Error(err?.response?.data?.message || err.message);
    }
  }

  useEffect(() => {
    fetchParcelData();
    return () => {};
  }, []);

  function changeStatusParcelDataById(status: ParcelStatus, id: string) {
    const index = parcelData.findIndex((parcel) => parcel.id === id);
    const newParcelData = [...parcelData];
    newParcelData[index].status = status;
    setParcelData(newParcelData);
  }

  function formatParcelData() {
    return parcelData.map((parcel) => {
      return {
        id: parcel.id,
        sender: parcel.sender,
        productName: parcel.productName,
        amount: `${parcel?.amount || '1'} INN`,

        recipient: `${parcel.recipient.name} - ${parcel.recipient.document}`,
        package: `${parcel.package.dimensions.width} x ${parcel.package.dimensions.height} x ${parcel.package.dimensions.length}cm`,
        sendingOffice: parcel?.sendingOffice || 'Oficina Miraflores',
        destinyOffice: parcel?.destinyOffice || 'Oficina Plaza Norte',
        createdAt: new Date(parcel.createdAt).toString(),
        status: (
          <ChipTableAdminComponent
            rowTravel={parcel}
            changeStatusParcelDataById={changeStatusParcelDataById}
          />
        ),
      };
    });
  }

  const headers = [
    'Codigo de Pedido',
    'Billetera del Cliente',
    'Nombre del Producto',
    'Monto',
    'Persona a recibir',
    'Detalle Paquete',
    'Oficina recepcion',
    'Oficina de envio',
    'Orden creada',
    'Status',
  ];

  return {
    parcelData: formatParcelData(),
    headers,
    changeStatusParcelDataById,
  };
};

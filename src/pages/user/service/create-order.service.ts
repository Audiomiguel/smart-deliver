import axios from 'axios';
import { ICreateOrder } from '../interface/create-order.interface';
import { getBearerHeader } from 'src/helper';
import { OrderTracking } from '../interface/OrderTracking';
import { IParcelData, ParcelStatus } from './create-order.interface';

const CREATE_ORDER_URL = `${process.env.REACT_APP_API_URL}/delivery-order`;

const createSmartOrder = async (order: OrderTracking) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/order-trackings`,
      order
    );

    return response;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

const getSmartOrders = async () => {
  try {
    const response = (
      await axios.get<IParcelData[]>(
        `${process.env.REACT_APP_API_URL}/order-trackings`
      )
    ).data;

    return response;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

const changeSmartOrderStatus = async (id: string, status: ParcelStatus) => {
  try {
    const response = (
      await axios.patch<any>(
        `${process.env.REACT_APP_API_URL}/order-trackings/${id}`,
        null,
        {
          params: {
            status,
          },
        }
      )
    ).data;

    return response as { message: string };
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

const createOrder = async (order: ICreateOrder) => {
  try {
    const response = await axios.post(
      `${CREATE_ORDER_URL}`,
      order,
      getBearerHeader()
    );

    return response.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

export const OrderService = {
  createOrder,
  createSmartOrder,
  getSmartOrders,
  changeSmartOrderStatus,
};

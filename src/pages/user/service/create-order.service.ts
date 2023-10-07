import axios from 'axios';
import { ICreateOrder } from '../interface/create-order.interface';
import { getBearerHeader } from 'src/helper';
import { OrderTracking } from '../interface/OrderTracking';

const CREATE_ORDER_URL = `${process.env.REACT_APP_API_URL}/delivery-order`;

const createSmartOrder = async (order: OrderTracking) => {
  try {
    const response = await axios.post(
      'https://tp2-backend-production.up.railway.app/order-trackings',
      order
    );

    return response;
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

export const CreateOrderService = {
  createOrder,
  createSmartOrder,
};

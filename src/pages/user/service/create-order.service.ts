import axios from 'axios';
import { ICreateOrder } from '../interface/create-order.interface';
import { getBearerHeader } from 'src/helper';

const CREATE_ORDER_URL = `${process.env.REACT_APP_API_URL}/delivery-order`;

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
};

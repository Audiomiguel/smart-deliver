import axios from 'axios';

const OFFICE_URL = `${process.env.REACT_APP_API_URL}/office`;

const getOffices = async () => {
  try {
    const response = await axios.get(`${OFFICE_URL}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const OfficeService = {
  getOffices,
};

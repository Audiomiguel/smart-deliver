import axios from 'axios';

const MONEY_URL = `${process.env.REACT_APP_API_URL}/money-exchange`;

async function getMoneyTodayChange() {
  try {
    return 1;
    const response = await axios.get<number>(`${MONEY_URL}/today-conversion`);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
}

async function getExchangeBySoles(value: number) {
  return 1;
  try {
    const response = await axios.get<number>(`${MONEY_URL}`, {
      params: {
        soles: value,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
}

export const MoneyService = {
  getMoneyTodayChange,
  getExchangeBySoles,
};

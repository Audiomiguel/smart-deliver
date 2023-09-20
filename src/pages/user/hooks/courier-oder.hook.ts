import { useLocation, useNavigate } from 'react-router-dom';
import { IFormData } from '../interface/create-order.interface';

export const useCourierOder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData: IFormData | undefined | null =
    location.state && location.state.formData;

  function addTwoDatesToActualDate() {
    const today = new Date();
    today.setDate(today.getDate() + 2);

    return today;
  }

  const getDateToday = (dateProp?: Date) => {
    return (dateProp || new Date()).toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return {
    formData,
    navigate,
    getDateToday,
    formatedToday: getDateToday(),
    twoDays: getDateToday(addTwoDatesToActualDate()),
  };
};

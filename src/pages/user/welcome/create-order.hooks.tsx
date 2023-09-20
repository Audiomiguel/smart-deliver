import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OfficeService } from 'src/service/office.service';
import { IFormData } from '../interface/create-order.interface';

export const useCreateDeliveryOrderHook = () => {
  const navigate = useNavigate();
  const [officeOptions, setOfficeOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [userInfo, setUserInfo] = useState({
    documentNumber: '',
    completeName: '',
  });

  const [formData, setFormData] = useState<IFormData>({
    receiverName: '',
    documentNumber: '',
    sendingOffice: '',
    destinationOffice: '',
    contentName: '',
    estimatedValue: '',
    height: '',
    width: '',
    length: '',
  });

  console.log('formData', formData);

  const [formErrors, setFormErrors] = useState({
    receiverName: false,
    documentNumber: false,
    sendingOffice: false,
    destinationOffice: false,
    contentName: false,
    estimatedValue: false,
    height: false,
    width: false,
    length: false,
  });

  const validateForm = () => {
    const errors = {};

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = true;
      } else {
        errors[key] = false;
      }
    }

    setFormErrors(errors);

    // Devuelve true si no hay errores
    return !Object.values(errors).some((error) => error);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchOffices = async () => {
      try {
        const response = await OfficeService.getOffices();

        setOfficeOptions(
          response.map((office: any) => ({
            value: office._id,
            label: office.name,
          }))
        );
      } catch (error) {
        console.error('Error al obtener la lista de oficinas:', error);
      }
    };

    fetchOffices();
  }, []);

  useEffect(() => {
    const localStorageUser = getUserInfoFromLocalStorage();

    setUserInfo(localStorageUser);

    return () => {};
  }, []);

  const getUserInfoFromLocalStorage = () => {
    try {
      console.log('CALLING ME');
      const userData = localStorage.getItem('loggedUser');

      if (!userData) {
        return {
          documentNumber: '',
          completeName: '',
        };
      }
      const user = JSON.parse(userData);
      const { completeName, documentNumber } = user?.person;

      return {
        documentNumber,
        completeName,
      };
    } catch (error) {
      console.error(
        'Error al obtener información del usuario desde localStorage:',
        error
      );
      return {
        documentNumber: '',
        completeName: '',
      };
    }
  };

  async function handleSubmitForm() {
    if (!validateForm()) {
      console.log('Form data', formData);
      return console.log('Formulario inválido', formErrors);
    }

    const newForm: IFormData = {
      ...formData,
      sendingOffice:
        officeOptions.find((office) => office.value === formData.sendingOffice)
          ?.label || '',
      destinationOffice:
        officeOptions.find(
          (office) => office.value === formData.destinationOffice
        )?.label || '',
    };

    navigate('/courier-chain/user/payment', {
      state: {
        formData: newForm,
      },
    });
  }
  async function getCommonProps(inputName: keyof IFormData) {
    return {
      name: inputName,
      error: formErrors[inputName],
      value: formData[inputName],
    };
  }

  return {
    userInfo,
    officeOptions,
    formErrors,
    formData,
    handleInputChange,
    validateForm,
    handleSubmitForm,
    getCommonProps,
  };
};

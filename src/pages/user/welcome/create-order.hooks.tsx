import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OfficeService } from 'src/service/office.service';
import { IFormData } from '../interface/create-order.interface';
import { v4 } from 'uuid';

import { useCreateTrackingSmartHooks } from './create-tracking-smart.hooks';
import { useCreateForm } from 'src/context/create-form.contexts';

export const useCreateDeliveryOrderHook = () => {
  const { formBody, setFormBody } = useCreateForm();
  const { sender, isSuccess, allowance, shippingFee, write, isLoading } =
    useCreateTrackingSmartHooks();
  const [loading, setLoading] = useState(false);

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
    contentName: 'Product Name',
    estimatedValue: '100',
    height: '20',
    width: '20',
    length: '20',
  });

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

    setFormErrors({
      receiverName: true,
      documentNumber: true,
      sendingOffice: true,
      destinationOffice: true,
      contentName: true,
      estimatedValue: true,
      height: true,
      width: true,
      length: true,
    });

    // Devuelve true si no hay errores
    return !Object.values(errors).some((error) => error);
  };

  const handleInputChange = (e: any) => {
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

  const handleSubmitPromise = async () => {
    debugger;

    const {
      receiverName,
      documentNumber,
      sendingOffice,
      destinationOffice,
      contentName,
      estimatedValue,
      height,
      width,
      length,
    } = formData;
    debugger;
    try {
      const request = {
        id: v4(),
        amount: estimatedValue,
        productName: contentName,
        recipient: {
          documentType: 'DNI',
          document: documentNumber,
          name: receiverName,
          address: {
            street: 'Calle 12, Chorrillos',
            city: 'Lima',
            state: 'Lima-Estado',
          },
        },
        package: {
          weight: 99,
          dimensions: {
            width: +width,
            height: +height,
            length: +length,
          },
        },
        sender,
      };
      // const data = await CreateOrderService.createSmartOrder(request);
      // router.push(`/order-tracking/${data.id}`);
      setFormBody(formData);

      navigate('/courier-chain/user/payment');
    } catch (e) {
      alert('Something went wrong, please try again later');
    }
  };

  async function handleSubmitForm() {
    setLoading(true);
    if (isSuccess) {
      debugger;
      return;
    }
    if (allowance < shippingFee) write?.();

    try {
      // const data = await CreateOrderService.createOrder({
      //   sender,
      //   receiverPerson: {
      //     completeName: receiverName,
      //     documentNumber: documentNumber,
      //   },
      //   cost: +estimatedValue,
      //   destinationOfficeName: 'Villa Turing' || destinationOffice,
      //   sendingOfficeName: 'Plaza Lima Sur' || sendingOffice,
      //   parcel: {
      //     contents: [{ contentName, estimatedValue: +estimatedValue }],
      //     height: +height,
      //     length: +length,
      //     width: +width,
      //     weight: +height, //TODO:
      //   },
      //   id: v4(),
      // });
      return handleSubmitPromise().finally(() => {
        debugger;
        setLoading(false);
      });
    } catch (err: any) {
      console.log('ERROR', err);
    } finally {
      setLoading(false);
    }
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
    isLoading,
    loading,
  };
};

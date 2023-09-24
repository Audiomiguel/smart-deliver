import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OfficeService } from 'src/service/office.service';
import { IFormData } from '../interface/create-order.interface';
import { uuidV4 } from 'web3-utils';
import { TokenContract } from 'src/smart-contracts/token.contract';
import { TrackingContract } from 'src/smart-contracts/tracking.contract';
import { utils } from 'web3';
import { approveTokens } from './services';

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

  async function handleSubmitForm(account: string) {
    const orderId = uuidV4();
    console.log('orderId', orderId);
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

    TrackingContract.setProvider(window.ethereum);
    TokenContract.setProvider(window.ethereum);
  
    const createTracking = TrackingContract.methods.createTrack(
      orderId,
      utils.toWei(Number(estimatedValue), 'mwei'),
      contentName,
      width,
      height,
      length,
      1,
    );

    await createTracking.send({
      data: createTracking.encodeABI(),
      from: account,
      gas: '3000000',
      gasPrice: utils.toWei('1', 'gwei'),
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

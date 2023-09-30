import MoneyIcon from '@mui/icons-material/Money';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCourierOder } from '../hooks/courier-oder.hook';
import { useState } from 'react';
import LoadingModal from 'src/components/modal/loading-modal';
import { CreateOrderService } from '../service/create-order.service';
import { useCreateForm } from 'src/context/create-form.contexts';

export const ButtonPaymentDetailComponent = () => {
  const { formBody } = useCreateForm();

  const { navigate } = useCourierOder();
  const [isOpen, setIsOpen] = useState(false);

  async function handlePayment() {
    if (formBody && Object.keys(formBody).length === 0)
      return alert(
        'No hay informacion de la orden. Volver a realizar la encomienda.'
      );
    setIsOpen(true);

    try {
      const request = {
        cost: 40 * +conversionInfo.referenceValue,
        destinationOfficeName: formData.destinationOffice,
        parcel: {
          contents: [
            {
              contentName: formData.contentName,
              estimatedValue: Number(formData.estimatedValue),
            },
          ],
          height: Number(formData.height),
          length: Number(formData.length),
          width: Number(formData.width),
        },
        receiverPerson: {
          completeName: formData.receiverName,
          documentNumber: formData.documentNumber,
        },
        sendingOfficeName: formData.sendingOffice,
      };

      const response = await CreateOrderService.createOrder(request);

      navigate('/courier-chain/user/receipt');
    } catch (err) {
    } finally {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <Button
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onClick={handlePayment}
        disabled={isOpen}
        startIcon={<MoneyIcon />}
        variant="contained"
        size="large"
      >
        PAGAR 8 INNTEST
      </Button>
      <LoadingModal open={isOpen} />
    </div>
  );
};

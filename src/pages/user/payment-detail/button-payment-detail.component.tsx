import MoneyIcon from '@mui/icons-material/Money';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCourierOder } from '../hooks/courier-oder.hook';
import { useState } from 'react';
import LoadingModal from 'src/components/modal/loading-modal';
import { CreateOrderService } from '../service/create-order.service';

interface Props {
  conversionInfo: {
    solesConversion: string;
    referenceValue: string;
  };
}
export const ButtonPaymentDetailComponent = ({ conversionInfo }: Props) => {
  const { navigate, formData } = useCourierOder();
  const [isOpen, setIsOpen] = useState(false);

  async function handlePayment() {
    if (!formData)
      return alert(
        'No hay informacion de la orden. Volver a realizar la encomienda.'
      );
    setIsOpen(true);

    try {
      const response = await CreateOrderService.createOrder({
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
      });

      navigate('/courier-chain/user/receipt');
    } catch (err) {
      alert(
        `Ha ocurrido un error con la generacion de la orden. Vuelva a intentar ${
          err?.message || 'Error'
        }`
      );
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
        PAGAR
      </Button>
      <LoadingModal open={isOpen} />
    </div>
  );
};

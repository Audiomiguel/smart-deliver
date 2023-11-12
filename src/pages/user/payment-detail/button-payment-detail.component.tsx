import MoneyIcon from '@mui/icons-material/Money';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCourierOder } from '../hooks/courier-oder.hook';
import { useState } from 'react';
import LoadingModal from 'src/components/modal/loading-modal';
import { OrderService } from '../service/create-order.service';
import { useCreateForm } from 'src/context/create-form.contexts';
import { useCreateTrackingSmartHooks } from '../welcome/create-tracking-smart.hooks';
import { v4 } from 'uuid';

export const ButtonPaymentDetailComponent = () => {
  const { navigate } = useCourierOder();
  const { sender, isSuccess, allowance, shippingFee, write, isLoading } =
    useCreateTrackingSmartHooks();
  const [loading, setLoading] = useState(false);

  const { formBody, setFormBody } = useCreateForm();

  async function handleSubmitPromise() {
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
    } = formBody;

    try {
      const request: any = {
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
      const data = await OrderService.createSmartOrder(request);

      setFormBody({
        ...formBody,
        id: request?.id || '',
      });
      navigate('/smart-deliver/user/receipt');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function onClick() {
    if (formBody && Object.keys(formBody).length === 0)
      return alert(
        'No hay informacion de la orden. Volver a realizar la encomienda.'
      );
    setLoading(true);
    if (isSuccess) {
      //debugger;
      return;
    }
    if (allowance < shippingFee) write?.();

    try {
      return await handleSubmitPromise().finally(() => {
        //debugger;
        setLoading(false);
      });
    } catch (err: any) {
      console.log('ERROR', err);
    } finally {
      setLoading(false);
    }
  }

  if (isSuccess) {
    handleSubmitPromise();
    navigate('/smart-deliver/user/receipt');
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
        onClick={onClick}
        disabled={loading || isLoading}
        startIcon={<MoneyIcon />}
        variant="contained"
        size="large"
      >
        AUTORIZAR PAGO (8 soles)
      </Button>
      <LoadingModal open={isLoading || loading} />
    </div>
  );
};

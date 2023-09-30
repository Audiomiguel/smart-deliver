import { Container, Paper, Grid, Typography } from '@mui/material';
import DetailContractImage from 'src/assets/image/detail-contract.png';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import PaymentIcon from '@mui/icons-material/Payment';
import { Box } from '@mui/system';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';

import { useCourierOder } from '../hooks/courier-oder.hook';
import { useEffect, useState } from 'react';
import { MoneyService } from 'src/service/courier-money.service';
import { ButtonPaymentDetailComponent } from './button-payment-detail.component';
import { useCreateForm } from 'src/context/create-form.contexts';

export const PaymentDetailPage = () => {
  const { formData, twoDays, formatedToday } = useCourierOder();
  const { formBody } = useCreateForm();

  debugger;
  console.log('Form body', formBody);

  const [conversionInfo, setConversionInfo] = useState({
    solesConversion: '0',
    referenceValue: '0',
  });

  async function initializateConversionInfo() {
    const CRCObjectValue = await MoneyService.getExchangeBySoles(40);
    const CRCValue = await MoneyService.getMoneyTodayChange();

    setConversionInfo({
      solesConversion: `${CRCObjectValue} CRC`,
      referenceValue: `${CRCValue}`,
    });
  }

  useEffect(() => {
    initializateConversionInfo();

    return () => {};
  }, []);

  const tablePaymentInformation = [
    {
      icon: <AccessTimeFilledIcon />,
      title: 'Fecha de recepción:',
      description: formatedToday,
    },
    {
      icon: <EmojiTransportationIcon />,
      title: 'Oficina de recepción:',
      description: 'Plaza Lima Sur' || formData?.destinationOffice,
    },
    {
      icon: <AccessTimeFilledIcon />,
      title: 'Fecha de recojo:',
      description: twoDays,
    },
    {
      icon: <BusinessIcon />,
      title: 'Oficina de  recojo:',
      description: 'Villa El Salvador' || formData?.sendingOffice,
    },
    {
      icon: <PersonIcon />,
      title: 'Persona que recoje:',
      description:
        `${formBody?.receiverName}` ||
        `${formData?.senderName} -  N° ${formData?.documentNumber}`,
      // description: `${formData?.receiverName} -  N° ${formData?.documentNumber}`,
    },
    {
      icon: <Inventory2Icon />,
      title: 'Nombre del objeto:',
      description: formBody?.contentName || 'N.A.',
    },
    {
      icon: <PaidIcon />,
      title: 'Valor estimado del objeto:',
      description: `${formBody?.estimatedValue || 0} INN`,
    },
  ];

  return (
    <Container sx={{ mt: 2 }}>
      <Paper sx={{ mb: 2, pl: 1, pr: 1, pt: 1, pb: 1 }} elevation={2}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <Grid item xs={6} sx={{ width: '100%' }}>
            <img
              loading="lazy"
              src={DetailContractImage}
              alt="courier"
              width="60%"
              height="60%"
              style={{ maxWidth: '150px' }}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography fontWeight="400" variant="h5">
              Detalle de Pre-venta
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box component="section" sx={{ mt: 2, mb: 3 }}>
        <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
          Corrobore la información brindada:
        </Typography>
        {tablePaymentInformation.map((t, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', pl: 1, pr: 1, pb: 2 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                columnGap: 1,
              }}
            >
              {t.icon}
              <Typography>{t.title}</Typography>
            </Box>
            <div>
              <Typography>{t.description}</Typography>
            </div>
          </Box>
        ))}
      </Box>

      <Box component="section" sx={{ mt: 2, mb: 1 }}>
        <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
          Información de pago:
        </Typography>

        <Paper sx={{ paddingInline: 2, pt: 2, pb: 2 }}>
          <Box
            sx={{ display: 'flex' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                columnGap: 1,
              }}
            >
              <PaymentIcon />
              <Typography>Monto a pagar</Typography>
            </Box>
            <div>
              <Typography>8 INN</Typography>
            </div>
          </Box>
        </Paper>
      </Box>

      <ButtonPaymentDetailComponent />
    </Container>
  );
};

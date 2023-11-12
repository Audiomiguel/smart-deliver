import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import DetailContractImage from 'src/assets/image/detail-contract.png';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';

import InventoryIcon from '@mui/icons-material/Inventory';
import { orderedParcelStatuses, PARCEL_STATUS } from 'src/constants';
import { useCreateForm } from 'src/context/create-form.contexts';
import { useNavigate } from 'react-router-dom';

export const UserReceiptPage = () => {
  const { formBody } = useCreateForm();
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 2 }}>
      <Paper sx={{ mb: 2, p: 1 }} elevation={3}>
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
              Gracias por confiar en CourierChain
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box component="section" sx={{ mt: 2, mb: 3 }}>
        {formBody?.id && (
          <Typography variant="h6" fontWeight="400" sx={{ mb: 3 }}>
            Numero de pedido: <b>{formBody?.id || '00x'}</b>
          </Typography>
        )}

        <Typography variant="h5" fontWeight="600" sx={{ mb: 3 }}>
          Pasos de tu encomienda
        </Typography>

        <Grid
          container
          columnGap={2}
          rowGap={3}
          justifyContent="space-around"
          sx={{ mb: 3 }}
        >
          {orderedParcelStatuses.map((type, index) => (
            <Paper
              sx={{ p: 1, width: '120px' }}
              elevation={3}
              style={
                index === 0
                  ? {
                      border: '2px solid black',
                    }
                  : undefined
              }
            >
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
                rowGap={1}
                textAlign="center"
                sx={{ height: '100%' }}
                key={`step-${index}`}
              >
                {PARCEL_STATUS[type].icon}

                <Typography variant="h6">Paso {index + 1}</Typography>

                <Typography>{PARCEL_STATUS[type].label}</Typography>
              </Grid>
            </Paper>
          ))}
        </Grid>

        <Typography sx={{ mb: 2 }}>
          En caso se requiera un reembolso o exista una perdida del paquete,
          contactese con el area administrativa para su resolución del caso.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
            Resumen
          </Typography>

          <Box display="flex" columnGap={1} sx={{ mb: 1 }}>
            <LocalShippingIcon />
            <Typography>Oficina Miraflores</Typography>
          </Box>
          <Box display="flex" columnGap={1}>
            <EmojiTransportationIcon />
            <Typography>Oficina Plaza Norte</Typography>
          </Box>
        </Box>

        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            columnGap: 3,
            p: 2,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Typography>x1</Typography>
          <Box display="flex" columnGap={1} sx={{ width: '100%' }}>
            <InventoryIcon fontSize="large" />
            <Box>
              <Typography fontWeight="600">
                {formBody?.receiverName || 'Paquete'}
              </Typography>
              <Typography>
                Caja de alto: {`${formBody?.height || 0} cm`}, ancho:
                {`${formBody?.width || 0} cm`} , largo:
                {`${formBody?.length || 0} cm`}
              </Typography>
            </Box>
          </Box>
          <Box textAlign="right" minWidth="300px">
            <Typography>{`Valor estimado: ${
              formBody?.estimatedValue || 0
            } soles`}</Typography>
            <Typography variant="subtitle1">{`Costo de envio: 8 soles`}</Typography>
          </Box>
        </Paper>
      </Box>

      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={(e) => {
          e.preventDefault();
          navigate('/smart-deliver');
        }}
      >
        Volver a hacer un envio{' '}
      </Button>
    </Container>
  );
};

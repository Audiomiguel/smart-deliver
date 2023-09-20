import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import CourierImage from 'src/assets/image/banner-parcel-register.png';
import { useCreateDeliveryOrderHook } from './create-order.hooks';
export const WelcomePage = () => {
  const steps = [
    'Datos personales',
    'Datos del paquete',
    'Datos del destinatario',
    'Metodos de pago',
  ];

  const {
    userInfo,
    officeOptions,
    formData,
    formErrors,
    handleInputChange,
    handleSubmitForm,
    getCommonProps,
  } = useCreateDeliveryOrderHook();

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ mb: 2 }}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
        >
          <Grid item xs={6} sx={{ width: '100%' }}>
            <img
              loading="lazy"
              src={CourierImage}
              alt="courier"
              width="90%"
              height="90%"
            />
          </Grid>

          <Grid item xs={6}>
            <Typography fontWeight="400" variant="h5" sx={{}}>
              Registra tu encomienda
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box component="form" onSubmit={() => {}}>
        <Typography>Datos personales del Emisor:</Typography>

        <Grid container rowSpacing={0}>
          <Grid item xs={12}>
            <TextField
              name="name1"
              margin="normal"
              type="text"
              fullWidth
              label="Tipo de documento"
              disabled
              value={userInfo.completeName}
              // onChange={updateLoginData}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name2"
              margin="normal"
              type="text"
              fullWidth
              label="Numero de Documento"
              disabled
              value={userInfo.documentNumber}
              // onChange={updateLoginData}
            />
          </Grid>
        </Grid>

        <Typography sx={{ mt: 2, mb: 2 }}>
          Datos de origen y destino:
        </Typography>

        <Grid container>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Oficina de Origen</InputLabel>
            <Select
              name="sendingOffice"
              value={formData.sendingOffice}
              error={formErrors.sendingOffice}
              onChange={(e) => {
                handleInputChange(e);
              }}
            >
              {officeOptions
                .filter((office) => office.value !== formData.destinationOffice) // Filtra las opciones que no sean la oficina seleccionada en el primer Select
                .map((office) => (
                  <MenuItem key={office.value} value={office.value}>
                    {office.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Oficina de Destino</InputLabel>
            <Select
              disabled={!formData.sendingOffice}
              name="destinationOffice"
              value={formData.destinationOffice}
              error={formErrors.sendingOffice}
              onChange={(e) => handleInputChange(e)}
            >
              {officeOptions
                .filter((office) => office.value !== formData.sendingOffice) // Filtra las opciones que no sean la oficina seleccionada en el primer Select
                .map((office) => (
                  <MenuItem key={office.value} value={office.value}>
                    {office.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>

        <Typography sx={{ mt: 2 }}>Datos del paquete:</Typography>

        <Grid container>
          <Grid item xs={12}>
            <TextField
              name="contentName"
              margin="normal"
              type="text"
              fullWidth
              label="Nombre del objeto"
              required
              value={formData.contentName}
              error={formErrors.contentName}
              onChange={(e) => handleInputChange(e)}
              helperText={formErrors.contentName && 'Este campo es requerido'}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="estimatedValue"
              margin="normal"
              type="number"
              fullWidth
              value={formData.estimatedValue}
              error={formErrors.estimatedValue}
              helperText={
                formErrors.estimatedValue && 'Este campo es requerido'
              }
              onChange={(e) => handleInputChange(e)}
              label="Valor aproximado (S/.)"
              required
              // onChange={updateLoginData}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Ancho (cm)"
              variant="outlined"
              name="width"
              type="number"
              value={formData.width}
              error={formErrors.width}
              helperText={formErrors.width && 'Este campo es requerido'}
              onChange={(e) => handleInputChange(e)}

              // Agrega las propiedades y eventos necesarios según tus necesidades
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Largo (cm)"
              variant="outlined"
              name="length"
              type="number"
              value={formData.length}
              error={formErrors.length}
              helperText={formErrors.length && 'Este campo es requerido'}
              onChange={(e) => handleInputChange(e)}

              // Agrega las propiedades y eventos necesarios según tus necesidades
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Alto (cm)"
              variant="outlined"
              name="height"
              type="number"
              value={formData.height}
              error={formErrors.height}
              helperText={formErrors.height && 'Este campo es requerido'}
              onChange={(e) => handleInputChange(e)}

              // Agrega las propiedades y eventos necesarios según tus necesidades
            />
          </Grid>
        </Grid>

        <Typography sx={{ mt: 2 }}>Datos del destinatario:</Typography>

        <Grid container>
          <Grid item xs={12}>
            <TextField
              name="receiverName"
              margin="normal"
              type="text"
              fullWidth
              label="Nombre Completo"
              required
              onChange={(e) => handleInputChange(e)}
              value={formData.receiverName}
              error={formErrors.receiverName}
              helperText={formErrors.receiverName && 'Este campo es requerido'}
              // onChange={updateLoginData}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="documentNumber"
              margin="normal"
              type="number"
              fullWidth
              label="N° de Identidad"
              required
              onChange={(e) => {
                if (e.target.value.length > 8) return;
                handleInputChange(e);
              }}
              value={formData.documentNumber}
              error={formErrors.documentNumber}
              helperText={
                formErrors.documentNumber && 'Este campo es requerido'
              }
              inputProps={{
                maxLength: 8,
              }}
              // onChange={updateLoginData}
            />
          </Grid>
        </Grid>

        <Box
          display="flex"
          justifyContent="end"
          alignItems="center"
          style={{
            height: '70px',
          }}
        >
          <Button
            size="large"
            fullWidth
            variant="contained"
            onClick={() => handleSubmitForm()}
          >
            PAGAR
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

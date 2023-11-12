import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { LoginService } from 'src/pages/login/login.service';
import { useNavigate } from 'react-router-dom';
import { useCreateForm } from 'src/context/create-form.contexts';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const { setLoggedUser } = useCreateForm();
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    documentNumber: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [documentError, setDocumentError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'confirmPassword') {
      // Verificar coincidencia de contraseña
      if (formData.password !== value) {
        setPasswordError('Las contraseñas no coinciden');
      } else {
        setPasswordError('');
      }
    } else if (name === 'documentNumber') {
      // Verificar longitud y si es un número
      if (!/^[0-9]{8}$/.test(value)) {
        setDocumentError(
          'El número de documento debe contener 8 dígitos numéricos'
        );
      } else {
        setDocumentError('');
      }
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // await LoginService.register({
      //   password: formData.password,
      //   username: formData.username,
      //   person: {
      //     documentNumber: formData.documentNumber,
      //     completeName: formData.fullName,
      //   },
      //   userType: 'client',
      // });

      setLoggedUser({
        username: formData.username,
      });
      return navigate('/smart-deliver/admin');
    } catch (error: any) {
      setRegisterError(error?.message || 'Error, Volver a intentar');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '90vh',
        }}
      >
        <Grid item>
          <Paper
            sx={{
              padding: '1.2em',
              borderRadius: '0.5em',
            }}
          >
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Regístrate
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Nombre de Usuario"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Contraseña"
                sx={{ mt: 1, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />
              <TextField
                name="confirmPassword"
                margin="normal"
                type="password"
                fullWidth
                label="Repetir Contraseña"
                sx={{ mt: 1, mb: 1.5 }}
                required
                error={passwordError !== ''}
                helperText={passwordError}
                onChange={handleInputChange}
              />
              <TextField
                name="fullName"
                margin="normal"
                type="text"
                fullWidth
                label="Nombre Completo"
                sx={{ mt: 1, mb: 1.5 }}
                required
                onChange={handleInputChange}
              />
              <TextField
                name="documentNumber"
                margin="normal"
                type="text"
                fullWidth
                label="Número de Documento"
                sx={{ mt: 1, mb: 1.5 }}
                required
                error={documentError !== ''}
                helperText={documentError}
                onChange={handleInputChange}
              />

              <Button
                fullWidth
                type="submit"
                size="large"
                variant="contained"
                disabled={isLoading}
                sx={{ mt: 1.5, mb: 1 }}
              >
                REGISTRARSE
              </Button>
            </form>
            {registerError && (
              <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                {registerError}
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

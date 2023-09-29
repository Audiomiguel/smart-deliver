import {
  Grid,
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginService } from './login.service';

export const LoginPage = () => {
  const [isLoadin, setIsLoadin] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const updateLoginData = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoadin(true);

    try {
      const { access_token, user } = await LoginService.login(
        loginData.username,
        loginData.password
      );

      if (user.userType === 'admin') {
        return navigate('/courier-chain/admin');
      }

      return navigate('/courier-chain/user');
    } catch (error) {
      // Maneja el error de inicio de sesión aquí
      setLoginError(error.message);
    } finally {
      setIsLoadin(false);
    }
  };

  function handleRegister() {
    return navigate('/courier-chain/sign-up');
  }

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
              Inicia Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="text"
                fullWidth
                label="Nombre de Usuario"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={updateLoginData}
              />
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Contraseña"
                sx={{ mt: 1, mb: 1.5 }}
                required
                onChange={updateLoginData}
              />

              <Button
                fullWidth
                type="submit"
                size="large"
                variant="contained"
                disabled={isLoadin}
                sx={{ mt: 1.5, mb: 1 }}
                onClick={() => {}}
              >
                {isLoadin ? 'Iniciando sesión...' : 'INGRESAR'}
              </Button>
              <Button
                fullWidth
                type="submit"
                size="large"
                variant="outlined"
                sx={{ mt: 1.5, mb: 3 }}
                onClick={handleRegister}
              >
                REGISTRARSE
              </Button>
            </Box>
            {loginError && (
              <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                {loginError}
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

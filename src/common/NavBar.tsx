import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>COURIER CHAIN</Typography>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={() => navigate('login')}>
                    Ingresar
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => navigate('sign-up')}
                  >
                    Registrarse
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

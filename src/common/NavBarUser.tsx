import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavBarUser = () => {
  const navigate = useNavigate();
  return (
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
              <Button onClick={() => navigate('user')}>COURIER CHAIN</Button>
            </Grid>
            <Grid item>
              <Avatar
                sx={{ bgcolor: 'orange' }}
                alt="Miguel Bustillos"
                src="/broken-image.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

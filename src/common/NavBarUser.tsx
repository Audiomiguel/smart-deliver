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
              <Button>User</Button>
            </Grid>
            <Grid item>
              <Avatar
                onClick={() => navigate('/smart-deliver/user')}
                sx={{ bgcolor: 'orange', cursor: 'pointer' }}
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

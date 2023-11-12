import {
  AppBar,
  Box,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const NavBar = () => {
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
                <Typography>SMARTDELIVER</Typography>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <Button
                    component={Link}
                    to="/smart-deliver/login"
                    variant="outlined"
                    color="inherit"
                  >
                    Login
                  </Button>
                  {/* <MetaMaskButton /> */}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

import { useSDK } from '@metamask/sdk-react-ui';
import { Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from 'src/components';
import { useNotification } from 'src/context/notification.context';
import SmartContractImage from 'src/assets/image/smart-contracts.png';

export const HomePage = () => {
  const navigate = useNavigate();
  const { getError } = useNotification();

  const { sdk, provider } = useSDK();

  const connect = async () => {
    try {
      sdk && await sdk.connect();

      provider && await provider.request({
        method: 'wallet_watchAsset',
      });

    } catch (error) {
      const err = error as Error;

      getError(`Failed to connect: ` + err.message);
    }
  };

  const handleClick = () => {
    connect().then(() => navigate('/courier-chain/user'));
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title={'COURIER CHAIN'}
        description={
          'Ingresa con tu usuario y envia tus Smart Encomiendas desde un click de distancia!'
        }
        image={
          <img
            src={SmartContractImage}
            alt="Smart Contract"
            width="50%"
            height="50%"
          />
        }
      />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          mt: 2,
        }}
      >
        <Grid item>
          <Button variant="contained" size="large" onClick={handleClick}>
            Empieza ya
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

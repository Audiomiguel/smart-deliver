import { Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HeaderComponent } from 'src/components';
import { useNotification } from 'src/context/notification.context';
import SmartContractImage from 'src/assets/image/smart-contracts.png';
import { useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
// import { useConnect } from 'wagmi';
// import { InjectedConnector } from 'wagmi/connectors/injected';

export const HomePage = () => {
  const navigate = useNavigate();

  const { getError } = useNotification();
  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const handleClick = async () => {
    try {
      // await connectAsync();
      await connectAsync();

      navigate('/courier-chain/user');
    } catch (error: any) {
      if (error?.name === 'ConnectorAlreadyConnectedError')
        return navigate('/courier-chain/user');

      alert('Verifique que tenga metamask instalado');
    }
    // connect().then(() => navigate('/courier-chain/user'));
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

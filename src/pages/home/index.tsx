import { useSDK } from '@metamask/sdk-react-ui';
import { Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import SmartContractImage from 'src/assets/image/smart-contracts.png';
import { HeaderComponent } from 'src/components';
import { useNotification } from 'src/context/notification.context';
import { useWeb3Commons } from 'src/context/web3.context';
import TokenContract from 'src/smart-contracts/token.contract';
import TrackingContract from 'src/smart-contracts/tracking.contract';
import { Web3, Web3EthInterface } from 'web3';

export const HomePage = () => {
  const [account, setAccount] = useState();
  const { getError } = useNotification();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();

      if (accounts && Array.isArray(accounts) && accounts.length > 0) {
        setAccount(accounts[0]);
      }
      console.log('token add', process.env.TOKEN_ADDRESS);
      provider?.request?.({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0xa145F942ED67629326b795C797940A04B5499F4B', // The address of the token.
            symbol: 'INN', // A ticker symbol or shorthand, up to 5 characters.
            decimals: 6, // The number of decimals in the token.
          },
        },
      });
    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  };

  const handleClick = () => {
    console.log('sdk', sdk);
    connect().catch(console.error);
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
      <code>
        {account}
      </code>
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

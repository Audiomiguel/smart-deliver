import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './routers/router';

function App() {
  return (
    // <WagmiConfig config={wagmiConfig}>
    <NotificationProvider>
      <AppRouter />
    </NotificationProvider>
    // </WagmiConfig>
  );
}

export default App;

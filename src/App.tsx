import { CreateFormProvider } from './context/create-form.contexts';
import { NotificationProvider } from './context/notification.context';
import { AppRouter } from './routers/router';

function App() {
  return (
    // <WagmiConfig config={wagmiConfig}>
    <CreateFormProvider>
      <NotificationProvider>
        <AppRouter />
      </NotificationProvider>
    </CreateFormProvider>
    // </WagmiConfig>
  );
}

export default App;

import { createContext, useContext, useState } from 'react';

interface IInitialValues {
  privateKey: any;
  setPrivateKey: React.Dispatch<React.SetStateAction<any>>;
}

const initialValues: IInitialValues = {
  privateKey: {},
  setPrivateKey: () => {},
};

export const Web3CommonsProvider = ({ children }: any) => {
  const [privateKey, setPrivateKey] = useState<any>({});

  const valueContext: IInitialValues = {
    privateKey,
    setPrivateKey,
  };

  return (
    <Web3CommonsContext.Provider value={valueContext}>
      {children}
    </Web3CommonsContext.Provider>
  );
};
const Web3CommonsContext = createContext(initialValues);

export const useWeb3Commons = () => {
  const context = useContext(Web3CommonsContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

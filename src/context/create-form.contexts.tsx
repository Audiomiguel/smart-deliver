import { createContext, useContext, useState } from 'react';
import { ILoggedUser } from 'src/interfaces';
import { IFormData } from 'src/pages/user/interface/create-order.interface';

interface IInitialValues {
  formBody: IFormData;
  setFormBody: React.Dispatch<React.SetStateAction<any>>;
  loggedUser: ILoggedUser;
  setLoggedUser: React.Dispatch<React.SetStateAction<ILoggedUser>>;
}

const initialValues: IInitialValues = {
  formBody: {},
  setFormBody: () => {},
  loggedUser: {
    username: '',
  },
  setLoggedUser: () => {},
};

export const CreateFormProvider = ({ children }: any) => {
  const [formBody, setFormBody] = useState<any>({});
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>({
    username: '',
  });

  const valueContext: IInitialValues = {
    formBody,
    setFormBody,
    loggedUser,
    setLoggedUser,
  };

  return (
    <CreateFormContext.Provider value={valueContext}>
      {children}
    </CreateFormContext.Provider>
  );
};
const CreateFormContext = createContext(initialValues);

export const useCreateForm = () => {
  const context = useContext(CreateFormContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

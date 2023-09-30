import { createContext, useContext, useState } from 'react';
import { IFormData } from 'src/pages/user/interface/create-order.interface';

interface IInitialValues {
  formBody: IFormData;
  setFormBody: React.Dispatch<React.SetStateAction<any>>;
}

const initialValues: IInitialValues = {
  formBody: {},
  setFormBody: () => {},
};

export const CreateFormProvider = ({ children }: any) => {
  const [formBody, setFormBody] = useState<any>({});

  const valueContext: IInitialValues = {
    formBody,
    setFormBody,
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

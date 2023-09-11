export interface IRegister {
  username: string;
  password: string;
  person: {
    completeName: string;
    documentNumber: string;
  };
  userType: 'client';
}

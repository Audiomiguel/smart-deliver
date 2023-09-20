export interface IFormData {
  receiverName: string;
  documentNumber: string;
  sendingOffice: string;
  destinationOffice: string;
  contentName: string;
  estimatedValue: string;
  height: string;
  width: string;
  length: string;
}

export interface ICreateOrder {
  receiverPerson: {
    completeName: string;
    documentNumber: string;
  };
  sendingOfficeName: string;
  destinationOfficeName: string;
  parcel: {
    width: number;
    length: number;
    height: number;
    contents: [
      {
        contentName: string;
        estimatedValue: number;
      }
    ];
  };
  cost: number;
}

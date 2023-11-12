import { orderedParcelStatuses, PARCEL_STATUS_TYPES } from 'src/constants';

export const getNextParcelStatus = (actualStatus: PARCEL_STATUS_TYPES) => {
  for (let i = 0; i < orderedParcelStatuses.length; i++) {
    if (orderedParcelStatuses[i] === actualStatus) {
      if (i + 1 === orderedParcelStatuses.length) {
        return actualStatus;
      } else return orderedParcelStatuses[i + 1];
    }
  }
};

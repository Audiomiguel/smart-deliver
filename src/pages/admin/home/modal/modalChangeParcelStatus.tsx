import { Box, Typography, Chip, Paper, Grid } from '@mui/material';
import { PARCEL_STATUS, PARCEL_STATUS_TYPES } from 'src/constants';
import { ColorsMui } from 'src/interfaces';
import { IRowParcel } from 'src/interfaces/row-parcel-table.interface';
import { ParcelModalHeaderInfo } from './headers-mock';

interface Props {
  rowTravel: IRowParcel;
}

const mockData = {
  userRequester: 'Miguel Bustillos',
  userRequesterCode: '75151351',
  userReceiver: 'Enzo Hinostroza',
  userReceiverCode: '5435439',
};
export const ModalChangeParcelStatus = ({ rowTravel }: Props) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const foundStatus = PARCEL_STATUS[rowTravel.status];

  const formBasedOnStatus = (status: PARCEL_STATUS_TYPES) => {
    switch (status) {
      case PARCEL_STATUS_TYPES.CREATED:
        break;

      case PARCEL_STATUS_TYPES.ACCEPTED:
        break;

      case PARCEL_STATUS_TYPES.RECEIVED:
        break;

      case PARCEL_STATUS_TYPES.COMING:
        break;

      case PARCEL_STATUS_TYPES.WAITING:
        break;

      case PARCEL_STATUS_TYPES.FINISHED:
        break;

      default:
        return <div>Error</div>;
    }
  };

  return (
    <Box sx={style}>
      <Box display="flex" columnGap={1}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Encomienda: <b>{rowTravel.key}</b>
        </Typography>
        <Chip
          label={foundStatus.label || ''}
          color={foundStatus.color as ColorsMui}
        />
      </Box>

      <Paper sx={{ mt: 2, p: 2 }}></Paper>
    </Box>
  );
};

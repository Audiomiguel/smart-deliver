import { Box, Typography, Paper, Grid } from '@mui/material';
import { ModalComponent } from 'src/components/modal';
import { PARCEL_STATUS } from 'src/constants';
import { ParcelModalHeaderInfo } from './headers-mock';
import {
  IParcelData,
  ParcelStatus,
} from 'src/pages/user/service/create-order.interface';
import { SelectChangeStatus } from './select-change-status';
import { OrderService } from 'src/pages/user/service/create-order.service';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNotification } from 'src/context/notification.context';

interface Props {
  rowTravel: IParcelData;
  setOpenModal: (value: boolean) => void;
  changeStatusParcelDataById(status: ParcelStatus, id: string): void;
}

const mockData = {
  userRequester: 'Miguel Bustillos',
  userRequesterCode: '75151351',
  userReceiver: 'Enzo Hinostroza',
  userReceiverCode: '5435439',
};
export const ModalTableAdminComponent = ({
  rowTravel,
  setOpenModal,
  changeStatusParcelDataById,
}: Props) => {
  const { getError, getSuccess } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  // const foundStatus = PARCEL_STATUS[rowTravel.status];

  // const getTextRowModal = (key: string, type: 'text' | 'chip') => {
  //   return (
  //     <Typography variant="subtitle1">
  //       {(rowTravel as any)[key] || (mockData as any)[key] || 'Error'}
  //     </Typography>
  //   );
  // };

  async function onUpdateStatus(newStatus: ParcelStatus) {
    setIsLoading(true);
    try {
      const response = await OrderService.changeSmartOrderStatus(
        rowTravel.id,
        newStatus
      );
      // const response = { message: 'Prueba' };

      getSuccess(response.message);
      changeStatusParcelDataById(newStatus, rowTravel.id);
    } catch (e) {
      getError(`Ha ocurrido un error: ${e?.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ModalComponent>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Encomienda: <b>{rowTravel.id}</b>
        </Typography>
        <IconButton onClick={() => setOpenModal(false)}>
          <CloseIcon />
        </IconButton>
      </div>

      {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
				Puede realizar los cambios de estados necesarios para continuar con el
				proceso de envio de encomiendas:
			</Typography> */}

      <Typography>Cambiar estado:</Typography>

      <Paper sx={{ mt: 2, p: 2 }}>
        <SelectChangeStatus
          currentStatus={rowTravel.status}
          onUpdateStatus={onUpdateStatus}
          loading={isLoading}
        />
        {/* <Grid container spacing={2} justifyContent="space-between">
          {ParcelModalHeaderInfo.map((header, index) => (
            <Grid item xs={5.8}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  {header.title}
                </Typography>
                {getTextRowModal(header.key, header.type)}
              </Box>
            </Grid>
          ))}
        </Grid> */}
      </Paper>
    </ModalComponent>
  );
};

import { Chip, Modal } from '@mui/material';
import { useState } from 'react';
import { ColorsMui } from 'src/interfaces';
import InfoIcon from '@mui/icons-material/Info';
import { ModalTableAdminComponent } from '../modal/modalTable.component';
import {
  IParcelData,
  ParcelStatus,
} from 'src/pages/user/service/create-order.interface';
import { PARCEL_STATUS } from 'src/constants';

interface Props {
  rowTravel: IParcelData;
  changeStatusParcelDataById(status: ParcelStatus, id: string): void;
}
export const ChipTableAdminComponent = ({
  rowTravel,
  changeStatusParcelDataById,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const foundStatus = PARCEL_STATUS[rowTravel.status || 'ORDERED'];

  function onClose(event: any, reason: any) {
    if (reason && reason === 'backdropClick') return;
    setOpenModal(false);
  }
  return (
    <>
      <Chip
        onClick={(e) => setOpenModal(true)}
        clickable
        label={foundStatus.label || ''}
        color={foundStatus.color as ColorsMui}
        icon={<InfoIcon />}
      />

      <Modal
        open={openModal}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalTableAdminComponent
          rowTravel={rowTravel}
          setOpenModal={setOpenModal}
          changeStatusParcelDataById={changeStatusParcelDataById}
        />
      </Modal>
    </>
  );
};

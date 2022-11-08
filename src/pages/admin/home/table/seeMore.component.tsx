import { Chip, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { ColorsMui } from "src/interfaces";
import InfoIcon from "@mui/icons-material/Info";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

interface Props {
	rowTravel: IRowParcel;
}
export const SeeMoreTableAdminComponent = ({
    rowTravel
}:Props) => {
	return (
		<>
			<IconButton aria-label="See more">
				<ReadMoreIcon />
			</IconButton>
			<Modal
				key={rowTravel.key}
				open={openModal}
				onClose={() => setOpenModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<ModalTableAdminComponent rowTravel={rowTravel} />
			</Modal>
		</>
	);
};

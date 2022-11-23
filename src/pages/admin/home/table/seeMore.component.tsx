import { Chip, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { ColorsMui } from "src/interfaces";
import InfoIcon from "@mui/icons-material/Info";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { ModalTableAdminComponent } from "../modal/modalTable.component";
import { CreatedParcelStatus } from "../forms-status/createdParcelStatus";
import { ModalComponent } from "src/components/modal";

interface Props {
	rowTravel: IRowParcel;
}
export const SeeMoreTableAdminComponent = ({ rowTravel }: Props) => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<>
			<IconButton aria-label="See more" onClick={() => setOpenModal(true)}>
				<ReadMoreIcon />
			</IconButton>
			<Modal
				key={rowTravel.key}
				open={openModal}
				onClose={() => setOpenModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<ModalComponent>
					<CreatedParcelStatus rowTravel={rowTravel} />
				</ModalComponent>
			</Modal>
		</>
	);
};

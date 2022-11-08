import { Chip, Modal } from "@mui/material";
import { useState } from "react";
import { ColorsMui } from "src/interfaces";
import InfoIcon from "@mui/icons-material/Info";
import { IRowParcel } from "src/interfaces/row-parcel-table.interface";
import { ModalTableAdminComponent } from "../modal/modalTable.component";

interface Props {
	label: string;
	color: ColorsMui;
	rowTravel: IRowParcel;
}
export const ChipTableAdminComponent = ({ label, color, rowTravel }: Props) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Chip
				onClick={(e) => setOpenModal(true)}
				clickable
				label={label || ""}
				color={color as ColorsMui}
				icon={<InfoIcon />}
			/>

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

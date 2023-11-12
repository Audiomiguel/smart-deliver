import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { PARCEL_STATUS } from 'src/constants';
import { IRowParcel } from 'src/interfaces/row-parcel-table.interface';
import { ChipTableAdminComponent } from './chipTable.component';
import { useDataParcelHooks } from './get-data-parcels.hooks';
export const ParcelTableComponent = () => {
  const { parcelData, headers } = useDataParcelHooks();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    // [`&.${tableCellClasses.body}`]: {
    // 	fontSize: 14,
    // },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <StyledTableCell>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {parcelData.map((row, index) => (
            <StyledTableRow key={index}>
              {Object.values(row).map((value, index) => (
                <StyledTableCell key={`${index}-row`}>{value}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

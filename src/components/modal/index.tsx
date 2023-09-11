import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}
export const ModalComponent = ({ children }: Props) => {
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
  return <Box sx={style}>{children}</Box>;
};

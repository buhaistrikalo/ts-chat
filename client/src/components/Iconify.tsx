import { FC } from 'react';
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export type IconifyProps = {
    icon: string,
    sx?: object
};
const Iconify: FC<IconifyProps> = ({ icon, sx, ...other }) => {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}


export default Iconify
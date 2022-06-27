import { FC, ReactNode } from 'react';
import { Stack } from '@mui/material';
import { ILayout } from 'types/layout';

const Center: FC<ILayout> = ({ children }) => {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
            {children}
        </Stack>
    );
};

export default Center;

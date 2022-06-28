import { Container, Box, TextField, FormControl } from '@mui/material';
import MessageForm from 'components/MessageForm';
import Center from 'layout/Center';

const HomePage = () => {
    return (
        <Center>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '90vh' }}></Box>
                <MessageForm />
            </Container>
        </Center>
    );
};

export default HomePage;

import { Container, Box, styled } from '@mui/material';
import MessageForm from 'components/MessageForm'

const ChatContainer = styled(Container)({
    height: '100vh',
    display: 'grid',
    gridTemplateRows: '1fr 52px',
    padding: 0,
    '&:hover': {
        color: '#2e8b57',
    },
});

const HomePage = () => {
    return (
        // <Center>
        <ChatContainer maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc' }}></Box>
            <MessageForm />
        </ChatContainer>
        // </Center>
    );
};

export default HomePage;

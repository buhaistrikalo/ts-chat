import { Container, styled } from '@mui/material';
import Chat from 'components/Chat';
import MessageForm from 'components/MessageForm';

const ChatContainer = styled(Container)({
    height: '100vh',
    display: 'grid',
    gridTemplateRows: '1fr 52px',
    padding: 0,
});

const HomePage = () => {
    return (
        <ChatContainer maxWidth="sm">
            <Chat />
            <MessageForm />
        </ChatContainer>
    );
};

export default HomePage;

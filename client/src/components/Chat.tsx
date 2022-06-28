import { Box, styled, Grid, Typography, Paper } from '@mui/material';
import moment from 'moment';
import { messagesAPI } from 'services/MessagesService';

const MessageBox = styled(Paper)({
    width: '70%',
    padding: 8,
    paddingBottom: 0,
    marginBottom: '8px',
});

const Chat = () => {
    const { data: messages, isLoading } = messagesAPI.useFetchAllMessagesQuery(0);

    return (
        <Box sx={{ bgcolor: '#cfe8fc', padding: '10px 10px' }}>
            {!isLoading &&
                messages?.map((message) => {
                    return (
                        <MessageBox elevation={3} key={message.id}>
                            <Typography color="primary.main" variant="subtitle2">
                                {message.author.name}
                            </Typography>
                            <Typography>{message.text}</Typography>
                            <Grid container justifyContent="flex-end">
                                <Typography color="secondary.main" variant="caption">
                                    {moment(message.date).format('LT')}
                                </Typography>
                            </Grid>
                        </MessageBox>
                    );
                })}
        </Box>
    );
};

export default Chat;

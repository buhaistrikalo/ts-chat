import { Stack, FormControl, TextField, IconButton } from '@mui/material';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Iconify from './Iconify';

type Inputs = {
    example: string;
    exampleRequired: string;
};

const MessageForm = () => {
    const [message, setMessage] = React.useState('');
    const { handleSubmit } = useForm<Inputs>();

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const onSubmit: SubmitHandler<Inputs> = () => {
        console.log(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
                direction="row"
                alignItems="center"
                sx={{
                    border: '1px solid #cfe8fc',
                    padding: '5px 10px',
                    borderRadius: '0 0 10px 10px',
                }}>
                <TextField
                    id="message"
                    placeholder="Напишите сообщение..."
                    variant="standard"
                    autoFocus
                    multiline
                    fullWidth
                    value={message}
                    onChange={handleMessageChange}
                />
                <IconButton type="submit" disableRipple>
                    <Iconify
                        icon="bi:send-fill"
                        sx={{
                            fontSize: 24,
                            color: 'action.active',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </IconButton>
            </Stack>
        </form>
    );
};

export default MessageForm;

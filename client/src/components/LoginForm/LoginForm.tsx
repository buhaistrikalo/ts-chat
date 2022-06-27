import { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';

const LoginForm = () => {
    const [loginName, setLoginName] = useState('');

    const handleLoginName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginName(event?.target.value);
    };

    const handleClick = () => {
        // Записать в localStorage имя пользователя
        // Возможно присвоить индификатор
        // Редирект на страницу HomePage
    };

    return (
        <Container maxWidth="xs">
            <TextField
                id="login-name"
                label="Ваше имя"
                variant="outlined"
                fullWidth
                value={loginName}
                onChange={handleLoginName}
                sx={{ marginBottom: 3 }}
            />
            {loginName === '' ? (
                <Button variant="text" fullWidth size="large" disabled>
                    Напишите имя для входа
                </Button>
            ) : (
                <Button variant="contained" fullWidth size="large" onClick={handleClick}>
                    Войти
                </Button>
            )}
        </Container>
    );
};

export default LoginForm;

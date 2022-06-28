import { useState } from 'react';
import { Button, Container, FormControl, TextField } from '@mui/material';
import { useActions } from 'hooks/useActions';
import { useId } from 'react';

const LoginForm = () => {
    const [loginName, setLoginName] = useState('');
    const { authUser } = useActions();
    const authId = useId();

    const handleLoginName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginName(event?.target.value);
    };

    const handleClick = () => {
        authUser({ id: authId, name: loginName });
    };

    return (
        <Container maxWidth="xs">
            <form onSubmit={handleClick}>
                <FormControl fullWidth>
                    <TextField
                        autoFocus
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
                </FormControl>
            </form>
        </Container>
    );
};

export default LoginForm;

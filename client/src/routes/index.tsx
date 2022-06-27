import { Navigate, useRoutes } from 'react-router-dom';
//
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
import { useAppSelector } from 'hooks/useTypedSelector';

export default function Router() {
    const { authUser } = useAppSelector(state => state)
    const auth = false;

    return useRoutes([
        {
            path: '/',
            element: authUser.id === 0 ? <LoginPage /> : <HomePage />,
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}

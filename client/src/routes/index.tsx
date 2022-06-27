import { Navigate, useRoutes } from 'react-router-dom';
//
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

export default function Router() {
    const auth = false;

    return useRoutes([
        {
            path: '/',
            element: !auth ? <LoginPage /> : <HomePage />,
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}

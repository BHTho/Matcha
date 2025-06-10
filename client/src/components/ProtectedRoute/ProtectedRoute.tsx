import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import checkToken from '../../utils/checkToken';

export default function ProtectedRoute() {
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        const verifyToken = async () => {
            const valid = await checkToken();
            setIsAuth(valid);
        };
        verifyToken();
    }, []);

    if (isAuth === null) {
        return null;
    }
    console.log('ProtectedRoute: isAuth:', isAuth);

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}
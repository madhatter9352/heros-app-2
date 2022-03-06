import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { types } from '../types';
import { AuthContext } from '../auth/authContext';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Lazaro',
            },
        };
        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, { replace: true });
    };

    return (
    <div className="container mt-5">
        <h1>LoginScreen</h1>
        <hr />
        <button 
            className="btn btn-primary"
            onClick={handleLogin}
        >
            Login
        </button>
    </div>
    );
};

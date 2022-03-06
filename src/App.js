import { useEffect, useReducer } from 'react';
import { AuthContext } from './components/auth/authContext';
import { authReducer } from './components/auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

function App() {
  
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;

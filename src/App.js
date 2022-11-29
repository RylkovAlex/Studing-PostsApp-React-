import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './context';
import { privateRoutes, publicRoutes } from './router/routes';

import './styles/app.css';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const router = createBrowserRouter(isAuth ? privateRoutes : publicRoutes);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

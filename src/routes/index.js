import React, {useContext} from 'react';

//Dev components and providers
import AuthContext from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const {user} = useContext(AuthContext);

  return user ? <AppRoutes /> : <AuthRoutes />;
}

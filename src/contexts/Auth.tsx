import React, {useContext, createContext, useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

import {API_URL} from '../utils/constants';
import {IUser} from '../interfaces/user';
import StorageService from '../utils/storage';

export interface IAuthContext {
  isAuthenticated: boolean;
  user?: IUser;

  signin: (username: String, password: string) => void;
  signout: (callback: () => void) => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: undefined,

  signin: () => {},
  signout: () => {},
});

export function ProvideAuth({children}: {children: React.ReactNode}) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    setUser(StorageService.get('user'));
  }, [isAuthenticated]);

  const signin = async (username: String, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/user/login`, {
        username,
        password,
      });

      Cookies.set('token', result.data.token);
      Cookies.set('refreshToken', result.data.refreshToken);
      StorageService.set('user', result.data.user);
      setUser(result.data.user);
      setIsAuthenticated(true);

      return {
        success: true,
        message: 'Inicio de sesión exitoso',
        data: result.data,
      };
    } catch (error: any) {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      StorageService.set('user', null);
      setIsAuthenticated(false);
      setUser(undefined);

      return {
        success: false,
        message: error.response.data != null ? error.response.data.message : 'Error inesperado',
      };
    }
  };

  const signout = (callback: () => void) => {
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    StorageService.set('user', null);
    setIsAuthenticated(false);
    setUser(undefined);
    callback();
  };

  return {
    isAuthenticated,
    user,
    signin,
    signout,
  };
}

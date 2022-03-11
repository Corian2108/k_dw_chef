import React, {useState, createContext} from 'react';

export const AuthContext = createContext({
  auth: undefined,
  user: undefined,
  setToken: () => {},
  setAuthUser: () => {},
});

export function AuthProvider(props) {
  const {children} = props;
  const [auth, setAuth] = useState(undefined);
  const [user, setUser] = useState(undefined);

  const setToken = userData => {
    setAuth(userData);
  };

  const setAuthUser = userData => {
    setUser(userData);
  };

  const valueContext = {
    auth,
    user,
    setToken,
    setAuthUser,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

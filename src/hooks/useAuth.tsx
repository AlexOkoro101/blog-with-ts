import React, { PropsWithChildren, useContext } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <AuthContext.Provider value={{
      user: 'user'
    }}>
      { children }
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

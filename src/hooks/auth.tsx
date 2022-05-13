import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    token: string;
    name: string;
    email: string;
}
interface IAuthContextData {
    user: User;    
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps){
    const user = {
        token: '123',
        name: 'Gustavo Sobbrero',
        email: 'gustavo.sobbrero@develcode.com.br'
    }
    
    return (
        <AuthContext.Provider value={{ user }}>
          { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    
    return context;
}

export { AuthProvider, useAuth }
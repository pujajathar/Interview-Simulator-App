import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem('interview_token') || null);
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('interview_user');
        try {
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    })
    const login = (newToken, newUser) => {
        setToken(newToken);
        setUser(newUser);
        localStorage.setItem('interview_token', newToken);
        localStorage.setItem('interview_user', JSON.stringify(newUser));
    }
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('interview_token');
        localStorage.removeItem('interview_user');
    }
    const isAuthenticated = Boolean(token);

    return (
        <AuthContext.Provider value={ { token, user, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuth, AuthContext };

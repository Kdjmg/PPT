import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    username: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = (username: string, password: string) => {
        // Simuler un login, remplacez cela par une vraie API d'authentification
        if (username === "admin" && password === "password") {
            setUser({ username });
            navigate('/admin/dashboard');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/admin/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

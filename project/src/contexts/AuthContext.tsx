import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  role: 'patient' | 'doctor' | 'assistant';
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // This is a mock implementation for demonstration
    if (password !== '123456') {
      throw new Error('Invalid credentials');
    }

    let mockUser: User;

if (email.includes('@patient')) {
  mockUser = {
    id: '1',
    email,
    role: 'patient',
    name: 'John Patient',
  };
} else if (email.includes('@doctor')) {
  mockUser = {
    id: '2',
    email,
    role: 'doctor',
    name: 'Dr. Smith',
  };
} else if (email.includes('@assistant')) {
  mockUser = {
    id: '3',
    email,
    role: 'assistant',
    name: 'Sarah Assistant',
  };
} else {
  throw new Error('Invalid user type');
}


    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate(`/dashboard/${mockUser.role}`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
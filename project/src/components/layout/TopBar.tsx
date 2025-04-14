import React from 'react';
import { Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

export function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-medical-blue-600 dark:text-medical-blue-400">
              Akdital Platform
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {user?.name}
              </span>
              <div className="h-8 w-8 rounded-full bg-medical-blue-500 flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user?.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
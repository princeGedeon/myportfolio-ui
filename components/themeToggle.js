import React from 'react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
       <SunIcon className="text-blue-400 w-5 h-5" />
      ) : (
        
        <MoonIcon className="text-blue-500 w-5 h-5" />
      )}
    </button>
    );
}

export default ThemeToggle;

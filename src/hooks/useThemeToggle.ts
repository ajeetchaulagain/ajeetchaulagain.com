import { useEffect, useState } from 'react';

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<string>('lightTheme');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'lightTheme' ? setMode('darkTheme') : setMode('lightTheme');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const resolvedTheme = localTheme || 'lightTheme';
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    setTheme(resolvedTheme);
  }, []);

  return { theme, themeToggler };
};

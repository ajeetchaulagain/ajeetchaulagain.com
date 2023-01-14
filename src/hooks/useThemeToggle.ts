import { useEffect, useState } from 'react';

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<string>('lightTheme');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'lightTheme' ? setMode('darkTheme') : setMode('lightTheme');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setTheme('lightTheme');
  }, []);

  return { theme, themeToggler };
};

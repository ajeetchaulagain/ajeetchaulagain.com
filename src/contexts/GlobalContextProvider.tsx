import { useThemeToggle } from 'hooks/useThemeToggle';
import React, { ReactNode } from 'react';

type GlobalState = {
  theme: string;
};

export type GlobalDispatchContextType = () => void;

export const GlobalDispatchContext =
  React.createContext<GlobalDispatchContextType | null>(null);

export const GlobalStateContext = React.createContext<GlobalState>({
  theme: 'lightTheme',
});

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const { theme, themeToggler } = useThemeToggle();

  return (
    <GlobalStateContext.Provider value={{ theme: theme }}>
      <GlobalDispatchContext.Provider value={themeToggler}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;

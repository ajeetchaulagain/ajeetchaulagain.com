import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  GlobalDispatchContext,
  GlobalDispatchContextType,
  GlobalStateContext,
} from 'contexts/GlobalContextProvider';
import { Container, Input, Label, Ball } from './styles';

export const ThemeToggleSwitch = () => {
  const themeToggler = useContext(
    GlobalDispatchContext
  ) as GlobalDispatchContextType;
  const { theme } = useContext(GlobalStateContext);
  const checked = theme === 'darkTheme';

  return (
    <Container>
      <Input
        type="checkbox"
        id="theme-toggle-checkbox"
        aria-labelledby="theme-toggle-label"
        checked={checked}
        onChange={() => themeToggler()}
      />
      <Label htmlFor="theme-toggle-checkbox" id="theme-toggle-label">
        <FaSun color="#f39c12" />
        <FaMoon color="#f1c40f" />
        <Ball className="ball"></Ball>
      </Label>
    </Container>
  );
};

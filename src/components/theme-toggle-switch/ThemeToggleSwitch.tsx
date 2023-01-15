import {
  GlobalDispatchContext,
  GlobalDispatchContextType,
  GlobalStateContext,
} from 'contexts/GlobalContextProvider';
import React, { useContext } from 'react';
import { Container, Input, Label, Ball } from './styles';
import { FaMoon, FaSun } from 'react-icons/fa';

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
        id="checkbox"
        checked={checked}
        onChange={() => themeToggler()}
      />
      <Label htmlFor="checkbox">
        <FaSun color="#f39c12" />
        <FaMoon color="#f1c40f" />
        <Ball className="ball"></Ball>
      </Label>
    </Container>
  );
};
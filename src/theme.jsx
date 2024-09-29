/* eslint-disable react-refresh/only-export-components */
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

export const getDesignTokens = mode => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light",
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prev => (prev === "light" ? "dark" : "light")),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};

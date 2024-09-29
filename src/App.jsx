import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { ColorModeContext, useMode } from "./theme";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // @ts-ignore
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar handleDrawerOpen={handleDrawerOpen} open={open} />
          <SideBar handleDrawerClose={handleDrawerClose} open={open} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

            <Typography sx={{ marginBottom: 2 }}>
              <Outlet />
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

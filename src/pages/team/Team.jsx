import { useTheme } from "@emotion/react";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { rows } from "./Data";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      with: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 0.3,

      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              mt: "10px",
              borderRadius: "5px",
              width: "99px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
            }}>
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}
            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography
              sx={{ fontSize: "13px", color: "#fff" }}
              variant="body1">
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Header title={"TEAM"} subTitle={"Welcome to the Team Members"} />

      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
};

export default Team;

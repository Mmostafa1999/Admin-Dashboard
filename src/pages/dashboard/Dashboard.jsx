import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Header from "../../components/Header";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const Dashboard = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right" }}>
          <Button
            sx={{ textTransform: "capitalize", padding: "6px 8px", mb: 1.3 }}
            variant="contained"
            color="primary">
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;

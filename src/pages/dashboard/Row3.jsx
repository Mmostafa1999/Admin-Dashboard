import { Paper, Stack, Typography, useTheme } from "@mui/material";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import Geography from "../geography/Geography";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ flexDirection: "row", mt: 3, flexWrap: "wrap", gap: 1.5 }}>
      <Paper sx={{ width: "28%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}>
          Campaign
        </Typography>
        <PieChart isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 Revenue Generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}>
          Sales Quantity
        </Typography>
        <BarChart isDashboard={true} />
      </Paper>

      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px" }}>
          Geography Based Traffic
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;

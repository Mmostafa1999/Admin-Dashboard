import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <LineChart />
    </Box>
  );
};

export default Line;

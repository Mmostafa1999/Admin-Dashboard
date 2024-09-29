import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box>
      <Header title={"Pie  Chart"} subTitle={"Simple Pie Chart"} />
      <PieChart />
    </Box>
  );
};

export default Pie;

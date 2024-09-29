import { Stack, useTheme } from "@mui/material";
import Card from "./Card";

import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: { xs: "center", sm: "space-between" },
      }}>
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+14%"}
        subtitle={"Emails Sent"}
        title={"12,361"}
        data={data1}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+21%"}
        subtitle={"Sales Obtained"}
        title={"431,225"}
        data={data2}
        scheme={"category10"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+5%"}
        subtitle={"New Clients"}
        title={"32,441"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        increase={"+43%"}
        subtitle={"Traffic Recevied"}
        title={"1,325,134"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};

export default Row1;

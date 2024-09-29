import { DownloadOutlined } from "@mui/icons-material";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import LineChart from "../../components/LineChart";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            px: "30px",
          }}>
          <Box>
            <Typography variant="h6" color={theme.palette.secondary.main}>
              Revenue Generated
            </Typography>
            <Typography variant="body1" color="inhirt">
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <DownloadOutlined sx={{ cursor: "pointer" }} />
          </Box>
        </Stack>

        <LineChart isDashboard={true} />
      </Paper>
      <Box
        sx={{
          maxHeight: 380,
          flexWrap: "wrap",
          minWidth: "280px",
          overflow: "auto",
          flexGrow: 1,
        }}>
        <Paper>
          <Typography
            variant="h6"
            p={1.2}
            fontWeight={"bold"}
            color={theme.palette.secondary.main}>
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map(item => {
          return (
            <Paper
              // @ts-ignore
              key={item}
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Box p={1.2}>
                <Typography variant="body1" fontWeight={600}>
                  {item.txId}
                </Typography>
                <Typography variant="body2">{item.user}</Typography>
              </Box>
              <Typography variant="body1">{item.date}</Typography>

              <Typography
                variant="body2"
                bgcolor={theme.palette.error.main}
                p={1}
                borderRadius={1.4}
                color={theme.palette.getContrastText(theme.palette.error.main)}>
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
};

export default Row2;

import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  const theme = useTheme();
  return (
    <div>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </div>
  );
};

export default NotFound;

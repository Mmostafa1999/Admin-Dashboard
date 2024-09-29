/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import {
  BarChartOutlined,
  ContactsOutlined,
  DateRangeOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleAltOutlined,
  PermIdentityOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  {
    icon: <HomeOutlined />,
    text: "Dashboard",
    path: "/",
  },
  {
    icon: <PeopleAltOutlined />,
    text: "Manage Team",
    path: "/team",
  },
  {
    icon: <ContactsOutlined />,
    text: "Contacts Information",
    path: "/contacts",
  },
  {
    icon: <ReceiptOutlined />,
    text: "Invoices Balances",
    path: "/invoices",
  },
];

const Array2 = [
  {
    icon: <PermIdentityOutlined />,
    text: "Profile Form",
    path: "/profile",
  },
  {
    icon: <DateRangeOutlined />,
    text: "Calender",
    path: "/calender",
  },
  {
    icon: <HelpOutlineOutlined />,
    text: "FAQ Page",
    path: "/faq",
  },
];

const Array3 = [
  {
    icon: <BarChartOutlined />,
    text: "Bar Chart",
    path: "/bar",
  },
  {
    icon: <PieChartOutlineOutlined />,
    text: "Pie Chart",
    path: "/pie",
  },
  {
    icon: <ShowChartOutlined />,
    text: "Line Chart",
    path: "/line",
  },
  {
    icon: <MapOutlined />,
    text: "Geography Chart",
    path: "/geography",
  },
];

const SideBar = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          my: 0.5,
        }}>
        <Avatar
          sx={{
            width: open ? 88 : 44,
            height: open ? 88 : 44,
            mt: 1,
            transition: "0.25s",
          }}
          alt="admin picture"
          src="https://res.cloudinary.com/deogyppiz/image/upload/v1727592012/adminpic_o4gprw.png"
        />
        <Typography
          sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
          color="inhirt">
          Mahmoud Dardier
        </Typography>
        <Typography
          sx={{
            fontSize: open ? 15 : 0,
            transition: "0.25s",
            color: theme.palette.info.main,
          }}>
          Admin
        </Typography>
      </Stack>
      <Divider />

      <List sx={{ py: 0 }}>
        {Array1.map(item => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              display: "block",
            }}>
            <Tooltip title={open ? null : item.text} placement={"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}>
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List sx={{ py: 0 }}>
        {Array2.map(item => (
          <ListItem
            // @ts-ignore
            key={item.icon}
            disablePadding
            sx={{
              display: "block",
            }}>
            <Tooltip title={open ? null : item.text} placement={"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}>
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List sx={{ py: 0 }}>
        {Array3.map(item => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement={"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}>
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;

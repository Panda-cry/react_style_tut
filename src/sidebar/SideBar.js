import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)({
  flex: 0.5,
  borderRight: "lightgrey solid thin",
});

const ListTypographyItem = styled(Typography)({
  fontSize: "15px",
  fontFamily: "arial",
  marginLeft: "15px",
});

//TODO videti da lista moze da ima dropdown :D
function SideBar(props) {
  const theme = useTheme();
  return (
    <CustomBox style={{ color: "lightgrey" }}>
      <div
        style={{
          borderBottom: " solid lightgrey thin ",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          React admin
        </Typography>
      </div>

      <List sx={{ display: { xs: "none", sm: "block" } }}>
        <ListTypographyItem>Main</ListTypographyItem>
        <ListItem disablePadding>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon style={{ color: theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListTypographyItem>Lists </ListTypographyItem>

        <ListItem disablePadding>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleOutlinedIcon
                  style={{ color: theme.palette.primary.main }}
                />
              </ListItemIcon>
              <ListItemText primary="User"> </ListItemText>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StorefrontOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalGroceryStoreIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AirportShuttleIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Delivery" />
          </ListItemButton>
        </ListItem>

        <ListTypographyItem>Useful</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SignalCellularAltIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsActiveIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListTypographyItem>Service</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PsychologyIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary="System Health" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsSystemDaydreamIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Logs" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListTypographyItem>User</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary="Color" />
          </ListItemButton>
        </ListItem>
      </List>

      <List sx={{ display: { xs: "block", sm: "none" } }}>
        <ListTypographyItem>Main</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListTypographyItem>Lists</ListTypographyItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StorefrontOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LocalGroceryStoreIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AirportShuttleIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListTypographyItem>Useful</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SignalCellularAltIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsActiveIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListTypographyItem>Service</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PsychologyIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsSystemDaydreamIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListTypographyItem>User</ListTypographyItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutOutlinedIcon
                style={{ color: theme.palette.primary.main }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: theme.palette.primary.main }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </CustomBox>
  );
}

export default SideBar;

import {
  AppBar,
  InputBase,
  styled,
  alpha,
  useTheme,
  Avatar,
  Badge,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const CustomNavBar = styled("div")({
  flex: 4,
  borderBottom: "solid lightgrey thin",
  height: "70px",
  justifyContent: "space-between",
  display: "flex",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "solid grey thin",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: "5px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const CustomNavBarRight = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginLeft: "auto",
  display: "flex",
  gap: 25,
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "10px",
}));

const CustomLanguageChange = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginLeft: "auto",
  display: "flex",
  gap: 25,
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "10px",
}));

const CustomModeChange = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginLeft: "auto",
  display: "flex",
  gap: 25,
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "10px",
}));

function NavBar(props) {
  const theme = useTheme();
  return (
    <CustomNavBar id="123123">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <CustomNavBarRight>
        <CustomLanguageChange>Eng</CustomLanguageChange>
        <CustomModeChange>Mode</CustomModeChange>
        <Badge color="secondary" badgeContent={3} overlap="circular">
          <NotificationsIcon color="primary" />
        </Badge>
        <Badge color="secondary" badgeContent={3} overlap="circular">
          <ChatBubbleIcon color="primary" />
        </Badge>
        <Avatar></Avatar>
      </CustomNavBarRight>
    </CustomNavBar>
  );
}

export default NavBar;

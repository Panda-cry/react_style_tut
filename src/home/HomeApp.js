import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
  useTheme,
} from "@mui/material";
import { blue, deepPurple, lightBlue, purple } from "@mui/material/colors";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import Home from "./Home";
import Charts from "./Charts";
import TableComponent from "./Table";

function HomeApp(props) {
  const theme = useTheme();
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SideBar></SideBar>
      <Box sx={{ flex: 4, overflowX: "hidden" }}>
        <NavBar></NavBar>
        <Home></Home>
        <Charts />
        <TableComponent />
      </Box>
    </Box>
  );
}

export default HomeApp;

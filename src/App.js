import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from "./home/Charts";
import Home from "./home/Home";
import TableComponent from "./home/Table";
import NavBar from "./navbar/NavBar";
import SideBar from "./sidebar/SideBar";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import { blue, deepPurple, lightBlue, purple, red } from "@mui/material/colors";
import HomeApp from "./home/HomeApp";
import UsersList from "./list-users/UsersList";
import UserInfo from "./single-user/UserInfo";
import New from "./new/New";

function App() {
  const theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: lightBlue,
      background: {
        default: deepPurple["50"],
      },
    },
    typography: {
      fontFamily: "Arial",
      color: "#9c27b0",
      subtitle1: {
        fontFamily: "Arial",
        fontSize: 15,
      },
      button: {
        color: red,
        fontSize: 15,
        fontWeight: 600,
      },
      body1: {
        color: "dimgrey",
      },
    },
  });

  const light = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/new" element={<New />} />
          <Route path="/users/:userId" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

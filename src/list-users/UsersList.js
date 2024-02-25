import React from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
} from "@mui/material";

import "./users-list.css";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import { useTheme } from "@mui/material/styles";
import DataTable from "./DataTable";

function UsersList(props) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        style={{
          display: "flex",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <SideBar></SideBar>
        <Box sx={{ flex: 4, overflowX: "hidden" }}>
          <NavBar></NavBar>
          <DataTable></DataTable>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default UsersList;

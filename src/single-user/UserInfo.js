import { Box, useTheme } from "@mui/material";
import "./user_info.css";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import React from "react";
import SinglePage from "./SinglePage";

function UserInfo(props) {
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
          <SinglePage />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default UserInfo;

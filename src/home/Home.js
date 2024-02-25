import React from "react";
import Wiget from "./Wiget";
import { styled } from "@mui/material";

const CustomBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 20,
  padding: "20px",
}));
function Home(props) {
  return (
    <CustomBox>
      <Wiget type="user"></Wiget>
      <Wiget type="order"></Wiget>
      <Wiget type="earnings"></Wiget>
      <Wiget type="balance"></Wiget>
    </CustomBox>
  );
}

export default Home;

import { styled } from "@mui/material";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import "./chart.css";

const CustomBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 20,
  padding: "20px",
  maxHeight: "450px",
}));

function Charts(props) {
  return (
    <CustomBox className="charts">
      <PieChart></PieChart>
      <LineChart aspect={2 / 1}></LineChart>
    </CustomBox>
  );
}

export default Charts;

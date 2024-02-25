import { ArrowDownward, MoreVert } from "@mui/icons-material";
import "./chart.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PieChart(props) {
  return (
    <div className="piechart">
      <div className="top">
        Title Revenue
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Some description based on amount</p>

        <div className="summary">
          <div className="item">
            <div className="title">Target</div>

            <div className="amount">
              {" "}
              <ArrowDownward fontSize="small" />
              $12.4k
            </div>
          </div>

          <div className="item">
            <div className="title">Week target</div>

            <div className="amount">
              <ArrowDownward fontSize="small" />
              $12.4k
            </div>
          </div>

          <div className="item">
            <div className="title">Month target</div>

            <div className="amount">
              <ArrowDownward fontSize="small" />
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;

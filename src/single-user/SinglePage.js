import { Box } from "@mui/material";
import "./user_info.css";
import LineChart from "../home/LineChart";
import TableComponent from "../home/Table";
function SinglePage(props) {
  return (
    <Box className="userBox">
      <div className="topDiv">
        <div className="leftOne">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="detBox">
            <img
              className="leftImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWZM4LaEBG5h5ux83IEllVR4Y1vRwsWtLdA&usqp=CAU"
            />
            <div className="leftDetails">
              <h1 className="itemTitle">John Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">asdasd</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">123123</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">asdaa</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Madagascar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightOne">
          <LineChart aspect={3 / 1} />
        </div>
      </div>

      <div className="bottomDiv">
        <TableComponent />
      </div>
    </Box>
  );
}

export default SinglePage;

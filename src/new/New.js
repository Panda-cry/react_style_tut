import { Box, Button, Typography } from "@mui/material";
import NavBar from "../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import { useTheme } from "@emotion/react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.css";
import { useState } from "react";
function New() {
  const theme = useTheme();
  const [file, setFile] = useState();

  return (
    <Box
      className="new"
      style={{
        display: "flex",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SideBar></SideBar>
      <Box sx={{ flex: 4, overflowX: "hidden" }}>
        <NavBar></NavBar>
        <div className="newContainer">
          <div className="top">
            <h1>Add new user</h1>
          </div>

          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=KaRW6O_DcZXEFbMPS-3DrDP5z28TIdBoBzcCliubxyY="
                }
                alt=""
              ></img>
            </div>
            <div className="right">
              <form className="form">
                <div className="formInput">
                  <label>Username</label>
                  <input type="text" placeholder="john_doe" />
                </div>

                <div className="formInput">
                  <label htmlFor="file">
                    Image : <DriveFolderUploadIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="formInput">
                  <label>Name and surname</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="formInput">
                  <label>Email</label>
                  <input type="text" placeholder="john_doe@gmail.com" />
                </div>

                <div className="formInput">
                  <label>Phone</label>
                  <input type="text" placeholder="+1 123 123 123" />
                </div>
                <div className="formInput">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="formInput">
                  <label>Address</label>
                  <input type="text" placeholder="Misispy12" />
                </div>
                <div className="formInput">
                  <label>Country</label>
                  <input type="text" placeholder="Madagascar" />
                </div>

                <Button>
                  <Typography variant="button">Send</Typography>
                </Button>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default New;

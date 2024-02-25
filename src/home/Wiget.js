import {
  AccountBalance,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./home.css";

function Wiget({ type }) {
  var data;
  const amount = 100;
  const percentage = 23;
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutline
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "#e37971",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "Orders",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingBagOutlined
            className="icon"
            style={{
              color: "#7d790c",
              backgroundColor: "#d4cf53",
            }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "Earning",
        isMoney: true,
        link: "View all earnings",
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{
              color: "#1b8724",
              backgroundColor: "#5ce067",
            }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "View details",
        icon: (
          <AccountBalance
            className="icon"
            style={{
              color: "#4c1670",
              backgroundColor: "#a95bde",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="wiget">
      <div className="left">
        <div className="title">{data.title}</div>

        <div className="counter">
          {data.isMoney && "$"} {amount}
        </div>
        <div className="link"> {data.link}</div>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Wiget;

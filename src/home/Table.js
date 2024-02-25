import "./table.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 123,
    product: "Acer Nitro",
    img: "https://cdn.thewirecutter.com/wp-content/media/2023/06/businesslaptops-2048px-0943.jpg?auto=webp&quality=75&width=1024",
    customer: "Abrakadabra",
    data: "1 March",
    amount: 123,
    method: "Cash or Delivery",
    status: "Approved",
  },
  {
    id: 1223,
    product: "Acer Nitro 2",
    img: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl9hX2xhcHRvcF9tb2NrdXBfY2xvc2UtdXBfbWluaW1hbF9pc182M2Q2NzViOS00YjlhLTQ3OWEtOGMyMS1hYWQwMjViNWYzZDIucG5n.png",
    customer: "Abrakad3abra",
    data: "2 March",
    amount: 1233,
    method: "Cash or Delivery",
    status: "Pending",
  },
  {
    id: 1243,
    product: "Acer Nitro 2",
    img: "https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg",
    customer: "Abraka1dabra",
    data: "3 March",
    amount: 1223,
    method: "Cash or Delivery",
    status: "Approved",
  },
];

function TableComponent(props) {
  return (
    <div className="listComponent">
      <div className="listTitle">Table of contents</div>

      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.data}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;

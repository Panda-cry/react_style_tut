import { DataGrid } from "@mui/x-data-grid";
import "./datatable.css";
import { Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImage" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },

  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="actionCell">
          <div className="actionView">View</div>
          <div className="actionDelete"> Delete</div>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    username: "peca123",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 2,
    username: "pe23123",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 3,
    username: "pec13",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 4,
    username: "pec12323",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 5,
    username: "pe11223",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },

  {
    id: 12,
    username: "pe23123",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 23,
    username: "pec13",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 14,
    username: "pec12323",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 35,
    username: "pe11223",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 1,
    username: "peca123",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 2,
    username: "pe23123",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 3,
    username: "pec13",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 4,
    username: "pec12323",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 5,
    username: "pe11223",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },

  {
    id: 12,
    username: "pe23123",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 23,
    username: "pec13",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 14,
    username: "pec12323",
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    status: "active",
    email: "123@gmail.com",
    age: 32,
  },
  {
    id: 35,
    username: "pe11223",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "passive",
    email: "123@gmail.com",
    age: 32,
  },
];

function DataTable(props) {
  return (
    <div className="datable">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default DataTable;

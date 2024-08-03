import { GridColDef } from "@mui/x-data-grid";
import { type Row } from "./types";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    cellClassName: "idColumn",
    headerClassName: "header-cell",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
    cellClassName: "firstNameColumn",
    headerClassName: "header-cell",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
    cellClassName: "lastNameColumn",
    headerClassName: "header-cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    cellClassName: "ageColumn",
    headerClassName: "header-cell",
  },
  {
    sortable: false,
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    cellClassName: "avatarColumn",
    headerClassName: "header-cell",
    renderCell: (params) => (
      <img
        src={params.value}
        alt="avatar"
        style={{ width: "70px", height: "40px" }}
      />
    ),
  },
];

export const rows: Array<Row> = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: 12,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Armen",
    age: 150,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0y6Vhjobxd6Bkhwc5tQ8qHR4yXifC_oovQ&s",
  },
];

import "./App.css";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, type GridCellParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {} from "react-router-dom";
import { columns, rows } from "./mock";
import { CellInfo, Row } from "./types";
import { getQueryParams } from "./utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./themeToggle";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme()

  const [tableRows, setTableRows] = useState(rows);
  const [filterText, setFilterText] = useState<string>("");
  const [modal, setModal] = useState<CellInfo & { open: boolean }>({
    field: "",
    id: "",
    open: false,
    value: "",
  });

  const handleClick = () => {
    const [firstname, lastname] = filterText.split(" ");
    console.log([firstname, lastname]);

    const currentParams = new URLSearchParams(location.search);
    if (!firstname) currentParams.delete("firstname");
    else currentParams.set("firstname", firstname);
    if (!lastname) currentParams.delete("lastname");
    else currentParams.set("lastname", lastname);
    navigate({ search: currentParams.toString() }, { replace: true });
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);

    setTableRows(() => {
      let res = rows;
      if (queryParams.firstname)
        res = res.filter((item: Row) =>
          item.firstName
            .toLowerCase()
            .includes(queryParams.firstname.toLowerCase())
        );
      if (queryParams.lastname)
        res = res.filter((item: Row) =>
          item.lastName
            .toLowerCase()
            .includes(queryParams.lastname.toLowerCase())
        );

      return res;
    });
  }, [location.search]);

  return (
    <div className="App">
      <ThemeToggle />
      <Typography component="h1" variant="h1">
        Test Task № 4
      </Typography>
      <DataGrid
        className={theme === 'light' ? "table-light" : 'table-dark'}
        getRowClassName={(_) => "table-row"}
        onCellClick={({ field, value, id }: GridCellParams) => {
          setModal({
            open: true,
            field,
            value: String(value),
            id: String(id),
          });
        }}
        rows={tableRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
      <Stack direction="row">
        <TextField
        className="input"
          value={filterText}
          onChange={(ev) => setFilterText(ev.target.value)}
          label="Full Name"
        />
        <Button onClick={handleClick} variant="contained">
          Filter
        </Button>
      </Stack>
      <Modal
        className="modal-back"
        onClose={() => {
          setModal((prev) => ({ ...prev, open: false }));
        }}
        open={modal.open}
      >
        <Box className="modal">
          <Typography className="modal__id" component="span">
            {modal.id}
          </Typography>
          {modal.field === "avatar" ? (
            <img src={modal.value} />
          ) : (
            <Typography className="modal__text" component="span">
              {modal.value}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default App;

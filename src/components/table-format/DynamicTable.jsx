import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Stack,
  Pagination,
  TextField
} from "@mui/material";
import DeleteIcon from "../../assets/logos/delete.png";
import EditIcon from "../../assets/logos/edit.png";
import StatusOff from "../../assets/logos/turnoff.png";
import StatusOn from "../../assets/logos/turnon.png";

const DynamicTable = ({ columns, data, onEdit, onDelete, rowsPerPage = 10 }) => {
  const [status, setStatus] = useState(
    data.map((row) => (row.status === "Active" ? true : false))
  );
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (index) => {
    const updatedStatus = [...status];
    updatedStatus[index] = !updatedStatus[index];
    setStatus(updatedStatus);
  };

  // Filter data based on search term
  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.id]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* <Box display="flex" justifyContent="center" mb={2}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box> */}

      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell 
                  key={index} 
                  align="center" 
                  sx={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Active Status</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align="center">
                    {row[column.id]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <Button onClick={() => toggleStatus(rowIndex)}>
                    <img
                      src={status[rowIndex] ? StatusOn : StatusOff}
                      alt={status[rowIndex] ? "Turn On" : "Turn Off"}
                      width="40"
                      height="24"
                    />
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center" gap={1}>
                    <Button onClick={() => onEdit(row)} sx={{ minWidth: "30px", p: 0 }}>
                      <img src={EditIcon} alt="Edit" width="45" height="35" />
                    </Button>
                    <Button onClick={() => onDelete(row)} sx={{ minWidth: "30px", p: 0 }}>
                      <img src={DeleteIcon} alt="Delete" width="45" height="35" />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Centered Pagination */}
      <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default DynamicTable;

import React, { useEffect, useState } from "react";
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
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Import Icons
import DeleteIcon from "../../assets/logos/delete.png";
import EditIcon from "../../assets/logos/edit.png";
import StatusOff from "../../assets/logos/turnoff.png";
import StatusOn from "../../assets/logos/turnon.png";
import API_URL from "../../api/Api_url";
// API Endpoints Mapping
const apiEndpoints = {
  settings: `${API_URL}/users`,
  roles: `${API_URL}/roles/delete`,
  department: `${API_URL}/departments/delete`,
};

const DynamicTable = ({ columns, data: initialData, rowsPerPage = 10 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const tableType = location.pathname.split("/").pop();
  const deleteApiUrl = apiEndpoints[tableType];

  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState(
    initialData.map((row) => row.active_status)
  );


  useEffect(() => {
    console.log("Received initialData:", initialData);
    setData(initialData);
    setStatus(initialData.map((row) => row.status === "Active")); // Fix here
  }, [initialData]);

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const toggleStatus = (index) => {
    setStatus((prevStatus) => {
      const updatedStatus = [...prevStatus];
      updatedStatus[index] = !updatedStatus[index];
      console.log("Toggled Status:", updatedStatus); // Debugging
      return updatedStatus;
    });
  };

  // Filter Data Based on Search
  const filteredData = data.filter((row) =>
    columns.some((column) =>
      row[column.id]
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  // Pagination Logic
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Navigate to Edit Page
  const handleEdit = (row) => {
    navigate(`${location.pathname}/edit/${row.id}`);
  };

  const handleDeleteClick = (row) => {
    console.log("Selected Row for Deletion:", row);
    console.log("Deleting ID:", row.id || row._id || row.user_id); // Check which ID exists
    setSelectedRow(row);
    setOpenDeleteDialog(true);
  };
  

  // Handle Confirm Delete API Call
  const handleConfirmDelete = async () => {
    if (selectedRow && deleteApiUrl) {
      try {
        const response = await fetch(`${deleteApiUrl}/${selectedRow.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log(`Deleted ID: ${selectedRow.id} from ${tableType}`);
          setData((prevData) =>
            prevData.filter((row) => row.id !== selectedRow.id)
          );
        } else {
          console.error("Failed to delete:", await response.text());
        }
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
    setOpenDeleteDialog(false);
  };

  return (
    <Box>
      {/* Search and Add Button */}
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`${location.pathname}/add`)}
        >
          {tableType === "settings"
            ? "Add User"
            : tableType === "crm"
            ? "Add Client"
            : tableType === "operations"
            ? "Add Account"
            : tableType === "job_description"
            ? "Add Job Description"
            : `Add ${tableType.charAt(0).toUpperCase() + tableType.slice(1)}`}
        </Button>
      </Box>

      {/* Table */}
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
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Active Status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={row.id}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} align="center">
                    {row[column.id]}
                  </TableCell>
                ))}
                <TableCell align="center">
                  <Button onClick={() => toggleStatus(rowIndex)}>
                    <img
                      src={status[rowIndex] ? StatusOn : StatusOff}
                      alt={status[rowIndex] ? "Active" : "Inactive"}
                      width="40"
                      height="24"
                    />
                  </Button>
                </TableCell>

                <TableCell align="center">
                  <Box display="flex" justifyContent="center" gap={1}>
                    <Button
                      onClick={() => handleEdit(row)}
                      sx={{ minWidth: "30px", p: 0 }}
                    >
                      <img src={EditIcon} alt="Edit" width="45" height="35" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(row)}
                      sx={{ minWidth: "30px", p: 0 }}
                    >
                      <img
                        src={DeleteIcon}
                        alt="Delete"
                        width="45"
                        height="35"
                      />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 2 }}
      >
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Stack>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete{" "}
            <b>{selectedRow ? selectedRow[columns[1]?.id] : "this record"}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DynamicTable;

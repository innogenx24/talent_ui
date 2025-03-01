import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const OperationsTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "operation", label: "Operation Name" },
    { id: "status", label: "Status" },
    { id: "created_by", label: "Created By" },
    { id: "created_at", label: "Created At" },
  ];

  const data = [
    { id: 1, operation: "Data Cleanup", status: "Completed", created_by: "Admin", created_at: "2024-03-01" },
    { id: 2, operation: "Server Maintenance", status: "Pending", created_by: "IT Team", created_at: "2024-02-28" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Operations Log
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default OperationsTable;

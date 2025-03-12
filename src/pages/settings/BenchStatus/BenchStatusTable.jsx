import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const BenchStatusTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "employee", label: "Employee Name" },
    { id: "status", label: "Bench Status" },
  ];

  const data = [
    { id: 1, employee: "John Doe", status: "Available" },
    { id: 2, employee: "Jane Smith", status: "Occupied" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Bench Status
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

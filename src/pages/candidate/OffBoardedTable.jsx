import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const OffBoardedTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "employee_name", label: "Employee Name" },
    { id: "position", label: "Position" },
    { id: "offboarded_date", label: "OffBoarded Date" },
  ];

  const data = [
    { id: 1, employee_name: "Michael Brown", position: "Software Architect", offboarded_date: "2023-07-20" },
    { id: 2, employee_name: "Olivia Davis", position: "Product Manager", offboarded_date: "2023-08-01" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        OffBoarded Employees
      </Typography>
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default OffBoardedTable;

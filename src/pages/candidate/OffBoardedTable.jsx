import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const OffBoardedTable = () => {
  const columns = [
    { id: "employee_id", label: "Employee ID" },
    { id: "employee_name", label: "Employee Name" },
    { id: "position", label: "Position" },
    { id: "offboarded_date", label: "OffBoarded Date" },
  ];

  const data = [
    { employee_id: "EMP005", employee_name: "Michael Brown", position: "Software Architect", offboarded_date: "2023-07-20" },
    { employee_id: "EMP006", employee_name: "Olivia Davis", position: "Product Manager", offboarded_date: "2023-08-01" },
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

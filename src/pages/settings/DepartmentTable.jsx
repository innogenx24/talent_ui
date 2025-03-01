import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const DepartmentTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "department_name", label: "Department Name" },
    { id: "location", label: "Location" },
  ];

  const data = [
    { id: 1, department_name: "Human Resources", location: "New York" },
    { id: 2, department_name: "Engineering", location: "San Francisco" },
    { id: 3, department_name: "Sales", location: "Los Angeles" },
    { id: 4, department_name: "Marketing", location: "Chicago" },
    { id: 5, department_name: "Finance", location: "Seattle" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Department List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default DepartmentTable;

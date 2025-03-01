import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const BranchesTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "branch_name", label: "Branch Name" },
    { id: "location", label: "Location" },
  ];

  const data = [
    { id: 1, branch_name: "New York Branch", location: "New York" },
    { id: 2, branch_name: "San Francisco Branch", location: "San Francisco" },
    { id: 3, branch_name: "Los Angeles Branch", location: "Los Angeles" },
    { id: 4, branch_name: "Chicago Branch", location: "Chicago" },
    { id: 5, branch_name: "Seattle Branch", location: "Seattle" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Branches List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default BranchesTable;

import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const JobTitleTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "jobTitle", label: "Job Title" },
    { id: "department", label: "Department" },
  ];

  const data = [
    { id: 1, jobTitle: "Frontend Developer", department: "Engineering" },
    { id: 2, jobTitle: "Product Manager", department: "Product" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Job Titles
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

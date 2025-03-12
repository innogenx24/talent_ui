import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const InterviewNameTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "name", label: "Candidate Name" },
    { id: "role", label: "Position Applied" },
  ];

  const data = [
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "Data Scientist" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Interview Candidates
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

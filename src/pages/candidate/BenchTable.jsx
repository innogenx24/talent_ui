import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const BenchTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "candidate_name", label: "Candidate Name" },
    { id: "skills", label: "Skills" },
    { id: "availability", label: "Availability" },
  ];

  const data = [
    { id: 1, candidate_name: "Alice Brown", skills: "React, Node.js", availability: "Available" },
    { id: 2, candidate_name: "David Green", skills: "Python, Machine Learning", availability: "Bench" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Bench List
      </Typography>
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default BenchTable;

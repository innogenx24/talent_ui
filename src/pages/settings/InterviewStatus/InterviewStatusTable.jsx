import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const WorkLayoutTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "title", label: "Work Layout" },
    { id: "company", label: "Description" },
    { id: "location", label: "Location" }, // Added location column
  ];

  const data = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York" },
    { id: 2, title: "Data Scientist", company: "AI Solutions", location: "San Francisco" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Job Descriptions
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

// InterviewStatusTable with proper structure
export const InterviewStatusTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "candidate", label: "Candidate Name" },
    { id: "status", label: "Interview Status" },
  ];

  const data = [
    { id: 1, candidate: "John Doe", status: "Scheduled" },
    { id: 2, candidate: "Jane Smith", status: "Completed" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Interview Status
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

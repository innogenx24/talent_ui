import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const InterviewTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "candidateName", label: "Candidate Name" },
    { id: "position", label: "Position" },
    { id: "interviewDate", label: "Interview Date" },
    { id: "status", label: "Status" },
  ];

  const data = [
    { id: 1, candidateName: "John Doe", position: "Software Engineer", interviewDate: "2024-03-10", status: "Scheduled" },
    { id: 2, candidateName: "Jane Smith", position: "Data Analyst", interviewDate: "2024-03-12", status: "Completed" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Interview Schedule
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default InterviewTable;

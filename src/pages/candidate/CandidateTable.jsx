import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const CandidateTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Candidate Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone Number" },
    { id: "position", label: "Applied Position" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890", position: "Software Engineer" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "987-654-3210", position: "Data Analyst" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Candidate List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default CandidateTable;

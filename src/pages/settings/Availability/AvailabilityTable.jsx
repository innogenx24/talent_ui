import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const WorkLayoutTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "title", label: "Work Layout" },
    { id: "company", label: "Description"},
  ];

  const data = [
    { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York" },
    { id: 2, title: "Data Scientist", company: "AI Solutions", location: "San Francisco" },
  ];

  return (
    <>
     
      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export const AvailabilityTable = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Availability Table
      </Typography>
      <WorkLayoutTable />
    </div>
  );
};

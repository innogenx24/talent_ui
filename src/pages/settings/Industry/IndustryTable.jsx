import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const IndustryTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "industry", label: "Industry" },
    { id: "sector", label: "Sector" },
  ];

  const data = [
    { id: 1, industry: "Technology", sector: "Software Development" },
    { id: 2, industry: "Healthcare", sector: "Pharmaceuticals" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Industry Sectors
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

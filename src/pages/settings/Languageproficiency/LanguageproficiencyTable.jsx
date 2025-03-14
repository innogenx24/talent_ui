import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const LanguageProficiencyTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "language", label: "Language" },
    { id: "proficiency", label: "Proficiency Level" },
  ];

  const data = [
    { id: 1, language: "English", proficiency: "Fluent" },
    { id: 2, language: "Spanish", proficiency: "Intermediate" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Language Proficiency
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

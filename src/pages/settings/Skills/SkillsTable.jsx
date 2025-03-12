import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../../components/table-format/DynamicTable";

export const SkillsTable = () => {
  const columns = [
    { id: "id", label: "No." },
    { id: "skill", label: "Skill" },
    { id: "proficiency", label: "Proficiency Level" },
  ];

  const data = [
    { id: 1, skill: "React.js", proficiency: "Advanced" },
    { id: 2, skill: "JavaScript", proficiency: "Advanced" },
    { id: 3, skill: "Tailwind CSS", proficiency: "Intermediate" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Skills Overview
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

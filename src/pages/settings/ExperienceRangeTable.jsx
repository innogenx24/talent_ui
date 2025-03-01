import React from "react";
import { Typography } from "@mui/material";
import DynamicTable from "../../components/table-format/DynamicTable";

const ExperienceRangeTable = () => {
  const columns = [
    { id: "id", label: "ID" },
    { id: "min_experience", label: "Min Experience (Years)" },
    { id: "max_experience", label: "Max Experience (Years)" },
  ];

  const data = [
    { id: 1, min_experience: "0", max_experience: "1" },
    { id: 2, min_experience: "1", max_experience: "3" },
    { id: 3, min_experience: "3", max_experience: "5" },
    { id: 4, min_experience: "5", max_experience: "10" },
    { id: 5, min_experience: "10", max_experience: "15+" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ color: "#989FA9", mb: 2 }}>
        Experience Range List
      </Typography>

      <DynamicTable columns={columns} data={data} />
    </>
  );
};

export default ExperienceRangeTable;
